import { useState } from "react";
import background from "./assets/background/2.jpeg";
import Settings from "./containers/Settings/Settings";
import ListSelector from "./containers/ListSelector/ListSelector";
import { BoardType } from "./types/board";
import { ItemLocationType } from "./types/ItemLocations";
import { ItemLocationsInitialState } from "./common/ItemLocationsInitialState";
import Board from "./components/Board/Board";
import Item from "./components/Item/Item";
import { uid } from "./hooks/uid";
import "./MainPage.scss";

const MainPage = () => {
  console.log("PR test");
  const backgroundImg = {
    backgroundImage: `url(${background})`,
  };

  const [boards, setBoards] = useState<BoardType[]>([
    {
      id: "toDo",
      title: "To do",
      items: [
        {
          id: uid(),
          title: "111",
          priority: true,
        },
        {
          id: uid(),
          title: "222",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
            "Animi cupiditate delectus eligendi laborum omnis tempora.",
        },
      ],
    },
    {
      id: "inProgress",
      title: "In Progress",
      items: [
        {
          id: uid(),
          title: "333",
          date: "2020-02-02",
        },
        {
          id: uid(),
          title: "444",
        },
      ],
    },
    {
      id: "done",
      title: "Done",
      items: [],
    },
  ]);
  const [itemLocations, setItemLocations] = useState<ItemLocationType>(
    ItemLocationsInitialState
  );

  const dragStartHandler = (boardIndex: number, itemIndex: number) => {
    setItemLocations((prevState) => {
      return {
        ...prevState,
        start: {
          board: boardIndex,
          item: itemIndex,
        },
      };
    });
  };

  const dragOverItemHandler = (dropBoard: number, dropPosition: number) => {
    setItemLocations((prevState) => {
      return {
        ...prevState,
        end: {
          board: dropBoard,
          item: dropPosition,
        },
      };
    });
  };

  const dragEnterHandler = (dropBoard: number) => {
    setItemLocations((prevState) => {
      return {
        ...prevState,
        end: {
          board: dropBoard,
          item: 0,
        },
      };
    });
  };

  const dragEndHandler = () => {
    const { start, end } = itemLocations;
    const stateCopy = [...boards];

    if (start.board === end.board) {
      const movedItem = stateCopy[start.board].items.splice(start.item, 1);
      stateCopy[start.board].items.splice(end.item, 0, ...movedItem);
    } else {
      const removedItem = stateCopy[start.board].items.splice(start.item, 1);
      stateCopy[end.board].items.splice(end.item, 0, ...removedItem);
    }

    setBoards(stateCopy);
  };

  return (
    <section className="main-page" style={backgroundImg}>
      <ListSelector />
      <div className="main-page__container">
        {boards.map((board, boardIndex) => (
          <Board
            key={board.id}
            title={board.title}
            toDoCard={board.id === "toDo"}
            onDragEng={dragEndHandler}
            onDragEnter={() => dragEnterHandler(boardIndex)}
          >
            {board.items?.map((item, itemIndex) => (
              <Item
                key={item.id}
                data={item}
                onDragStart={() => dragStartHandler(boardIndex, itemIndex)}
                onDragOver={() => dragOverItemHandler(boardIndex, itemIndex)}
              />
            ))}
          </Board>
        ))}
      </div>
      <Settings />
    </section>
  );
};

export default MainPage;
