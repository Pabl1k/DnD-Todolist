import { FC, ChangeEventHandler, KeyboardEventHandler } from "react";
import "./TaskInput.scss";

interface Props {
  placeholder?: string;
  value?: string;
  autoFocus?: boolean;
  showError?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur?: () => void;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
}

const TaskInput: FC<Props> = ({
  placeholder,
  value,
  autoFocus,
  showError,
  onChange,
  onBlur,
  onKeyDown,
}) => {
  return (
    <>
      <input
        type="text"
        className="task-input"
        placeholder={placeholder}
        value={value}
        autoFocus={autoFocus}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
      {showError && (
        <span className="task-input__error">Title can not be empty</span>
      )}
    </>
  );
};

export default TaskInput;
