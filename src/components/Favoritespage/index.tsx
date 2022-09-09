import * as C from "./styles";
import { Movie } from "../../types/Movie";
import { Serie } from "../../types/Serie";
import { useEffect, useState } from "react";
import { Banner } from "../Banner";
type Props = {
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  setSeries: React.Dispatch<React.SetStateAction<Serie[]>>;
  movies: Movie[];
  series: Serie[];
};

export const Favoritespage = ({
  movies,
  series,
  setMovies,
  setSeries,
}: Props) => {
  const [favoritesMovies, setFavoritesMovies] = useState<Movie[]>([]);
  const [favoritesSeries, setFavoritesSeries] = useState<Serie[]>([]);
  const [readFavorites, setReadFavorites] = useState(0);

  useEffect(() => {
    let favoritesListMovies: Movie[] = [];
    let favoritesListSeries: Serie[] = [];

    movies.forEach((movie) => {
      if (movie.favorite === true) {
        favoritesListMovies.push(movie);
      }
      setFavoritesMovies(favoritesListMovies);
    });
    series.forEach((serie) => {
      if (serie.favorite === true) {
        favoritesListSeries.push(serie);
      }
      setFavoritesSeries(favoritesListSeries);
    });
  }, [readFavorites]);

  return (
    <C.Container>
      <C.Subtitle>SEUS FILMES FAVORITOS</C.Subtitle>
      <C.Favorites>
        <C.BannerPainel>
          <Banner
            movies={movies}
            setMovies={setMovies}
            series={series}
            setSeries={setSeries}
            list={favoritesMovies}
            setList={setFavoritesMovies}
            readFavorites={readFavorites}
            setReadFavorites={setReadFavorites}
          ></Banner>
        </C.BannerPainel>
      </C.Favorites>
      <C.Subtitle>SUAS SÉRIES FAVORITAS</C.Subtitle>
      <C.Favorites>
        <C.BannerPainel>
          <Banner
            movies={movies}
            setMovies={setMovies}
            series={series}
            setSeries={setSeries}
            list={favoritesSeries}
            setList={setFavoritesSeries}
            readFavorites={readFavorites}
            setReadFavorites={setReadFavorites}
          ></Banner>
        </C.BannerPainel>
      </C.Favorites>
    </C.Container>
  );
};
