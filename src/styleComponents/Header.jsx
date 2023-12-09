import React from "react";
import styled from "styled-components";

export const Header = ({ changeLanguage }) => {
  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
};

export const HeaderContainer = styled.div`
  @media (min-width: 640px) {
    padding: 20px 40px;
  }

  @media (min-width: 1024px) {
  }
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #fff;
  color: #ddd;
  .button_box {
    background: red;
    display: flex;
  }
`;
