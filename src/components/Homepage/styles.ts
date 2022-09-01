import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background-color: black;
  display: flex;
  flex-direction: column;
`;

export const Highlight = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
`;

export const Image = styled.div<{ url: string }>`
  background-image: url(${(props) => JSON.stringify(props.url)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: flex-start;
  justify-content: end;
  width: 100%;
  height: 70vh;
`;

export const Info = styled.div`
  background-color: rgba(0, 50, 150, 0.8);
  margin: 0% 1%;
  width: 30%;
  margin-top: 4%;
  text-shadow: 3px 3px 1px black;
  text-align: justify;
  padding: 20px;
  box-shadow: 2px 2px 5px black;
  display: none;
  ${Image}:hover & {
    display: block;
  }
`;

export const Name = styled.h1`
  color: white;
  display: none;

  ${Image}:hover & {
    display: block;
  }
`;

export const Description = styled.p`
  color: white;
  font-style: italic;
  display: none;

  ${Image}:hover & {
    display: block;
  }
`;

export const Button = styled.button<{ background?: string; color?: string }>`
  background-color: ${(props) =>
    props.background ? props.background : "rgb(0, 50, 150);"};
  color: ${(props) =>
    props.color ? props.color : "white"};
  border-radius: 2px;
  font-weight: bold;
  font-size: 14px;
  padding: 3px 15px;
  cursor: pointer;

  box-shadow: 0px 0px 5px black;

  &:hover {
    border: 2px solid white;
  }
`;
