import { FC } from "react";
import "./CreateNewItemButton.scss";

interface Props {
  title: string;
  onClick: () => void;
}

const CreateNewItemButton: FC<Props> = ({ title, onClick }) => {
  return (
    <button className="create-new-item-button" title={title} onClick={onClick}>
      <span>+</span>
    </button>
  );
};

export default CreateNewItemButton;
