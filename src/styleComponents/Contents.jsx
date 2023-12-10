import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import bug from "../../src/assets/images/bug.svg";
import dark from "../../src/assets/images/dark.svg";
import dragon from "../../src/assets/images/dragon.svg";
import electric from "../../src/assets/images/electric.svg";
import fairy from "../../src/assets/images/fairy.svg";
import fighting from "../../src/assets/images/fighting.svg";
import fire from "../../src/assets/images/fire.svg";
import flying from "../../src/assets/images/flying.svg";
import ghost from "../../src/assets/images/ghost.svg";
import grass from "../../src/assets/images/grass.svg";
import ground from "../../src/assets/images/ground.svg";
import ice from "../../src/assets/images/ice.svg";
import normal from "../../src/assets/images/normal.svg";
import poison from "../../src/assets/images/poison.svg";
import psychic from "../../src/assets/images/psychic.svg";
import rock from "../../src/assets/images/rock.svg";
import steel from "../../src/assets/images/steel.svg";
import water from "../../src/assets/images/water.svg";

export const Contents = ({
  data,
  page,
  color,
  language,
  ElementRef,
  goDetail,
}) => {
  return (
    <>
      <ContentsContainer>
        <div>
          <div className="container">
            <Grid
              container
              spacing={{ xs: 5, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {data.slice(0, page * 10).map((_, index) => {
                return (
                  <Grid item xs={4} sm={4} md={4} key={index}>
                    <div
                      onClick={() => {
                        // goDetail(_.id);
                        goDetail(index);
                      }}
                      className="card_1 card_style"
                      ref={ElementRef}
                      style={{
                        background:
                          _.types[0].type.name === "normal"
                            ? "rgb(148, 148, 149,0.5)"
                            : _.types[0].type.name === "fire"
                            ? "rgb(229, 108, 62,0.5)"
                            : _.types[0].type.name === "water"
                            ? "rgb(81, 133, 197,0.5)"
                            : _.types[0].type.name === "electric"
                            ? "rgb(246, 216, 81,0.5)"
                            : _.types[0].type.name === "poison"
                            ? "rgb(115, 81, 152,0.5)"
                            : _.types[0].type.name === "grass"
                            ? "rgb(103, 169, 69,0.5)"
                            : _.types[0].type.name === "ice"
                            ? "rgb(108, 200, 235,0.5)"
                            : _.types[0].type.name === "fighting"
                            ? "rgb(224, 156, 65,0.5)"
                            : _.types[0].type.name === "ground"
                            ? "rgb(156, 119, 67,0.5)"
                            : _.types[0].type.name === "flying"
                            ? "rgb(163, 195, 231,0.5)"
                            : _.types[0].type.name === "psychic"
                            ? "rgb(222, 107, 122,0.5)"
                            : _.types[0].type.name === "bug"
                            ? "rgb(160, 162, 68,0.5)"
                            : _.types[0].type.name === "rock"
                            ? "rgb(191, 184, 137,0.5)"
                            : _.types[0].type.name === "ghost"
                            ? "rgb(104, 72, 112,0.5)"
                            : _.types[0].type.name === "dragon"
                            ? "rgb(83, 92, 168,0.5)"
                            : _.types[0].type.name === "dark"
                            ? "rgb(75, 73, 72,0.5)"
                            : _.types[0].type.name === "steel"
                            ? "rgb(106, 169, 199,0.5)"
                            : _.types[0].type.name === "fairy"
                            ? "rgb(222, 107, 122,0.5)"
                            : null,
                      }}
                    >
                      <div>
                        <div className="title_box">
                          <h3>{language === "en" ? _.name : _.name_KO}</h3>
                          <img
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
                            alt="포켓볼"
                          />
                        </div>
                        <h4>{"No." + _.id}</h4>
                        <div className="img_box">
                          <img
                            src={_.officialArtwork}
                            alt="포켓몬"
                            width={"100%"}
                          />
                        </div>
                      </div>
                      <div>
                        {" "}
                        <div className="type_box">
                          {_.types.map((_, i) => (
                            <div
                              key={i}
                              className="type_style"
                              style={{
                                background:
                                  _.type.name === "normal"
                                    ? "#949495"
                                    : _.type.name === "fire"
                                    ? "#E56C3E"
                                    : _.type.name === "water"
                                    ? "#5185C5"
                                    : _.type.name === "electric"
                                    ? "#F6D851"
                                    : _.type.name === "poison"
                                    ? "#735198"
                                    : _.type.name === "grass"
                                    ? "#67A945"
                                    : _.type.name === "ice"
                                    ? "#6CC8EB"
                                    : _.type.name === "fighting"
                                    ? "#E09C41"
                                    : _.type.name === "ground"
                                    ? "#9C7743"
                                    : _.type.name === "flying"
                                    ? "#A3C3E7"
                                    : _.type.name === "psychic"
                                    ? "#DE6B7A"
                                    : _.type.name === "bug"
                                    ? "#A0A244"
                                    : _.type.name === "rock"
                                    ? "#BFB889"
                                    : _.type.name === "ghost"
                                    ? "#684870"
                                    : _.type.name === "dragon"
                                    ? "#535CA8"
                                    : _.type.name === "dark"
                                    ? "#4B4948"
                                    : _.type.name === "steel"
                                    ? "#6AA9C7"
                                    : _.type.name === "fairy"
                                    ? "DE6B7A"
                                    : null,
                              }}
                            >
                              <img
                                width={"20px"}
                                src={
                                  _.type.name === "normal"
                                    ? normal
                                    : _.type.name === "fire"
                                    ? fire
                                    : _.type.name === "water"
                                    ? water
                                    : _.type.name === "electric"
                                    ? electric
                                    : _.type.name === "poison"
                                    ? poison
                                    : _.type.name === "grass"
                                    ? grass
                                    : _.type.name === "ice"
                                    ? ice
                                    : _.type.name === "fighting"
                                    ? fighting
                                    : _.type.name === "ground"
                                    ? ground
                                    : _.type.name === "flying"
                                    ? flying
                                    : _.type.name === "psychic"
                                    ? psychic
                                    : _.type.name === "bug"
                                    ? bug
                                    : _.type.name === "rock"
                                    ? rock
                                    : _.type.name === "ghost"
                                    ? ghost
                                    : _.type.name === "dragon"
                                    ? dragon
                                    : _.type.name === "dark"
                                    ? dark
                                    : _.type.name === "steel"
                                    ? steel
                                    : _.type.name === "fairy"
                                    ? fairy
                                    : null
                                }
                                alt=""
                              />
                              <h4>
                                {_.type.name === "normal"
                                  ? "노말"
                                  : _.type.name === "fire"
                                  ? "불꽃"
                                  : _.type.name === "water"
                                  ? "물"
                                  : _.type.name === "electric"
                                  ? "전기"
                                  : _.type.name === "poison"
                                  ? "독"
                                  : _.type.name === "grass"
                                  ? "풀"
                                  : _.type.name === "ice"
                                  ? "얼음"
                                  : _.type.name === "fighting"
                                  ? "격투"
                                  : _.type.name === "ground"
                                  ? "땅"
                                  : _.type.name === "flying"
                                  ? "비행"
                                  : _.type.name === "psychic"
                                  ? "에스퍼"
                                  : _.type.name === "bug"
                                  ? "벌레"
                                  : _.type.name === "rock"
                                  ? "바위"
                                  : _.type.name === "ghost"
                                  ? "고스트"
                                  : _.type.name === "dragon"
                                  ? "드래곤"
                                  : _.type.name === "dark"
                                  ? "악"
                                  : _.type.name === "steel"
                                  ? "강철"
                                  : _.type.name === "fairy"
                                  ? "페어리"
                                  : null}
                              </h4>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* <DotBox
                      language={language}
                      name={_.name}
                      name_KO={_.name_KO}
                    /> */}
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </div>
      </ContentsContainer>
    </>
  );
};

//게임 텍스트 컴포넌트
const DotBox = ({ language, name, name_KO }) => {
  return (
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
          {/* 출현대사 */}
          <p>
            {language === "ko"
              ? "앗! 야생의 \u00A0" + name_KO + "(이)가 나타났다!"
              : "Oh! A wild \u00A0" + name + "appeared!"}
          </p>

          <div
            style={{
              textAlign: "right",
            }}
          >
            <button className="btn"></button>
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
    </div>
  );
};

export const ContentsContainer = styled.div`
  .container {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    gap: 16px;
    max-width: 1280px;
    margin: 0 auto;
  }
  & > .container > div {
    min-height: 400px;
  }
  .card_style {
    border-radius: 20px;
    padding: 20px;
    min-height: 320px;
  }
  .title_box {
    display: flex;
    align-items: center;
  }
  .title_box h3 {
    color: #fff;
  }
  h4 {
    color: #fff;
  }
  .title_box > p {
    font-family: "pokemon";
  }
  .txtBox > p {
    font-family: "pokemon";
    word-break: break-word;
  }
  .img_box {
    display: flex;
    justify-content: center;
    /* padding: 20px; */
    border-radius: 10px;
    /* border: 1px solid #ddd; */
  }

  .type_box {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    padding: 0 10px;
    margin-bottom: 10px;
  }
  .type_box > div {
    width: 100%;
    text-align: center;
    background: #ddd;
    border-radius: 20px;
    justify-content: center;
    padding: 5px;
  }
  .type_box > div button {
    width: 100%;
  }
  .type_style {
    display: flex;
    align-items: center;
  }
  .type_style img {
    margin-right: 4px;
  }
  .type_style h4 {
    margin-right: 20px;
    color: #fff;
  }
  @media (min-width: 640px) {
    .container {
      padding: 25px;
    }
    .img_box {
      display: flex;
      justify-content: center;
      /* padding: 50px; */
    }
    .card_style {
      border-radius: 20px;
      padding: 20px;
      min-height: 400px;
    }
  }
  @media (min-width: 1024px) {
    .container {
      padding: 45px;
    }
  }
`;
