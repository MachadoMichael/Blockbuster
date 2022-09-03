import * as C from "./styles";
import { Movie } from "../../types/Movie";
import { Serie } from "../../types/Serie";
import { useEffect, useState } from "react";
import { Player } from "../Player";
import { Banner } from "../Banner";

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

  return (
    <C.Container>
      <C.Subtitle>SEUS FILMES FAVORITOS</C.Subtitle>
      <C.Favorites>
        <C.BannerPainel>
          <Banner list={favoritesMovies} setList={setFavoritesMovies}></Banner>
        </C.BannerPainel>
      </C.Favorites>
      <C.Subtitle>SUAS SÉRIES FAVORITAS</C.Subtitle>
      <C.Favorites>
        <C.BannerPainel>
          <Banner list={favoritesSeries} setList={setFavoritesSeries}></Banner>
        </C.BannerPainel>
      </C.Favorites>
    </C.Container>
  );
};
