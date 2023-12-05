import styled from "styled-components";

// width: ${(props) => `calc(${props.props.width} + 42px)`};

export const Header = styled.div`
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

export const NavBar = styled.div`
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
  & > div.search_box {
    padding: 10px 20px;
    border-radius: 15px;
    margin: 30px auto;
    width: 80%;
  }
  & > div input {
    border: none;
    width: 100%;
    padding: 10px;
  }
  & > div input:focus-visible {
    outline: none;
  }
`;

export const Container = styled.div`
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
    height: 250px;
    border-radius: 20px;
    padding: 20px;
  }
  .title_box {
    display: flex;
    align-items: center;
  }
  .img_box {
    display: flex;
    justify-content: center;
    padding: 50px;
  }
  @media (min-width: 640px) {
    .container {
      padding: 25px;
    }
  }
  @media (min-width: 1024px) {
    .container {
      padding: 45px;
    }
  }
`;
