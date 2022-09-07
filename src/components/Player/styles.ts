import styled from "styled-components";

export const Modal = styled.div<{ display: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(5, 5, 5, 0.96);
  z-index: 2;
  display: ${(props) => props.display};
  align-items: center;
  justify-content: center;
`;
export const Info = styled.div`
  border-radius: 5px;
  width: 70vw;
  height: 80vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1%;
  box-shadow: 2px 2px 10px rgb(0, 0, 0);
`;

export const Screen = styled.iframe`
  display: flex;
  height: 80%;
  width: 100%;
  background-color: black;
  border: none;
  border-radius: 5px;
`;

export const BackgroundButtons = styled.div`
  display: flex;
  background-color: rgb(0, 40, 150);
  width: 30%;
  height: 60%;
  margin: 5% 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  text-align: center;
`;

export const BoxButton = styled.div`
  background-color: rgb(250, 180, 0);
  width: 12vw;
  height: 30px;
  border: 1px solid black;
  box-shadow: 3px 3px 5px black;
  color: white;
  font-weight: bolder;
  text-shadow: 1px 1px 1px black;
  margin-top: 1%;
  transition: 0.3s;
  border-radius: 5px;
  &:hover {
    background-color: black;
    cursor: pointer;
  }
`;

export const DataMovie = styled.div`
  background-color: rgb(0, 40, 150);
  opacity: 1;
  text-align: justify;
  box-sizing: border-box;
  padding: 20px;
  color: white;
  border-radius: 5px;
`;

export const TitleInfo = styled.h3`
  margin: 0;
`;

export const Description = styled.p<{ display?: string }>`
  display: ${(props) => props.display};
  width: 100%;
  margin: 10px 0;
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

  &:hover {
    border: 2px solid white;
  }
`;
