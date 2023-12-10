import React from "react";
import styled from "styled-components";

export const Header = ({
  changeLanguage,
  setSelectPoketMon,
  setSearchTerm,
  setGeneration,
  generationArr,
}) => {
  return (
    <HeaderContainer>
      <div
        className="title"
        onClick={() => {
          setSelectPoketMon("");
        }}
      >
        <h3>포켓몬 도감</h3>
      </div>

      <div style={{ textAlign: "center", display: "flex", gap: "10px" }}>
        {generationArr.map((a, i) => {
          return (
            <button
              key={i}
              style={{
                borderRadius: "10px",
                background: "#fff",
              }}
              onClick={() => {
                setSelectPoketMon("");
                setSearchTerm(""); //검색 초기화
                setGeneration((state) => ({
                  ...state,
                  offset: a.offset,
                  limit: a.limit,
                }));
              }}
            >
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
                alt="포켓볼"
              />
              {/* {a.generation} */}
            </button>
          );
        })}
      </div>

      {/* <div className="button_box">
        <button
          onClick={() => {
            changeLanguage("en");
          }}
        >
          English
        </button>
        <button
          onClick={() => {
            changeLanguage("ko");
          }}
        >
          한국어
        </button>
      </div> */}
    </HeaderContainer>
  );
};

export const HeaderContainer = styled.div`
  align-items: center;
  @media (min-width: 640px) {
    padding: 20px 40px;
  }

  @media (min-width: 1024px) {
  }
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #fff;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
  /* color: #fff; */
  z-index: 5;
  .button_box {
    background: red;
    display: flex;
  }
`;
