import React, { useState, useCallback, useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import axios from "axios";

import { useQueries, useQuery, useQueryClient } from "react-query";

import { Header } from "./styleComponents/Header";
import { NavBar } from "./styleComponents/NavBar";
import { Contents } from "./styleComponents/Contents";
import useInfiniteScroll from "./hooks/useInfiniteScroll";

function Client() {
  const [color, setColor] = useState({
    color: "rgb(47 124 187)",
  });
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

  // 검색
  const [searchData, setSearchData] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [searchClear, setSearchClear] = useState(false);

  // 포켓몬 데이터
  const [language, setLanguage] = useState("ko");

  //언어변경
  const changeLanguage = useCallback(
    (type) => {
      setLanguage(type);
    },
    [language]
  );

  //검색창 이벤트
  const searchHandle = useCallback(
    (e) => {
      setSearchValue(e.target.value);
    },
    [searchValue]
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
          };
          return processData;
        })
      );

      return PromiseData;
    } catch (err) {
      console.log(err);
    }
  }, [generation]);

  //리액트쿼리
  const {
    data = [],
    isLoading,
    error,
  } = useQuery(["dataArr", generation], getData, {
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });

  const OFFSET = 10;
  const [page, setPage] = useState(1);
  const hasMorePage = Boolean(data.length > page * OFFSET);
  const ElementRef = useInfiniteScroll(hasMorePage, setPage);

  if (isLoading) return <p>로딩..</p>;
  return (
    <>
      <>
        <Header changeLanguage={changeLanguage} />

        <NavBar
          generationArr={generationArr}
          setSearchData={setSearchData}
          setGeneration={setGeneration}
          searchValue={searchValue}
          searchHandle={searchHandle}
          setSearchClear={setSearchClear}
        />

        {/* <div className="container">
          <Grid
            container
            spacing={{ xs: 5, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {data.slice(0, page * 10).map((_, index) => {
              return (
                <Grid item xs={4} sm={4} md={4} key={index}>
                  <div className="card_1 card_style" ref={ElementRef}>
                    <div className="title_box">
                      <p>{language === "en" ? _.name : _.name_KO}</p>
                      <img
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
                        alt="포켓볼"
                      />
                    </div>
                    <p>{"No." + _.id}</p>
                    <div className="img_box">
                      <img src={_.imgUrl} alt="포켓몬" />
                    </div>
                    <DotBox
                      language={language}
                      name={_.name}
                      name_KO={_.name_KO}
                    />
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </div> */}

        <Contents
          data={data}
          page={page}
          color={color}
          language={language}
          ElementRef={ElementRef}
        />
      </>
    </>
  );
}
export default Client;
