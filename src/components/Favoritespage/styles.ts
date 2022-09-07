import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  height: 80vh;
  margin-top: 3%;
  display: block;
`;

export const Favorites = styled.div`
  display: block;
  overflow-x: auto;
  background-color: rgba(5, 5, 5, 0.8);
`;

export const Subtitle = styled.h2`
  text-shadow: 1px 1px 1px white;
  color: rgb(0, 50, 150);
  background-color: rgba(250, 180, 0, 0.8);
  border: 1px solid rgba(5, 5, 5, 0.8);
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1px;
`;

export const BannerPainel = styled.div`
  display: flex;
  min-height: 30vh;
`;

export const FavoriteItem = styled.div`
  width: 10vw;
  height: 28vh;
  border: 2px solid black;
  margin: 0.5% 0.5%;
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
  width: 200px;
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
  ${FavoriteItem}:hover & {
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

  ${FavoriteItem}:hover & {
    display: inline;
  }
  &:hover {
    border: 2px solid white;
  }
`;
