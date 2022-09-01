import * as C from "./styles";
import { Movie } from "../../types/Movie";
import { Serie } from "../../types/Serie";
import { useEffect, useState } from "react";

type Props = {
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  setSeries: React.Dispatch<React.SetStateAction<Serie[]>>;
  movies: Movie[];
  series: Serie[];
};

export const Favorites = ({ movies, series, setMovies, setSeries }: Props) => {
  const [favoritesMovies, setFavoritesMovies] = useState<Movie[]>([]);
  const [favoritesSeries, setFavoritesSeries] = useState<Serie[]>([]);

  useEffect(() => {
    let favoritesListMovies: Movie[] = [];
    let favoritesListSeries: Serie[] = [];

    movies.map((item, index) => {
      if (item.favorite === true) {
        favoritesListMovies.push(item);
      }
      return favoritesListMovies;
    });

    series.map((item, index) => {
      if (item.favorite === true) {
        favoritesListSeries.push(item);
      }
      return favoritesListSeries;
    });

    setFavoritesMovies(favoritesListMovies);
    setFavoritesSeries(favoritesListSeries);
  }, []);

  const favoritePainel = (
    list: Movie[] | Serie[],
    setList:
      | React.Dispatch<React.SetStateAction<Movie[]>>
      | React.Dispatch<React.SetStateAction<Serie[]>>
  ) => {
    const Painel = list.map((item, index) => {
      return (
        <C.FavoriteMovie key={index}>
          <C.Image url={item.image}></C.Image>
          <C.Controllers>
            <C.Name>{item.name}</C.Name>
            <C.Button>PLAY</C.Button>
            <C.Button
              onClick={() => {
                if (item.favorite === false) {
                  item.favorite = true;
                } else {
                  item.favorite = false;
                  let newlist = list.filter((item) => item.favorite === true);
                  setList([...newlist]);
                }
              }}
              background={
                item.favorite === true
                  ? "rgb(250, 180, 0);"
                  : "rgb(0, 50, 150);"
              }
              color={item.favorite === true ? "black" : "white"}
            >
              REMOVE
            </C.Button>
          </C.Controllers>
        </C.FavoriteMovie>
      );
    });

    return Painel;
  };

  return (
    <C.Container>
      {/* {favorites.length >= 1 ? favoritePainel : <h1>Não há favoritos</h1>} */}

      <C.Favorites>
        <C.Subtitle>SEUS FILMES FAVORITOS</C.Subtitle>
        <C.Boxes>{favoritePainel(favoritesMovies, setFavoritesMovies)}</C.Boxes>
      </C.Favorites>

      <C.Favorites>
        <C.Subtitle>SUAS SÉRIES FAVORITAS</C.Subtitle>
        <C.Boxes>{favoritePainel(favoritesSeries, setFavoritesSeries)}</C.Boxes>
      </C.Favorites>
    </C.Container>
  );
};
