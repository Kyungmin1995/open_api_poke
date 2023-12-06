import React, { useState, useCallback, useEffect, useRef } from "react";
import { Container, Header, NavBar } from "./styleComponents/style";
import { Grid } from "@mui/material";
import axios from "axios";
import bug from "../src/assets/images/bug.svg";
import dark from "../src/assets/images/dark.svg";
import dragon from "../src/assets/images/dragon.svg";
import electric from "../src/assets/images/electric.svg";
import fairy from "../src/assets/images/fairy.svg";
import fighting from "../src/assets/images/fighting.svg";
import fire from "../src/assets/images/fire.svg";
import flying from "../src/assets/images/flying.svg";
import ghost from "../src/assets/images/ghost.svg";
import grass from "../src/assets/images/grass.svg";
import ground from "../src/assets/images/ground.svg";
import ice from "../src/assets/images/ice.svg";
import normal from "../src/assets/images/normal.svg";
import poison from "../src/assets/images/poison.svg";
import psychic from "../src/assets/images/psychic.svg";
import rock from "../src/assets/images/rock.svg";
import steel from "../src/assets/images/steel.svg";
import water from "../src/assets/images/water.svg";
import { useQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";

function Client() {
  const [pokeData, setpokeData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(20);
  const [language, setLanguage] = useState("ko");
  const [color, setColor] = useState({
    color: "rgb(47 124 187)",
  });

  const getData = useCallback(async () => {
    try {
      // setIsLoading(false); // 데이터 로딩 시작
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`
      );
      const dataWithImages = await Promise.all(
        res.data.results.map(async (a, i) => {
          const imgUrl = await getPoketmon(a.url);
          const speciesUrl = await getPoketmonName(i);
          return {
            name: a.name,
            url: a.url,
            imgUrl: imgUrl.imgUrl,
            property: imgUrl.property,
            nameKo: speciesUrl.name,
            script:
              language === "ko"
                ? "앗! 야생의 \u00A0" + speciesUrl.name + "(이)가 나타났다!"
                : "Oh! A wild \u00A0" + a.name + "appeared!",
            description: speciesUrl.flavor_text,
            type: speciesUrl.type,
          };
        })
      );

      if (res.data.results.length === 0) {
        setHasMore(false); // 더 이상 가져올 데이터가 없음
        console.log("getData function called"); // 확인을 위한 로그
      }

      setpokeData(dataWithImages);
    } catch (err) {
      console.log(err);
    } finally {
      // setIsLoading(true); // 데이터 로딩 완료
    }
  }, [pokeData, language, limit]);

  const getPoketmon = useCallback(
    async (url) => {
      try {
        const res = await axios.get(url);
        const data = {
          imgUrl:
            res.data.sprites.versions["generation-v"]["black-white"].animated
              .front_default,
          property: res.data.types,
        };

        return data;
      } catch (err) {
        console.log(err);
      }
    },
    [pokeData]
  );

  const getPoketmonName = useCallback(
    async (id) => {
      try {
        const res = await axios.get(
          "https://pokeapi.co/api/v2/pokemon-species/" + parseInt(id + 1) + "/"
        );

        const data = {
          name: res.data.names[2].name,
          type:
            language === "ko"
              ? res.data.genera[1].genus
              : res.data.genera[7].genus,
          flavor_text:
            res.data.flavor_text_entries[
              (language === "ko" && parseInt(id + 1) === 10) ||
              (language === "ko" && parseInt(id + 1) === 15) ||
              (language === "ko" && parseInt(id + 1) === 19) ||
              (language === "ko" && parseInt(id + 1) === 20)
                ? 24
                : language === "ko"
                ? 23
                : (language === "en" && parseInt(id + 1) === 10) ||
                  (language === "en" && parseInt(id + 1) === 15) ||
                  (language === "en" && parseInt(id + 1) === 19) ||
                  (language === "en" && parseInt(id + 1) === 20)
                ? 1
                : language === "en"
                ? 0
                : null
            ].flavor_text,
        };
        return data;
      } catch (err) {
        console.log(err);
      }
    },
    [pokeData, language]
  );

  const changeLanguage = useCallback(
    (type) => {
      setLanguage(type);
    },
    [language]
  );

  useEffect(() => {
    getData();
  }, [limit]);

  const handleInfiniteScroll = () => {
    setLimit((prevLimit) => prevLimit + 10);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={pokeData.length}
        next={handleInfiniteScroll}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        scrollToTop={false}
      >
        <>
          <Header>
            <div className="title">
              <p>포켓몬 도감</p>
            </div>
            <div className="button_box">
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
            </div>
          </Header>
          <NavBar>
            <div className="search_box card">
              <input type="text" />
            </div>
            {/* <div>타입</div> */}
          </NavBar>
          <Container props={{ color: color.color[0] }}>
            <div className="container">
              <Grid
                container
                spacing={{ xs: 5, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {pokeData.map((_, index) => {
                  return (
                    <Grid item xs={4} sm={4} md={4} key={index}>
                      <div
                        className="card_1 card_style"
                        onMouseOver={() => {
                          setColor({
                            color: _.property.map((a) =>
                              a.type.name === "fire"
                                ? "rgb(229, 108, 62)"
                                : a.type.name === "water"
                                ? "rgb(81, 133, 197)"
                                : a.type.name === "electric"
                                ? "#F6D851"
                                : a.type.name === "poison"
                                ? "#735198"
                                : a.type.name === "grass"
                                ? "#67A945"
                                : a.type.name === "ice"
                                ? "#6CC8EB"
                                : a.type.name === "fighting"
                                ? "#E09C41"
                                : a.type.name === "ground"
                                ? "#9C7743"
                                : a.type.name === "flying"
                                ? "#A3C3E7"
                                : a.type.name === "psychic"
                                ? "#DE6B7A"
                                : a.type.name === "bug"
                                ? "#A0A244"
                                : a.type.name === "rock"
                                ? "#BFB889"
                                : a.type.name === "ghost"
                                ? "#684870"
                                : a.type.name === "dragon"
                                ? "#535CA8"
                                : a.type.name === "dark"
                                ? "#4B4948"
                                : a.type.name === "steel"
                                ? "#6AA9C7"
                                : a.type.name === "fairy"
                                ? "#949495"
                                : null
                            ),
                          });
                        }}
                      >
                        <div className="title_box">
                          <p>{language === "en" ? _.name : _.nameKo}</p>
                          <img
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
                            alt="포켓볼"
                          />
                        </div>
                        <p>{"No." + parseInt(index + 1)}</p>
                        <div className="img_box">
                          <img src={_.imgUrl} alt="포켓몬" />
                        </div>
                        <div className="type_box">
                          {_.property.map((a) => (
                            <div key={a.type.name}>
                              <button
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  color: "#fff",
                                  borderRadius: "20px",
                                  padding: "5px 10px",
                                  background:
                                    a.type.name === "fire"
                                      ? "#E56C3E"
                                      : a.type.name === "water"
                                      ? "#5185C5"
                                      : a.type.name === "normal"
                                      ? "#949495"
                                      : a.type.name === "electric"
                                      ? "#F6D851"
                                      : a.type.name === "poison"
                                      ? "#735198"
                                      : a.type.name === "grass"
                                      ? "#67A945"
                                      : a.type.name === "ice"
                                      ? "#6CC8EB"
                                      : a.type.name === "fighting"
                                      ? "#E09C41"
                                      : a.type.name === "ground"
                                      ? "#9C7743"
                                      : a.type.name === "flying"
                                      ? "#A3C3E7"
                                      : a.type.name === "psychic"
                                      ? "#DE6B7A"
                                      : a.type.name === "bug"
                                      ? "#A0A244"
                                      : a.type.name === "rock"
                                      ? "#BFB889"
                                      : a.type.name === "ghost"
                                      ? "#684870"
                                      : a.type.name === "dragon"
                                      ? "#535CA8"
                                      : a.type.name === "dark"
                                      ? "#4B4948"
                                      : a.type.name === "steel"
                                      ? "#6AA9C7"
                                      : a.type.name === "fairy"
                                      ? "#DAB4D4"
                                      : null,
                                }}
                              >
                                <img
                                  width={20}
                                  src={
                                    a.type.name === "normal"
                                      ? normal
                                      : a.type.name === "fire"
                                      ? fire
                                      : a.type.name === "water"
                                      ? water
                                      : a.type.name === "electric"
                                      ? electric
                                      : a.type.name === "poison"
                                      ? poison
                                      : a.type.name === "grass"
                                      ? grass
                                      : a.type.name === "ice"
                                      ? ice
                                      : a.type.name === "fighting"
                                      ? fighting
                                      : a.type.name === "ground"
                                      ? ground
                                      : a.type.name === "flying"
                                      ? flying
                                      : a.type.name === "psychic"
                                      ? psychic
                                      : a.type.name === "bug"
                                      ? bug
                                      : a.type.name === "rock"
                                      ? rock
                                      : a.type.name === "ghost"
                                      ? ghost
                                      : a.type.name === "dragon"
                                      ? dragon
                                      : a.type.name === "dark"
                                      ? dark
                                      : a.type.name === "steel"
                                      ? steel
                                      : a.type.name === "fairy"
                                      ? fairy
                                      : null
                                  }
                                  alt=""
                                />
                                <p>
                                  {language === "en" && a.type.name === "normal"
                                    ? "Normal"
                                    : language === "en" &&
                                      a.type.name === "fire"
                                    ? "Fire"
                                    : language === "en" &&
                                      a.type.name === "water"
                                    ? "Water"
                                    : language === "en" &&
                                      a.type.name === "electric"
                                    ? "Electric"
                                    : language === "en" &&
                                      a.type.name === "poison"
                                    ? "Poison"
                                    : language === "en" &&
                                      a.type.name === "grass"
                                    ? "Grass"
                                    : language === "en" && a.type.name === "ice"
                                    ? "Ice"
                                    : language === "en" &&
                                      a.type.name === "fighting"
                                    ? "Fighting"
                                    : language === "en" &&
                                      a.type.name === "ground"
                                    ? "Ground"
                                    : language === "en" &&
                                      a.type.name === "flying"
                                    ? "Flying"
                                    : language === "en" &&
                                      a.type.name === "psychic"
                                    ? "Psychic"
                                    : language === "en" && a.type.name === "bug"
                                    ? "Bug"
                                    : language === "en" &&
                                      a.type.name === "rock"
                                    ? "Rock"
                                    : language === "en" &&
                                      a.type.name === "ghost"
                                    ? "Ghost"
                                    : language === "en" &&
                                      a.type.name === "dragon"
                                    ? "Dragon"
                                    : language === "en" &&
                                      a.type.name === "dark"
                                    ? "Dark"
                                    : language === "en" &&
                                      a.type.name === "steel"
                                    ? "Steel"
                                    : language === "en" &&
                                      a.type.name === "fairy"
                                    ? "Fairy"
                                    : a.type.name === "normal"
                                    ? "노말"
                                    : a.type.name === "fire"
                                    ? "불꽃"
                                    : a.type.name === "water"
                                    ? "물"
                                    : a.type.name === "electric"
                                    ? "전기"
                                    : a.type.name === "poison"
                                    ? "독"
                                    : a.type.name === "grass"
                                    ? "풀"
                                    : a.type.name === "ice"
                                    ? "얼음"
                                    : a.type.name === "fighting"
                                    ? "격투"
                                    : a.type.name === "ground"
                                    ? "땅"
                                    : a.type.name === "flying"
                                    ? "비행"
                                    : a.type.name === "psychic"
                                    ? "에스퍼"
                                    : a.type.name === "bug"
                                    ? "벌레"
                                    : a.type.name === "rock"
                                    ? "바위"
                                    : a.type.name === "ghost"
                                    ? "고스트"
                                    : a.type.name === "dragon"
                                    ? "드래곤"
                                    : a.type.name === "dark"
                                    ? "악"
                                    : a.type.name === "steel"
                                    ? "강철"
                                    : a.type.name === "fairy"
                                    ? "페어리"
                                    : null}
                                </p>
                              </button>
                            </div>
                          ))}
                        </div>
                        {/* <p>{_.type}</p> */}
                        <div className="text_bpx statusbar">
                          <div>
                            <div className="dot-top">
                              <span>도트1</span>
                              <span>도트2</span>
                            </div>
                            <div className="dot-top-bottom">
                              <span>도트3</span>
                              <span>도트4</span>
                            </div>
                            <div
                              className="txtBox"
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "end",
                              }}
                            >
                              <p>{_.script}</p>

                              <div
                                style={{
                                  textAlign: "right",
                                }}
                              >
                                <button className="btn">
                                  {/* {btnState ? " ⏎ " : ""} */}_
                                </button>
                              </div>
                            </div>
                            <div className="dot-bottom">
                              <span>도트1</span>
                              <span>도트2</span>
                            </div>
                            <div className="dot-bottom-top">
                              <span>도트3</span>
                              <span>도트4</span>
                            </div>
                          </div>
                          {/* <p>{_.description}</p> */}
                        </div>
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          </Container>
        </>
      </InfiniteScroll>
    </>
  );
}
export default Client;
