import { css } from "@emotion/react";
import { useState } from "react";

interface FilterProps {
  categories: string[];
  selectedFilter: string;
  setSelectedFilter: (value: string) => void;
}

const Filter = ({
  categories,
  selectedFilter,
  setSelectedFilter,
}: FilterProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // 필터링 적용 핸들러
  const handleFilter = (c: string) => {
    setSelectedFilter(c);
  };

  // 초기화 핸들러
  const handleReset = () => {
    setSelectedFilter("");
  };

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <p>필터링 영역</p>
      <div
        css={css`
          display: flex;
        `}
      >
        <div css={dropDownWrapper}>
          <button onClick={handleDropDown}>
            {selectedFilter ? selectedFilter : "선택하기"}
          </button>
          {isOpen && (
            <ul css={dropdownbox}>
              {categories.map((c: string) => (
                <li css={dropItem} onClick={() => handleFilter(c)}>
                  {c}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          css={css`
            box-sizing: border-box;
            height: fit-content;
          `}
          onClick={handleReset}
        >
          초기화
        </button>
      </div>
    </>
  );
};

export default Filter;

const dropDownWrapper = css`
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  width: 5rem;
`;

const dropdownbox = css`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  gap: 1rem;
`;

const dropItem = css`
  list-style: none;
  cursor: pointer;
  align-items: center;
  text-align: center;
`;
