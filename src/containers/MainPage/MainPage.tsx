import { useState } from "react";
import Board from "../Board/Board";
import Item from "../../components/Item/Item";
import { useFetchDataAPI } from "../../api/calls/fetchData";
import { useManagement } from "../../api/calls/management";
import { TaskType } from "../../types/item";
import { COLLECTION, CollectionType } from "../../api/destination";
import "./MainPage.scss";

interface IDraggedTask {
  startBoard?: CollectionType;
  endBoard?: CollectionType;
  task?: TaskType;
}

const MainPage = () => {
  const { toDoState, inProgressState, doneState } = useFetchDataAPI();
  const generalState = [
    { id: COLLECTION.TODO as CollectionType, title: "To do", state: toDoState },
    {
      id: COLLECTION.IN_PROGRESS as CollectionType,
      title: "In progress",
      state: inProgressState,
    },
    { id: COLLECTION.DONE as CollectionType, title: "Done", state: doneState },
  ];

  const [draggedTask, setDraggedTask] = useState<IDraggedTask | null>(null);

  const { addTask, deleteTask } = useManagement();

  const dragStartHandler = (startBoard: CollectionType, task: TaskType) => {
    setDraggedTask({
      ...draggedTask,
      startBoard,
      task,
    });
  };

  const dragEnterHandler = (endBoard: CollectionType) => {
    setDraggedTask({
      ...draggedTask,
      endBoard,
    });
  };

  const dragEndHandler = async (boardIndex: number) => {
    const differentBoard = draggedTask?.startBoard !== draggedTask?.endBoard;

    if (
      draggedTask?.startBoard &&
      draggedTask?.endBoard &&
      draggedTask?.task &&
      differentBoard
    ) {
      const indexToBeRemoved = generalState[boardIndex].state
        ?.map((x) => x.id)
        .indexOf(draggedTask.task.id);

      generalState[boardIndex].state?.splice(indexToBeRemoved!, 1);

      await addTask(draggedTask.endBoard, draggedTask.task);
      await deleteTask(draggedTask.startBoard, draggedTask.task.id);
      setDraggedTask(null);
    }
  };

  return (
    <section className="main-page">
      <div className="main-page__container">
        {generalState.map((board, boardIndex) => (
          <Board
            key={board.id}
            title={board.title}
            toDoCard={board.id === COLLECTION.TODO}
            onDragEnter={() => dragEnterHandler(board?.id)}
            onDragEnd={() => dragEndHandler(boardIndex)}
          >
            {board.state?.map((state) => (
              <Item
                key={state.id}
                data={state}
                collection={board.id}
                onDragStart={() => dragStartHandler(board.id, state)}
              />
            ))}
          </Board>
        ))}
      </div>
    </section>
  );
};

export default MainPage;
