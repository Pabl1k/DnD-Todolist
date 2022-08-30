import { createRef, FC } from "react";
import "./Background.scss";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";

interface Props {
  onClose: () => void;
}

export const Background: FC<Props> = ({ onClose }) => {
  const modalRef = createRef<HTMLDivElement>();
  useOutsideClick(modalRef, onClose);

  return (
    <div className="background">
      <div className="background__modal" ref={modalRef}>
        Lorem ipsum dolor sit amet.
      </div>
    </div>
  );
};
