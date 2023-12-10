import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";

import { useQueryClient, useQuery } from "react-query";

import { Header } from "./styleComponents/Header";
import { NavBar } from "./styleComponents/NavBar";
import { Contents } from "./styleComponents/Contents";
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import useInputState from "./hooks/useInputState";

import { Loading } from "./components/Loading";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Detail } from "./components/Detail";

function Client() {
  const navigate = useNavigate();
  const color = {
    color: "rgb(47 124 187)",
  };
  // 세대별 offset & limit
  const generationArr = [
    { generation: "1 세대", offset: 1, limit: 151 },
    { generation: "2 세대", offset: 152, limit: 251 },
    { generation: "3 세대", offset: 252, limit: 386 },
    { generation: "4 세대", offset: 387, limit: 494 },
    { generation: "5 세대", offset: 495, limit: 649 },
  ];
  const [generation, setGeneration] = useState({
    offset: 1,
    limit: 151,
  });
  const [state, updateState] = useInputState("");

  const [selectPoketMon, setSelectPoketMon] = useState("");

  // 언어변경 store 연결필요
  const [language, setLanguage] = useState("ko");

  const changeLanguage = useCallback(
    (type) => {
      setLanguage(type);
    },
    [language]
  );

  //포켓몬 세대별 데이터 가져오기
  const fetchPokemonSpecies = async (id) => {
    try {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon-species/" + parseInt(id) + "/"
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  //포켓몬 세대별 데이터 가져오기
  const fetchPokemonData = async (id) => {
    try {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/" + parseInt(id)
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const getData = useCallback(async () => {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${generation.offset}&limit=${
        generation.limit + 1 - generation.offset
      }`
    );
    try {
      const PromiseData = await Promise.all(
        res.data.results.map(async (a, i) => {
          const url = a.url;
          const segments = url.split("/");
          const id = parseInt(segments[segments.length - 2], 10);
          const pokeData_1 = await fetchPokemonSpecies(id - 1); //포켓몬이름,정보
          const pokeData_2 = await fetchPokemonData(id - 1); //포켓몬 이미지
          // //가공데이터
          const processData = {
            ...pokeData_1,
            ...pokeData_2,
            //한글 텍스트찾기
            flavor_text_entries: pokeData_1.flavor_text_entries.filter(
              (a) => a.language.name === "ko"
            )[0].flavor_text,
            name_KO: pokeData_1.names.filter((a) => a.language.name === "ko")[0]
              .name,
            //gif 가공
            imgUrl:
              pokeData_2.sprites.versions["generation-v"]["black-white"]
                .animated.front_default,
            officialArtwork:
              pokeData_2?.sprites.other["official-artwork"].front_default,
          };

          return processData;
        })
      );

      return PromiseData;
    } catch (err) {
      console.log(err);
    }
  }, [generation]);

  const OFFSET = 10;
  const [page, setPage] = useState(1);

  //리액트쿼리
  const { data = [], isLoading } = useQuery(["dataArr", generation], getData, {
    staleTime: 60000,
    refetchOnWindowFocus: false,
    select: useCallback(
      (data) => {
        // console.log(data);

        return selectPoketMon !== ""
          ? data.filter((a) => a.name_KO === selectPoketMon)
          : data;
        return data;
      },
      [selectPoketMon]
    ),
  });

  //무한스크롤
  const hasMorePage = Boolean(data.length > page * OFFSET);
  const ElementRef = useInfiniteScroll(hasMorePage, setPage);

  // 검색바
  const [searchTerm, setSearchTerm] = useState("");
  const [displayState, setDisplayState] = useState("");
  const [scrollState, setScrollState] = useState(false);

  // const handleScroll = () => {
  //   const scrollY = window.scrollY;
  //   if (scrollY >= 80) {
  //     console.log("스크롤 50px 이상 내려갔습니다.");
  //     setScrollState(true);
  //   } else {
  //     setScrollState(false);
  //   }
  // };

  // useEffect(() => {
  //   // 스크롤 이벤트 리스너 등록
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const goDetail = (id) => {
    navigate("/detail/" + id);
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div
              onClick={() => {
                setSearchTerm(""); //검색 초기화
              }}
            >
              <Header
                changeLanguage={changeLanguage}
                setSelectPoketMon={setSelectPoketMon}
                setSearchTerm={setSearchTerm}
                generationArr={generationArr}
                setGeneration={setGeneration}
              />
              <NavBar
                generationArr={generationArr}
                generation={generation}
                setGeneration={setGeneration}
                state={state}
                updateState={updateState}
                getData={getData}
                setSelectPoketMon={setSelectPoketMon}
                setPage={setPage}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                displayState={displayState}
                setDisplayState={setDisplayState}
                scrollState={scrollState}
              />
              <Contents
                data={data}
                page={page}
                color={color}
                language={language}
                ElementRef={ElementRef}
                goDetail={goDetail}
              />
            </div>
          }
        />
        <Route
          path="/detail/:id"
          element={<Detail data={data} navigate={navigate} />}
        />
      </Routes>
    </>
  );
}
export default Client;
