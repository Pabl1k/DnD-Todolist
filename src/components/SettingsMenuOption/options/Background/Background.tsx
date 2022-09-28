import { FC, useEffect, useState } from "react";
import { useManagement } from "../../../../api/calls/management";
import "./Background.scss";

interface Props {
  setBackgroundColor: (color: string) => void;
}

export const Background: FC<Props> = ({ setBackgroundColor }) => {
  const { updateSettings } = useManagement();
  const [color, setColor] = useState("");

  useEffect(() => {
    if (color) {
      updateSettings({ backgroundColor: color });
    }
  }, [color]);

  return (
    <div className="background">
      <input
        type="color"
        name="palette"
        onChange={(e) => {
          setColor(e.currentTarget.value);
          setBackgroundColor(e.currentTarget.value);
        }}
      />
      <label htmlFor="palette">Select background color</label>
    </div>
  );
};
