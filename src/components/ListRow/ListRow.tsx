import { css } from "@emotion/react";
import { useState } from "react";
import Filter from "../Filter/Filter";

interface mockDataType {
  title: string;
  subText?: string;
  img: string;
  disabled: boolean;
  category: string;
}

const ListRow = () => {
  // mock data를 만들기
  // 동일한 형태의 데이터를 맵핑하여 리스트에 동일한 UI로 출력
  // 각 요소마다 클릭이벤트가 가능하도록 관리
  // 이미지가 들어온다고 가정할때 모두 동일한 크기로 출력되도록 관리
  // 각 아이템 삭제하여 리스트에서 제외시키기 (disabled = boolean 값으로 노출 여부 결정하기)
  // 카테고라이징으로 필터링 적용

  // 편집 상태 관리
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [isFilter, setIsFilter] = useState<string>("");

  // 가상 리스트 데이터
  // 가능하면 다른 컴포넌트로 분리하고싶음
  const [isMockData, setIsMockData] = useState<mockDataType[]>([
    {
      title: "토스 연결하기",
      subText: "본인인증을 통한 토스 연동",
      img: "./vite.svg",
      disabled: false,
      category: "A",
    },
    {
      title: "결제 연동하기",
      img: "./vite.svg",
      disabled: false,
      category: "B",
    },
    {
      title: "둘러보기",
      subText: "서비스 둘러보기",
      img: "./vite.svg",
      disabled: false,
      category: "C",
    },
    {
      title: "게임",
      img: "./vite.svg",
      disabled: false,
      category: "A",
    },
  ]);

  // 카테고리 추출
  const categories = Array.from(
    new Set(isMockData.map((item) => item.category))
  );

  // 선택된 카테고리에 해당되는 데이터
  const filterData = isMockData.filter((item) =>
    item.category.includes(isFilter)
  );

  // 아이템 선택 핸들러
  const handleListDownItem = (Item: string) => {
    console.log("아이템 선택", Item);
  };

  // 아이템 편집 버튼 노출 핸들러
  const handleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  // 아이템 삭제 핸들러
  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    mockItem: string
  ) => {
    e.stopPropagation();
    setIsMockData((prev) => prev.filter((item) => item.title !== mockItem));
  };

  return (
    <>
      <Filter
        categories={categories}
        selectedFilter={isFilter}
        setSelectedFilter={setIsFilter}
      />
      <section>
        <button onClick={handleEdit}>
          {isEdit ? "수정완료" : "리스트 수정하기"}
        </button>
        {filterData.map((mockItem) => (
          <ul
            onClick={() => handleListDownItem(mockItem.title)}
            key={mockItem.title}
            css={ListRowWrapper}
          >
            <li css={ListRowItem}>
              <div
                css={css`
                  display: flex;
                  gap: 2rem;
                `}
              >
                <img src={mockItem.img} />
                <div css={TitleStyle}>
                  <p>{mockItem.title}</p>
                  {mockItem.subText && (
                    <p css={subTextStyle}>{mockItem.subText}</p>
                  )}
                </div>
              </div>
              {isEdit && (
                <button
                  onClick={(e) => handleDelete(e, mockItem.title)}
                  css={deleteStyle}
                >
                  삭제
                </button>
              )}
            </li>
          </ul>
        ))}
      </section>
    </>
  );
};

export default ListRow;

const ListRowWrapper = css`
  width: calc(100% - 4rem);
  padding: 1rem 2rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    border: 1px solid #898989;
  }
`;

const ListRowItem = css`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleStyle = css`
  font-weight: 600;
`;

const subTextStyle = css`
  font-size: 1rem;
  color: #686868;
`;

const deleteStyle = css`
  border: unset;
  background-color: #eeee;
  border-radius: 1rem;
  height: fit-content;
  padding: 1rem;
  cursor: pointer;
`;
