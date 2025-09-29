import { useState } from "react";
import BottomCTA from "./BottomCTA";

const BottomCTASection = () => {
  const [isCTADisabled, setIsCTADisabled] = useState<boolean>(true);

  const handleReady = () => {
    console.log("바텀CTA 버튼 활성화 완료");
    setIsCTADisabled((prev) => !prev);
  };

  //** 이동하는 로직 추가 */
  const handleBottomButton = () => {
    console.log("이동");
  };

  return (
    <section>
      <p>bottom CTA 영역</p>
      <label aria-label="바텀 CTA 버튼 활성화 체크박스">
        <input type="checkbox" onChange={handleReady} />
        <span>바텀CTA 버튼 활성화</span>
      </label>
      <BottomCTA disabled={isCTADisabled} onClick={handleBottomButton}>
        이동하기
      </BottomCTA>
    </section>
  );
};

export default BottomCTASection;
