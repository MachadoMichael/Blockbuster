import * as C from "./styles";
import { Movie } from "../../types/Movie";
import { Serie } from "../../types/Serie";
import { Player } from "../Player";
import React, { useState } from "react";

type Props = {
  list: Movie[] | Serie[];
  setList:
    | React.Dispatch<React.SetStateAction<Movie[]>>
    | React.Dispatch<React.SetStateAction<Serie[]>>;
  movies: Movie[];
  series: Serie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  setSeries: React.Dispatch<React.SetStateAction<Serie[]>>;
  readFavorites?: number;
  setReadFavorites?: React.Dispatch<React.SetStateAction<number>>;
};

export const Banner = ({
  list,
  movies,
  series,
  setList,
  setMovies,
  setSeries,
  readFavorites,
  setReadFavorites,
}: Props) => {
  const [modal, setModal] = useState("none");
  const [infoData, setInfoData] = useState<Serie | Movie>({
    seasons: {},
    description: "description",
    image: "image",
    name: "name",
    type: "type",
    url: "url",
    release: 2014,
    genre: "genre",
    favorite: false,
  });

  const List = list.map((item, index) => {
    return (
      <C.Banner key={index}>
        <C.Image url={item.image}></C.Image>
        <C.Controllers>
          <C.Name>{item.name}</C.Name>
          <C.Button
            onClick={() => {
              setModal("flex");
              setInfoData(item);
            }}
          >
            PLAY
          </C.Button>

          <C.Button
            onClick={() => {
              setReadFavorites ? setReadFavorites(1) : console.log();
              if (item.favorite === false) {
                movies.forEach((movie) => {
                  if (movie.name === item.name) {
                    movie.favorite = true;
                  }
                });
                series.forEach((serie) => {
                  if (serie.name === item.name) {
                    serie.favorite = true;
                  }
                });
                let newList: Movie[] | Serie[] = [...list];
                newList[index].favorite = true;
                setList(newList);
              } else {
                movies.forEach((movie) => {
                  if (movie.name === item.name) {
                    movie.favorite = false;
                  }
                });
                series.forEach((serie) => {
                  if (serie.name === item.name) {
                    serie.favorite = false;
                  }
                });
                let newList: Movie[] | Serie[] = [...list];
                newList[index].favorite = false;
                setList(newList);
              }
            }}
            background={
              item.favorite === true ? "rgb(250, 180, 0);" : "rgb(0, 50, 150);"
            }
            color={item.favorite === true ? "black" : "white"}
          >
            FAVORITO
          </C.Button>
        </C.Controllers>
      </C.Banner>
    );
  });

  return (
    <C.Container>
      <Player
        modal={modal}
        setModal={setModal}
        infoData={infoData}
        setInfoData={setInfoData}
      ></Player>
      {List}
    </C.Container>
  );
};
