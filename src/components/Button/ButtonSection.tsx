import { css } from "@emotion/react";
import Button from "./Button";
import { useState } from "react";

const ButtonSection = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleReady = () => {
    console.log("기본 버튼 활성화 완료");
    setIsButtonDisabled((prev) => !prev);
    setIsChecked((prev) => !prev);
  };

  const handleClick = () => {
    console.log("버튼클릭");
  };

  return (
    <section>
      <p>기본 버튼 영역</p>

      <label css={checkboxWrapper} aria-label="기본 버튼 활성화 체크박스">
        <input css={checkboxStyle} type="checkbox" onChange={handleReady} />
        <span css={[checkboxBox, isChecked && checkedBox]} />
        <span>기본 버튼 활성화</span>
      </label>

      <div
        css={css`
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-bottom: 1rem;
        `}
      >
        <Button
          onClick={handleClick}
          disabled={isButtonDisabled}
          size="small"
          aria-label="small-fit-test-button"
        >
          small
        </Button>
      </div>
      <div
        css={css`
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-bottom: 1rem;
        `}
      >
        <Button onClick={handleClick} disabled={isButtonDisabled} size="medium">
          medium
        </Button>
      </div>
      <div
        css={css`
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-bottom: 1rem;
        `}
      >
        <Button onClick={handleClick} disabled={isButtonDisabled} size="large">
          large
        </Button>
      </div>
    </section>
  );
};

export default ButtonSection;

const checkboxWrapper = css`
  display: flex;
  position: relative;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const checkboxStyle = css`
  position: absolute;
  opacity: 0;
`;

const checkboxBox = css`
  width: 2rem;
  height: 2rem;
  background-color: #ffffff;
  border: 1px solid #ccc;
  position: relative;
  border-radius: 0.4rem;
`;

const checkedBox = css`
  width: 2rem;
  height: 2rem;
  border-color: #3182f6;
  background-color: #3182f6;
  border-radius: 0.4rem;

  &::after {
    content: "✔︎";
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1rem;
  }
`;
