import styled from "styled-components";

export const Carousel = styled.div<{ height: number }>`
  width: 100vw;
  height: ${(props) => props.height}vh;
  text-align: center;
  display: flex;
  background-color: rgb(250, 180, 0);
`;

export const Image = styled.div<{ url?: string }>`
  background-image: url(${(props) => JSON.stringify(props.url)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 80%;
  width: 95%;
  border: 5px solid black;
  border-radius: 2px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;

  &:hover {
    box-shadow: 0px 0px 15px black;
    border: 5px solid rgb(0, 50, 150);
  }
`;

export const ComingSoon = styled.div`
  background-color: brown;
  width: 100%;
  height: 15%;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div<{ margintop: number }>`
  background-color: rgb(15, 15, 15);
  width: 100%;
  height: 20%;
  opacity: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.margintop}%;
`;

export const Name = styled.h4`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  ${Image}:hover & {
    display: none;
  }
`;

export const Controllers = styled.div``;

export const Button = styled.button<{ background?: string; color?: string }>`
  background-color: ${(props) =>
    props.background ? props.background : "rgb(0, 50, 150);"};
  color: ${(props) => (props.color ? props.color : "white")};
  border-radius: 2px;
  border: none;
  font-size: 14px;
  padding: 3px 15px;
  cursor: pointer;
  box-shadow: 0px 0px 5px black;
  font-weight: bold;
  display: none;

  ${Image}:hover & {
    display: inline;
  }
  &:hover {
    border: 2px solid white;
  }
`;
