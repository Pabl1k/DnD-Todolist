import CreateNewItemButton from "../../components/CreateNewItemButton/CreateNewItemButton";
import SelectorItem from "../../components/SelectorItem/SelectorItem";
import { useAppContext } from "../../hooks/useAppContext";
import "./ListSelector.scss";

/**
 *  ListSelector component will be for future updates
 */
const ListSelector = () => {
  const { auth } = useAppContext();

  const logoutHandler = async () => {
    await auth.signOut();
  };

  /**
   * TODO: Transfer Logout button in the right place
   */

  return (
    <div className="list-selector">
      <div className="list-selector__button-container">
        <CreateNewItemButton title="Add new list" onClick={() => {}} />
      </div>
      <SelectorItem title="selector" />
      <button
        style={{ border: "2px solid black", marginLeft: 15 }}
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );
};

export default ListSelector;
