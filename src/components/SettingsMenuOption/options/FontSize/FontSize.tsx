import CircleCheckbox from "../../../CircleCheckbox/CircleCheckbox";
import "./FontSize.scss";

const FontSize = () => {
  const options = [
    { id: 1, title: "Small", active: true, onClick: () => {} },
    { id: 2, title: "Large", active: false, onClick: () => {} },
  ];

  return (
    <div className="font-size">
      {options.map((opt) => (
        <div key={opt.id} className="font-size__single">
          <CircleCheckbox active={opt.active} />
          <span>{opt.title}</span>
        </div>
      ))}
    </div>
  );
};

export default FontSize;
