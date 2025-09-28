import { css } from "@emotion/react";
import BottomCTASection from "./components/BottomCTA/BottomCTASection";

import ListRow from "./components/ListRow/ListRow";
import ButtonSection from "./components/Button/ButtonSection";
import Toggle from "./components/Toggle/Toggle";

function App() {
  return (
    <div css={AppWrapper}>
      <ButtonSection /> {/* 기본 Button 영역 */}
      <ListRow /> {/* listRow 영역 */}
      <BottomCTASection /> {/* Bottom CTA 영역 */}
      <Toggle /> {/* 토글버튼 */}
    </div>
  );
}

export default App;

const AppWrapper = css`
  padding-bottom: 8rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
