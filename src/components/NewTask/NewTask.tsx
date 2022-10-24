import firebase from "firebase";
import { ChangeEvent, FC, KeyboardEvent, useState } from "react";
import { useManagement } from "../../api/calls/management";
import { COLLECTION } from "../../api/destination";
import { uid } from "../../hooks/uid";
import { TaskType } from "../../types/item";
import TaskInput from "../TaskInput/TaskInput";
import "./NewTask.scss";

interface Props {
  onNewTaskClose: () => void;
}

const NewTask: FC<Props> = ({ onNewTaskClose }) => {
  const [values, setValues] = useState({ title: "", description: "" });
  const [error, setError] = useState(false);

  const { addTask } = useManagement();

  const inputs = [
    {
      id: "titleInput",
      placeholder: "Enter task title",
      autoFocus: true,
      value: values.title,
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setValues({ ...values, title: e.currentTarget.value });
      },
      onBlur: () => setError(!values.title),
    },
    {
      id: "descriptionInput",
      placeholder: "Enter description (optional)",
      value: values.description,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setValues({ ...values, description: e.currentTarget.value }),
    },
  ];
  const newTask: TaskType = {
    id: uid(),
    title: values.title.trim(),
    description: values.description.trim(),
    priority: false,
    pinned: false,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  };

  const onKeyPress = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !error) {
      onNewTaskClose();
      await addTask(COLLECTION.TODO, newTask);
    }
    if (e.key === "Escape") {
      onNewTaskClose();
    }
  };

  return (
    <div className="new-task">
      <div className="new-task__inputs-container">
        {inputs.map((x) => (
          <TaskInput
            key={x.placeholder}
            placeholder={x.placeholder}
            value={x.value}
            autoFocus={x.autoFocus}
            showError={x.id === "titleInput" && error}
            onChange={x.onChange}
            onBlur={x.onBlur}
            onKeyDown={(e) => onKeyPress(e)}
          />
        ))}
      </div>
    </div>
  );
};

export default NewTask;
