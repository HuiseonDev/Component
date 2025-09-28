import { css } from "@emotion/react";

// 바텀CTA 버튼
// 버튼 뒤에 출력된 텍스트를 가리지 않도록 버튼에 영역을 적용
// 영역이 환경별로 동적으로 적용될 수 있도록 ResizeObserver 사용하는 방법 고려

//! 버튼을 공통으로 사용 가능하도록하고 라이브러리 의존 없이 개발하는게 우선인가?
//! 외부 라이브러리에 종속되어도 환경별 UI가 최대한 동일하게 출력되는게 우선인가?

interface bottomCTAProps {
  handleBottom: () => void;
  bottomCTAText: string;
  bottomCTADisabled: boolean;
}

const BottomCTA = ({
  handleBottom,
  bottomCTAText,
  bottomCTADisabled,
}: bottomCTAProps) => {
  return (
    <div css={bottomCTAWrapper}>
      <button
        css={bottomCTAStyle}
        onClick={handleBottom}
        disabled={bottomCTADisabled}
        type="button"
        aria-label={bottomCTAText}
      >
        {bottomCTAText}
      </button>
    </div>
  );
};

export default BottomCTA;

const bottomCTAWrapper = css`
  background-color: #ffffff;
  border-top: 1px solid #ccc;
  width: 100%;
  font-size: 10px;
  padding: 1rem 1rem;
  box-sizing: border-box;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

const bottomCTAStyle = css`
  width: calc(100% - 2rem);
  margin: 0 auto;
  padding: 1.2rem 2rem;
  font-size: 1.4rem;
  border-radius: 0.8rem;

  border: none;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #3182f6;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }

  &:active {
    transform: scale(0.998);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
