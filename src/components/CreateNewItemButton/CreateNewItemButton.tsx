import { FC } from "react";
import "./CreateNewItemButton.scss";

interface Props {
  title: string;
}

const CreateNewItemButton: FC<Props> = ({ title }) => {
  return (
    <button className="create-new-item-button" title={title}>
      <span>+</span>
    </button>
  );
};

export default CreateNewItemButton;
