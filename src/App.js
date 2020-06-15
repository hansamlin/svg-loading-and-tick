import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setIsLoading(prev => !prev);
  };
  return (
    <ThemeProvider theme={{ isLoading }}>
      <Container
        version="1.1"
        id="tick"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 37 37"
        xmlSpace="preserve"
      >
        <Path
          className="circ path"
          d="M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
        />
        <Polyline className="tick path" points="10.6,19 15.9,24.2 26.4,13.8" />
      </Container>
      <Button onClick={handleClick}>按我</Button>
    </ThemeProvider>
  );
};

export default Loading;

const Container = styled.svg`
  width: 150px;
  height: 150px;
`;

const Path = styled.path`
  fill: none;
  stroke: #000;
  stroke-width: 3;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  opacity: ${(props) => (props.theme.isLoading ? 0 : 1)};
  stroke-dasharray: 130;
  stroke-dashoffset: ${(props) => (props.theme.isLoading ? 130 : 0)};
  transition: all 1s;
`;

const Polyline = styled.polyline`
  fill: none;
  stroke: #000;
  stroke-width: 3;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  stroke-dasharray: 50;
  stroke-dashoffset: ${(props) => (props.theme.isLoading ? 50 : 0)};
  transition: stroke-dashoffset 1s ease-out 0.5s;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  margin: auto;
  font-size: 2rem;
`;
