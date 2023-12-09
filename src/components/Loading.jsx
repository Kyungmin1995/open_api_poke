import React, { useEffect, useState } from "react";
import styled from "styled-components";
import P_1 from "../../src/assets/images/1.png";
import P_2 from "../../src/assets/images/2.png";
import P_3 from "../../src/assets/images/3.png";
import P_4 from "../../src/assets/images/4.png";
import P_5 from "../../src/assets/images/5.png";
import P_6 from "../../src/assets/images/6.png";
import P_7 from "../../src/assets/images/7.png";
import P_8 from "../../src/assets/images/8.png";
import P_9 from "../../src/assets/images/9.png";

export const Loading = () => {
  const [random, setRandom] = useState(0);
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 3);
    setRandom(randomNumber);
    return () => setRandom(0);
  }, [random]);

  const Loading_P = [
    {
      img: (
        <>
          <img className="animation_1" src={P_1} />
          <img className="animation_2" src={P_2} />
          <img className="animation_3" src={P_3} />
        </>
      ),
    },
    {
      img: (
        <>
          <img className="animation_1" src={P_4} />
          <img className="animation_2" src={P_5} />
          <img className="animation_3" src={P_6} />
        </>
      ),
    },
    {
      img: (
        <>
          <img className="animation_1" src={P_7} />
          <img className="animation_2" src={P_8} />
          <img className="animation_3" src={P_9} />
        </>
      ),
    },
  ];
  return (
    <LoadingContainer>
      <div>{Loading_P[random].img}</div>
    </LoadingContainer>
  );
};

export const LoadingContainer = styled.div`
  background: #ddd;
  width: 100%;
  height: 100vh;
  & > div {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .animation_1 {
    animation: moveUpDown 0.5s infinite alternate;
  }

  .animation_2 {
    animation: moveUpDown 0.5s infinite alternate;
    animation-delay: 0.25s;
  }

  .animation_3 {
    animation: moveUpDown 0.5s infinite alternate;
    animation-delay: 0.5s;
  }

  @keyframes moveUpDown {
    to {
      transform: translateY(20px);
    }
  }
`;
