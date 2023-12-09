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

export const Contents = ({ data, page, color, language, ElementRef }) => {
  return (
    <>
      <ContentsContainer props={{ color: color.color[0] }}>
        <div className="container">
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
  padding-top: 140px;
  .card_1:hover {
    box-shadow: ${(props) =>
      `0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px ${props.props.color}`};
  }
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
    padding: 20px;
  }

  .type_box {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    padding: 0 10px;
  }
  .type_box > div {
    width: 100%;
  }
  .type_box > div button {
    width: 100%;
  }
  @media (min-width: 640px) {
    .container {
      padding: 25px;
    }
    .img_box {
      display: flex;
      justify-content: center;
      padding: 50px;
    }
    .card_style {
      border-radius: 20px;
      padding: 20px;
      min-height: 450px;
    }
  }
  @media (min-width: 1024px) {
    .container {
      padding: 45px;
    }
  }
`;
