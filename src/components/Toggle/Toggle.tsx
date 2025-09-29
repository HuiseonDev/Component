import { css } from "@emotion/react";
import { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <button css={toggleButton(isOn)} onClick={handleToggle}>
      <span css={toggleCircle(isOn)} />
    </button>
  );
};

export default Toggle;

const toggleButton = (isOn: boolean) => css`
  width: 5rem;
  height: 2rem;
  background-color: ${isOn ? `#ffff` : `#eeee`};
  border: 1px solid #aaaa;
  cursor: pointer;
  border-radius: 1rem;
  transition: background-color 0.2s ease;
  display: flex;
  padding: 0.4rem;
`;

const toggleCircle = (isOn: boolean) => css`
  width: 1.2rem;
  height: 1.2rem;
  background-color: ${isOn ? `black` : `#9999`};
  border-radius: 50%;
  transform: ${isOn ? "translateX(3rem)" : "translateX(0)"};
  transition: transform 0.2s ease;
`;
