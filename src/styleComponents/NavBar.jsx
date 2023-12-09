import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

export const NavBar = ({
  generationArr,
  setSearchData,
  setGeneration,
  searchValue,
  searchHandle,
  setSearchClear,
}) => {
  return (
    <NavBarContainer>
      <div style={{ textAlign: "center" }}>
        {generationArr.map((a, i) => {
          return (
            <button
              key={i}
              onClick={() => {
                setSearchData(null);
                setGeneration((state) => ({
                  ...state,
                  offset: a.offset,
                  limit: a.limit,
                }));
              }}
            >
              {a.generation}
            </button>
          );
        })}
      </div>
      <div
        className="search_box card"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <input type="text" value={searchValue} onChange={searchHandle} />
        <SearchIcon
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            if (searchValue === "") setSearchData(null);
            setSearchClear(true);
          }}
        />
      </div>
    </NavBarContainer>
  );
};

export const NavBarContainer = styled.div`
  @media (min-width: 640px) {
    .container {
      padding: 15px;
    }
  }
  @media (min-width: 1024px) {
    .container {
      padding: 20px;
    }
  }
  & > div.search_box {
    padding: 10px 20px;
    border-radius: 15px;
    margin: 30px auto;
    width: 80%;
  }
  & > div input {
    border: none;
    width: 100%;
    padding: 10px;
  }
  & > div input:focus-visible {
    outline: none;
  }
`;
