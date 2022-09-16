import { useState } from "react";
import Board from "../../components/Board/Board";
import Item from "../../components/Item/Item";
import Settings from "../Settings/Settings";
import ListSelector from "../ListSelector/ListSelector";
import { Background as BackgroundSettings } from "../../components/SettingsMenuOption/options/Background/Background";
import { useFetchDataAPI } from "../../api/getData";
import NewTask from "../../components/NewTask/NewTask";
import "./MainPage.scss";

const MainPage = () => {
  const { toDoState, inProgressState, doneState } = useFetchDataAPI();
  const generalState = [
    { id: "toDo", title: "To do", state: toDoState },
    { id: "inProgress", title: "In progress", state: inProgressState },
    { id: "done", title: "Done", state: doneState },
  ];

  const [addNewTask, setAddNewTask] = useState(false);
  const [openBackgroundSettings, setOpenBackgroundSettings] = useState(false);

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
            toDoCard={board.id === "toDo"}
            onDragEng={() => {}}
            onDragEnter={() => {}}
            onCreateTask={() => setAddNewTask(true)}
          >
            {board.id === "toDo" && addNewTask && (
              <NewTask
                key="newTask"
                onNewTaskSave={() => setAddNewTask(false)}
              />
            )}
            {board.state?.map((state) => (
              <Item key={state.id} data={state} />
            ))}
          </Board>
        ))}
      </div>
      <Settings onBackgroundOpen={() => setOpenBackgroundSettings(true)} />
    </section>
  );
};

export default MainPage;
