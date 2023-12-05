import React, { useState, useCallback, useEffect, useRef } from "react";
import { Container, Header, NavBar } from "./styleComponents/style";
import { Grid } from "@mui/material";

function Client() {
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
            {Array.from(Array(7)).map((_, index) => (
              <Grid item xs={4} sm={4} md={4} key={index}>
                <div className="card_1 card_style">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
                    alt="포켓볼"
                  />
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </>
  );
}
export default Client;
