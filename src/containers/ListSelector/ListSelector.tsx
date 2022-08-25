import SelectorItem from "../../components/SelectorItem/SelectorItem";
import "./ListSelector.scss";
import CreateNewItemButton from "../../components/CreateNewItemButton/CreateNewItemButton";

const ListSelector = () => {
  return (
    <div className="list-selector">
      <div className="list-selector__button-container">
        <CreateNewItemButton title="Add new list" />
      </div>
      <SelectorItem title="selector" />
    </div>
  );
};

export default ListSelector;
