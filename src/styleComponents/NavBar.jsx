import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import useInputState from "../hooks/useInputState";
import p_1 from "./../../src/assets/images/1.png";
import { useQuery } from "react-query";

export const NavBar = ({
  generationArr,
  setGeneration,
  setPage,
  generation,
  getData,
  setSelectPoketMon,
  searchTerm,
  setSearchTerm,
  displayState,
  setDisplayState,
}) => {
  const { data, isLoading } = useQuery(["searchArr", generation], getData, {
    staleTime: 60000,
    refetchOnWindowFocus: false,
    select: (data) => {
      if (searchTerm === "") {
        return undefined;
      }
      if (data !== undefined) {
        return data.filter((item) =>
          item.name_KO.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
    },
  });

  const inputRef = useRef(null);

  const [defaultValue, setDefaultValue] = useState(p_1);

  const highlightSearchTerm = (text, searchTerm) => {
    if (!searchTerm) {
      return text;
    }

    const regex = new RegExp(`(${searchTerm})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <p
          key={index}
          style={{ fontWeight: "bold", color: "red", display: "inline-block" }}
        >
          {part}
        </p>
      ) : (
        part
      )
    );
  };
  const handleButtonClick = () => {
    // 버튼 클릭 시 inputRef의 current 속성을 사용하여 인풋 포커스
    inputRef.current.focus();
  };
  return (
    <NavBarContainer>
      {/* <div style={{ textAlign: "center" }}>
        {generationArr.map((a, i) => {
          return (
            <button
              key={i}
              onClick={() => {
                // setPage(1);
                setSelectPoketMon("");
                setSearchTerm(""); //검색 초기화
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
      </div> */}
      <div
        className="search_box card"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setDisplayState("");
            setSearchTerm(e.target.value);
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />

        <SearchIcon
          onClick={() => {
            if (searchTerm === "") setSelectPoketMon("");
            else setSelectPoketMon(searchTerm);
          }}
          style={{
            cursor: "pointer",
          }}
        />
      </div>

      <div
        className={
          data !== undefined && data.length > 0
            ? `searchArr_style ${displayState}`
            : ""
        }
      >
        {data !== undefined &&
          data.map((a) => {
            return (
              <div
                key={a.id}
                onClick={() => {
                  setSelectPoketMon(a.name_KO);
                  setSearchTerm(a.name_KO);
                  setDisplayState("none");
                }}
              >
                <img src={a.imgUrl} alt="이미지" width={"40px"} />
                <h4 style={{ display: "inline-block", marginLeft: "10px" }}>
                  {highlightSearchTerm(a.name_KO, searchTerm)}
                </h4>
              </div>
            );
          })}
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
  width: 100%;
  & > div.search_box {
    padding: 10px 20px;
    border-radius: 15px;
    margin: 0px auto 10px;
    width: 80%;
    background: #fff;
  }
  & > div input {
    border: none;
    width: 100%;
    padding: 10px;
  }
  & > div input:focus-visible {
    outline: none;
  }
  .searchArr_style {
    display: flex;
    flex-direction: column;
    max-height: 200px;
    margin-bottom: 20px;
    overflow-y: auto;
    padding: 10px 20px;
    width: 80%;
    margin: 5px auto;
    box-shadow: 0 1px 0px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    position: relative;
    top: -18px;
    background: #fff;
  }
  .searchArr_style h4 {
    padding: 5px;
    background: #fff;
    border-bottom: 1px solid #ddd;
    width: 100%;
  }
  .searchArr_style h4:hover {
    background: #ddd;
  }
  .searchArr_style > div {
    display: flex;
    width: 100%;
    align-items: baseline;
  }

  .none {
    display: none;
  }
`;
