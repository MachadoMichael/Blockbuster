import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Banner = styled.div`
  width: 10vw;
  height: 28vh;
  border: 2px solid black;
  margin: 10px 10px;
  box-shadow: 1px 1px 5px black;
  &:hover {
    border: 2px solid rgb(250, 180, 0);
  }
`;

export const Image = styled.div<{ url?: string }>`
  background-image: url(${(props) => JSON.stringify(props.url)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 80%;
  width: 100%;
`;

export const Controllers = styled.div`
  background-color: rgba(7, 7, 7, 0.9);
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.h4`
  color: white;
  margin: 0;
  font-weight: bold;
  text-align: center;
  ${Banner}:hover & {
    display: none;
  }
`;

export const Button = styled.button<{ background?: string }>`
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

  ${Banner}:hover & {
    display: inline;
  }
  &:hover {
    border: 2px solid white;
  }
`;
