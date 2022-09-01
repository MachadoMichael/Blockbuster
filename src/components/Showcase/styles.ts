import styled from "styled-components";

export const Carousel = styled.div<{ height: number }>`
  width: 100vw;
  height: ${(props)=> props.height}vh;
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

export const Modal = styled.div<{ display: string }>`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(15, 15, 15, 0.8);
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1%;
  box-shadow: 2px 2px 10px rgb(0, 0, 0);
`;

export const Trailer = styled.iframe`
  height: 80%;
  width: 100%;
  background-color: black;
  border: none;
  border-radius: 5px;
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
