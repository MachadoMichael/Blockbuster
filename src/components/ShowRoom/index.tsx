import * as C from "./styles";
import { Movie } from "../../types/Movie";
import { Releases } from "../Releases";
import { useState, useEffect } from "react";
import { Showcase } from "../Showcase";
import { Serie } from "../../types/Serie";

type Props = {
  dataBase: Movie[] | Serie[];
  setDataBase:
    | React.Dispatch<React.SetStateAction<Movie[]>>
    | React.Dispatch<React.SetStateAction<Serie[]>>;
};

export const Showroom = ({ dataBase, setDataBase }: Props) => {
  const [unReleased, setUnReleased] = useState<Movie[] | Serie[]>([]);
  const [filter, setFilter] = useState("all");
  const [filtered, setFiltered] = useState<Movie[] | Serie[]>([]);

  useEffect(() => {
    let unReleased: Movie[] = [];
    let released: Movie[] = [];
    dataBase.map((item, index) => {
      if (item.release > 2022) {
        unReleased.push(item);
      }
      if (item.release < 2023) {
        released.push(item);
      }

      return unReleased;
    });
    setUnReleased(unReleased);
    setFiltered(dataBase);
  }, [dataBase]);

  const filterMovies = () => {
    let arrayFiltered: Movie[] | Serie[] = [];
    dataBase.map((item, index) => {
      if (filter === "all" && item.release < 2023) {
        arrayFiltered.push(item);
        setFiltered(arrayFiltered);
      }

      if (item.genre === filter && item.release < 2023) {
        arrayFiltered.push(item);
        setFiltered(arrayFiltered);
      } else {
        console.log("IHI");
      }
    });
  };

  return (
    <C.Container>
      <Releases unReleased={unReleased}></Releases>
      <C.SubtitleBackground display="flex" margin={0}>
        <C.Form
          onSubmit={(e) => {
            e.preventDefault();
            filterMovies();
          }}
        >
          <C.SelectFilter
            value={filter}
            onChange={(text) => setFilter(text.target.value)}
          >
            <C.Option value="all">Todos</C.Option>
            <C.Option value="action">Ação</C.Option>
            <C.Option value="comedy">Comédia</C.Option>
            <C.Option value="fantasy">Fantasia</C.Option>
            <C.Option value="horror">Terror</C.Option>
            <C.Option value="romance">Romance</C.Option>
            <C.Option value="sciencefiction">Ficção Cientifica</C.Option>
          </C.SelectFilter>
          <C.Button type="submit">FILTRAR</C.Button>
        </C.Form>
      </C.SubtitleBackground>
      <C.MovieSwiper margin={0}>
        <Showcase
          sliderPerViews={6}
          marginBox={[50, 62]}
          height={30}
          width={100}
          data={filtered}
          setDataBase={setDataBase}
        ></Showcase>
      </C.MovieSwiper>
    </C.Container>
  );
};
