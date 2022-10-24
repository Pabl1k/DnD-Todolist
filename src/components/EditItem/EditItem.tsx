import { FC, ChangeEvent, KeyboardEvent, useState } from "react";
import { useManagement } from "../../api/calls/management";
import { CollectionType } from "../../api/destination";
import TaskInput from "../TaskInput/TaskInput";
import "./EditItem.scss";

interface Props {
  itemId: string;
  title: string;
  description?: string;
  collection: CollectionType;
  onClose: () => void;
}

const EditItem: FC<Props> = ({
  itemId,
  title,
  description,
  collection,
  onClose,
}) => {
  const [newValues, setNewValues] = useState({ title: "", description: "" });

  const { updateTask } = useManagement();

  const inputsData = [
    {
      id: "title",
      autoFocus: true,
      currentValue: title,
      newValue: newValues.title,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setNewValues({ ...newValues, title: e.currentTarget.value }),
    },
    {
      id: "description",
      currentValue: description,
      newValue: newValues.description,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setNewValues({ ...newValues, description: e.currentTarget.value }),
    },
  ];

  const onKeyPress = async (e: KeyboardEvent<HTMLInputElement>) => {
    const { title: newTitle, description: newDescription } = newValues;

    const newData = {
      title: newTitle ? newTitle.trim() : title,
      description: newDescription ? newDescription.trim() : description,
    };

    if (e.key === "Enter") {
      await updateTask(collection, itemId, newData);
      onClose();
    }

    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div className="edit-item">
      {inputsData.map((x) => (
        <TaskInput
          key={x.id}
          placeholder={x.currentValue}
          value={x.newValue}
          onChange={x.onChange}
          onKeyDown={(e) => onKeyPress(e)}
        />
      ))}
    </div>
  );
};

export default EditItem;
