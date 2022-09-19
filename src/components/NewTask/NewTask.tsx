import { ChangeEvent, FC, KeyboardEvent, useState } from "react";
import firebase from "firebase";
import { uid } from "../../hooks/uid";
import { TaskType } from "../../types/item";
import { COLLECTION } from "../../api/destination";
import "./NewTask.scss";
import { useManagement } from "../../api/calls/management";

interface Props {
  onNewTaskClose: () => void;
}

const NewTask: FC<Props> = ({ onNewTaskClose }) => {
  const [values, setValues] = useState({ title: "", description: "" });
  const [error, setError] = useState(false);

  const { addTask } = useManagement();

  const inputs = [
    {
      id: "1",
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
      id: "2",
      placeholder: "Enter description (optional)",
      autoFocus: false,
      value: values.description,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setValues({ ...values, description: e.currentTarget.value }),
      onBlur: undefined,
    },
  ];
  const newTask: TaskType = {
    id: uid(),
    title: values.title,
    description: values.description,
    priority: false,
    pinned: false,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  };

  const saveNewTask = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !error) {
      onNewTaskClose();
      await addTask(COLLECTION.TODO, newTask);
    }
  };

  const abandonedNewTask = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      onNewTaskClose();
    }
  };

  return (
    <div className="new-task" key={uid()}>
      <div className="new-task__inputs-container">
        {inputs.map((x) => (
          <>
            <input
              key={x.placeholder}
              type="text"
              className="new-task__input"
              placeholder={x.placeholder}
              value={x.value}
              autoFocus={x.autoFocus}
              onChange={x.onChange}
              onBlur={x.onBlur}
              onKeyDown={(e) => {
                abandonedNewTask(e);
                saveNewTask(e);
              }}
            />
            {x.id === "1" && error && (
              <span className="new-task__error">Title can not be empty</span>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default NewTask;
