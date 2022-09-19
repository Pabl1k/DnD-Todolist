import { useState } from "react";
import Board from "../Board/Board";
import Item from "../../components/Item/Item";
import Settings from "../Settings/Settings";
import ListSelector from "../ListSelector/ListSelector";
import { Background as BackgroundSettings } from "../../components/SettingsMenuOption/options/Background/Background";
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

  const [openBackgroundSettings, setOpenBackgroundSettings] = useState(false);
  const [draggedTask, setDraggedTask] = useState<IDraggedTask | null>(null);

  const { addTask, deleteTask } = useManagement();

  const dragEnterHandler = (endBoard: CollectionType) => {
    setDraggedTask({
      ...draggedTask,
      endBoard,
    });
  };

  const dragStartHandler = (startBoard: CollectionType, task: TaskType) => {
    setDraggedTask({
      ...draggedTask,
      startBoard: startBoard,
      task,
    });
  };

  const dragEndHandler = async () => {
    const differentBoard = draggedTask?.startBoard !== draggedTask?.endBoard;

    if (
      draggedTask &&
      draggedTask.startBoard &&
      draggedTask.endBoard &&
      draggedTask.task &&
      differentBoard
    ) {
      await addTask(draggedTask.endBoard, draggedTask.task);
      await deleteTask(draggedTask.startBoard, draggedTask.task.id);
      setDraggedTask(null);
    }
  };

  return (
    <section className="main-page">
      {openBackgroundSettings && (
        <BackgroundSettings onClose={() => setOpenBackgroundSettings(false)} />
      )}
      <ListSelector />
      <div className="main-page__container">
        {generalState.map((board) => (
          <Board
            key={board.id}
            title={board.title}
            toDoCard={board.id === COLLECTION.TODO}
            onDragEng={() => dragEndHandler()}
            onDragEnter={() => dragEnterHandler(board?.id)}
          >
            {board.state?.map((state) => (
              <Item
                key={state.id}
                data={state}
                onDragStart={() => dragStartHandler(board.id, state)}
              />
            ))}
          </Board>
        ))}
      </div>
      <Settings onBackgroundOpen={() => setOpenBackgroundSettings(true)} />
    </section>
  );
};

export default MainPage;
