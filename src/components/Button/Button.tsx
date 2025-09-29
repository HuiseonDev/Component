import { css } from "@emotion/react";
import type { ComponentPropsWithoutRef } from "react";

interface BasicButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
}

const Button = ({ children, size = "small", ...rest }: BasicButtonProps) => {
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

    &:hover {
      background-color: #2563eb;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #ccc;
    }
  `;

  return (
    <button type="button" css={styles} {...rest}>
      {children}
    </button>
  );
};

export default Button;
