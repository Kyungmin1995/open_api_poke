import React, { useState, useCallback, useEffect, useRef } from "react";
import { Container, Header, NavBar } from "./styleComponents/style";
import { Grid } from "@mui/material";
import axios from "axios";

function Client() {
  const [data, setData] = useState([]);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    getData();
  }, []);

  const getData = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`
        // `https://pokeapi.co/api/v2/pokemon-species/1/`
      );
      const dataWithImages = await Promise.all(
        res.data.results.map(async (a, i) => {
          const imgUrl = await getPoketmon(a.url);
          const speciesUrl = await getPoketmonName(i);
          return {
            name: a.name,
            url: a.url,
            imgUrl,
            id: speciesUrl,
          };
        })
      );

      setData(dataWithImages);
    } catch (err) {
      console.log(err);
    }
  }, [data]);

  const getPoketmon = useCallback(
    async (url) => {
      try {
        const res = await axios.get(url);

        return res.data.sprites.versions["generation-v"]["black-white"].animated
          .front_default;
      } catch (err) {
        console.log(err);
      }
    },
    [data]
  );
  const getPoketmonName = useCallback(
    async (id) => {
      try {
        const res = await axios.get(
          "https://pokeapi.co/api/v2/pokemon-species/" + parseInt(id + 1) + "/"
        );
        return res.data.names[2].name;
      } catch (err) {
        console.log(err);
      }
    },
    [data]
  );

  useEffect(() => {
    console.log(data, "data");
  }, [data]);

  return (
    <>
      <Header>
        <div className="title">
          <p>포켓몬 도감</p>
        </div>
        <div className="button_box">
          <button>English</button>
          <button>한국어</button>
        </div>
      </Header>
      <NavBar>
        <div className="search_box card">
          <input type="text" />
        </div>
        {/* <div>타입</div> */}
      </NavBar>

      <Container>
        <div className="container">
          <Grid
            container
            spacing={{ xs: 5, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {data.map((_, index) => {
              return (
                <Grid item xs={4} sm={4} md={4} key={index}>
                  <div className="card_1 card_style">
                    <div className="title_box">
                      <p>{_.name}</p>
                      <img
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
                        alt="포켓볼"
                      />
                    </div>
                    <div className="img_box">
                      <img src={_.imgUrl} alt="포켓몬" />
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Container>
    </>
  );
}
export default Client;
