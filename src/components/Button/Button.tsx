import { css } from "@emotion/react";
import type { ComponentPropsWithoutRef } from "react";

interface BasicButtonProps extends ComponentPropsWithoutRef<"button"> {
  BasicButtontext: string;
  size: "small" | "medium" | "large";
  width: "fit" | "max";
}

const Button = ({
  BasicButtontext,
  size = "small",
  width = "fit",
  disabled = false,
  onClick,
  ...rest
}: BasicButtonProps) => {
  // 버튼 가로값 스타일
  const widthStyles = {
    fit: css`
      min-width: fit-content;
      max-width: fit-content;
      padding: 0 1rem;
    `,
    max: css`
      width: 100%;
    `,
  };

  // 버튼 크기 (높이기반) 스타일
  const sizeStyles = {
    small: css`
      height: 3rem;
      border-radius: 0.6rem;
      font-size: 1rem;
    `,
    medium: css`
      height: 3.4rem;
      border-radius: 0.6rem;
      font-size: 1rem;
    `,
    large: css`
      height: 4.5rem;
      border-radius: 0.8rem;
      font-size: 1.2rem;
    `,
  };

  // 버튼 기본 스타일 및 가로,높이 동적 적용
  const styles = css`
    border: none;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
    background-color: #3182f6;
    color: white;

    ${sizeStyles[size]}
    ${widthStyles[width]}

    &:hover {
      background-color: #2563eb;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #ccc;
    }
  `;

  return (
    <button
      aria-label={BasicButtontext}
      type="button"
      css={styles}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {BasicButtontext}
    </button>
  );
};

export default Button;
