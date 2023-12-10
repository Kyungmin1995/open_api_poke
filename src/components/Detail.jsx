import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
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
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Loading } from "./Loading";

export const Detail = ({ data, navigate }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const load = setTimeout(() => {
      setLoading(true);
    }, 300);
    console.log(loading, "loading");
    return () => clearTimeout(load);
  }, [loading]);
  return (
    <>
      <DetailCotainer>
        <div
          className="container"
          style={{
            background:
              data[id].types[0].type.name === "normal"
                ? "rgb(148, 148, 149,0.5)"
                : data[id].types[0].type.name === "fire"
                ? "rgb(229, 108, 62,0.5)"
                : data[id].types[0].type.name === "water"
                ? "rgb(81, 133, 197,0.5)"
                : data[id].types[0].type.name === "electric"
                ? "rgb(246, 216, 81,0.5)"
                : data[id].types[0].type.name === "poison"
                ? "rgb(115, 81, 152,0.5)"
                : data[id].types[0].type.name === "grass"
                ? "rgb(103, 169, 69,0.5)"
                : data[id].types[0].type.name === "ice"
                ? "rgb(108, 200, 235,0.5)"
                : data[id].types[0].type.name === "fighting"
                ? "rgb(224, 156, 65,0.5)"
                : data[id].types[0].type.name === "ground"
                ? "rgb(156, 119, 67,0.5)"
                : data[id].types[0].type.name === "flying"
                ? "rgb(163, 195, 231,0.5)"
                : data[id].types[0].type.name === "psychic"
                ? "rgb(222, 107, 122,0.5)"
                : data[id].types[0].type.name === "bug"
                ? "rgb(160, 162, 68,0.5)"
                : data[id].types[0].type.name === "rock"
                ? "rgb(191, 184, 137,0.5)"
                : data[id].types[0].type.name === "ghost"
                ? "rgb(104, 72, 112,0.5)"
                : data[id].types[0].type.name === "dragon"
                ? "rgb(83, 92, 168,0.5)"
                : data[id].types[0].type.name === "dark"
                ? "rgb(75, 73, 72,0.5)"
                : data[id].types[0].type.name === "steel"
                ? "rgb(106, 169, 199,0.5)"
                : data[id].types[0].type.name === "fairy"
                ? "rgb(222, 107, 122,0.5)"
                : null,
          }}
        >
          <div style={{ padding: "20px" }}>
            <ArrowBackIosIcon
              style={{ cursor: "pointer", color: "#FfF", fontSize: "30px" }}
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <div className="flex">
            <div className="padding_img">
              <div className="img_con">
                <img src={data[id].imgUrl} alt="" width={"100%"} />
              </div>
              <div className="mb20" />
              <DotBox name_KO={data[id].name_KO} />
            </div>
            <div className="padding_title mx500 ">
              <div
                className="description"
                style={{
                  color:
                    data[id].types[0].type.name === "normal"
                      ? "rgb(148, 148, 149,0.5)"
                      : data[id].types[0].type.name === "fire"
                      ? "rgb(229, 108, 62,0.5)"
                      : data[id].types[0].type.name === "water"
                      ? "rgb(81, 133, 197,0.5)"
                      : data[id].types[0].type.name === "electric"
                      ? "rgb(246, 216, 81,0.5)"
                      : data[id].types[0].type.name === "poison"
                      ? "rgb(115, 81, 152,0.5)"
                      : data[id].types[0].type.name === "grass"
                      ? "rgb(103, 169, 69,0.5)"
                      : data[id].types[0].type.name === "ice"
                      ? "rgb(108, 200, 235,0.5)"
                      : data[id].types[0].type.name === "fighting"
                      ? "rgb(224, 156, 65,0.5)"
                      : data[id].types[0].type.name === "ground"
                      ? "rgb(156, 119, 67,0.5)"
                      : data[id].types[0].type.name === "flying"
                      ? "rgb(163, 195, 231,0.5)"
                      : data[id].types[0].type.name === "psychic"
                      ? "rgb(222, 107, 122,0.5)"
                      : data[id].types[0].type.name === "bug"
                      ? "rgb(160, 162, 68,0.5)"
                      : data[id].types[0].type.name === "rock"
                      ? "rgb(191, 184, 137,0.5)"
                      : data[id].types[0].type.name === "ghost"
                      ? "rgb(104, 72, 112,0.5)"
                      : data[id].types[0].type.name === "dragon"
                      ? "rgb(83, 92, 168,0.5)"
                      : data[id].types[0].type.name === "dark"
                      ? "rgb(75, 73, 72,0.5)"
                      : data[id].types[0].type.name === "steel"
                      ? "rgb(106, 169, 199,0.5)"
                      : data[id].types[0].type.name === "fairy"
                      ? "rgb(222, 107, 122,0.5)"
                      : null,
                }}
              >
                <div>
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
                    alt="포켓볼"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h2>기본정보</h2>
                  <div className="type_box">
                    {data[id].types.map((_, i) => (
                      <div
                        key={i}
                        className="type_style"
                        style={{
                          width: "100px",
                          borderRadius: "30px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
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

                <div className="mb10" />
                <table width={"100%"} style={{ textAlign: "left" }}>
                  <thead>
                    <tr>
                      <th width={"20%"}>신장</th>
                      <td>{data[id].height / 10 + "m"}</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>몸무게</th>
                      <td>{data[id].weight / 10 + "kg"}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="mb20"></div>
                <div className="mb20"></div>
                <div className="mb20"></div>
                <div className="mb10" />
                <h3
                  style={{
                    color:
                      data[id].types[0].type.name === "normal"
                        ? "rgb(148, 148, 149,0.5)"
                        : data[id].types[0].type.name === "fire"
                        ? "rgb(229, 108, 62,0.5)"
                        : data[id].types[0].type.name === "water"
                        ? "rgb(81, 133, 197,0.5)"
                        : data[id].types[0].type.name === "electric"
                        ? "rgb(246, 216, 81,0.5)"
                        : data[id].types[0].type.name === "poison"
                        ? "rgb(115, 81, 152,0.5)"
                        : data[id].types[0].type.name === "grass"
                        ? "rgb(103, 169, 69,0.5)"
                        : data[id].types[0].type.name === "ice"
                        ? "rgb(108, 200, 235,0.5)"
                        : data[id].types[0].type.name === "fighting"
                        ? "rgb(224, 156, 65,0.5)"
                        : data[id].types[0].type.name === "ground"
                        ? "rgb(156, 119, 67,0.5)"
                        : data[id].types[0].type.name === "flying"
                        ? "rgb(163, 195, 231,0.5)"
                        : data[id].types[0].type.name === "psychic"
                        ? "rgb(222, 107, 122,0.5)"
                        : data[id].types[0].type.name === "bug"
                        ? "rgb(160, 162, 68,0.5)"
                        : data[id].types[0].type.name === "rock"
                        ? "rgb(191, 184, 137,0.5)"
                        : data[id].types[0].type.name === "ghost"
                        ? "rgb(104, 72, 112,0.5)"
                        : data[id].types[0].type.name === "dragon"
                        ? "rgb(83, 92, 168,0.5)"
                        : data[id].types[0].type.name === "dark"
                        ? "rgb(75, 73, 72,0.5)"
                        : data[id].types[0].type.name === "steel"
                        ? "rgb(106, 169, 199,0.5)"
                        : data[id].types[0].type.name === "fairy"
                        ? "rgb(222, 107, 122,0.5)"
                        : null,
                  }}
                >
                  능력치
                </h3>
                <table width={"100%"} style={{ textAlign: "left" }}>
                  <thead>
                    <tr>
                      <th width={"20%"}>체력</th>
                      <td>{data[id].stats[0].base_stat}</td>
                    </tr>
                    <tr>
                      <th width={"20%"}>공격</th>
                      <td>{data[id].stats[1].base_stat}</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>방어</th>
                      <td>{data[id].stats[2].base_stat}</td>
                    </tr>
                    <tr>
                      <th>특수공격</th>
                      <td>{data[id].stats[3].base_stat}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>특수방어</th>
                      <td>{data[id].stats[4].base_stat}</td>
                    </tr>
                    <tr>
                      <th>스피드</th>
                      <td>{data[id].stats[5].base_stat}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </DetailCotainer>
    </>
  );
};
//게임 텍스트 컴포넌트
const DotBox = ({ name_KO }) => {
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
          <p>{`앗! 야생의 \u00A0 ${name_KO} (이)가 나타났다!`}</p>

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

export const DetailCotainer = styled.div`
  .txtBox p {
    font-family: "pokemon";
  }
  table {
    color: #000;
  }
  table th {
    margin: 10px;
    padding: 5px 0px;
  }
  .description {
    background: #fff;
    padding: 20px;
    border-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .mx500 {
    max-width: 100%;
  }
  .type_box {
    display: flex;
    gap: 10px;
  }
  .flex {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .flex > div {
    width: 100%;
  }
  .mb5 {
    margin-bottom: 5px;
  }
  .mb10 {
    margin-bottom: 10px;
  }
  .mb20 {
    margin-bottom: 20px;
  }
  /* .container {
    height: 100vh;
  } */
  .padding_title {
    padding: 0px;
  }
  .padding_img {
    padding: 20px;
    max-width: 350px;
    /* margin: 0 auto; */
  }
  .img_con {
    background: #fff;
    padding: 45px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 840px) {
    .flex {
      flex-direction: row;

      align-items: "center";
    }
    .flex > div {
      width: 50%;
    }
    .padding_title {
      padding: 20px;
    }
    .mx500 {
      max-width: 500px;
    }
    .description {
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
`;
