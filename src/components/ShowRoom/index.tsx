import * as C from "./styles";
import { Movie } from "../../types/Movie";
import { Banner } from "../Banner";
import { useState, useEffect } from "react";
import { Showcase } from "../Showcase";
import { Serie } from "../../types/Serie";

type Props = {
  dataBase: Movie[];
  setDataBase:
    | React.Dispatch<React.SetStateAction<Movie[]>>
    | React.Dispatch<React.SetStateAction<Serie[]>>;
};

export const ShowRoom = ({ dataBase, setDataBase }: Props) => {
  const [unReleased, setUnReleased] = useState<Movie[] | Serie[]>([]);
  const [released, setReleased] = useState<Movie[] | Serie[]>([]);
  const [previewMode, setPreviewMode] = useState(true);
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
    setReleased(released);
    setUnReleased(unReleased);
    setFiltered(dataBase);
  }, [dataBase]);

  const filterMovies = () => {
    if (filter === "all") {
      setFiltered(dataBase);
    } else {
      let arrayFiltered: Movie[] = [];
      dataBase.map((item, index) => {
        if (item.genre === filter) arrayFiltered.push(item);
        return "";
      });
      setFiltered(arrayFiltered);
    }
  };

  return (
    <C.Container>
      {previewMode === false ? (
        <Banner unReleased={unReleased}></Banner>
      ) : (
        <C.FilterBox>
          <C.GenreFilter>
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
                <C.Option value="action">Ação</C.Option>
                <C.Option value="fantasy">Fantasia</C.Option>
                <C.Option value="comedy">Comédia</C.Option>
                <C.Option value="sciencefiction">Ficção Cientifica</C.Option>
                <C.Option value="romance">Romance</C.Option>
                <C.Option value="horror">Terror</C.Option>
              </C.SelectFilter>
              <C.Button type="submit">FILTRAR</C.Button>
            </C.Form>
          </C.GenreFilter>

          <Showcase
            marginBox={[88, 110]}
            height={54}
            data={filtered}
            setDataBase={setFiltered}
            title="Movies"
          ></Showcase>
        </C.FilterBox>
      )}
      <C.MovieSwiper margin={previewMode === false ? 0 : 3}>
        <C.Subtitle display="flex">
          {previewMode === false ? "VER MAIS" : "TODOS"}
          {previewMode === false ? (
            <C.Arrow
              onClick={() => {
                previewMode === false
                  ? setPreviewMode(true)
                  : setPreviewMode(false);
              }}
            >
              ⏬
            </C.Arrow>
          ) : (
            <C.Arrow
              onClick={() => {
                previewMode === true
                  ? setPreviewMode(false)
                  : setPreviewMode(true);
              }}
            >
              ⏫
            </C.Arrow>
          )}
        </C.Subtitle>
        <Showcase
          marginBox={[50, 62]}
          height={30}
          data={released}
          setDataBase={setDataBase}
          title="Movies"
        ></Showcase>
      </C.MovieSwiper>
    </C.Container>
  );
};
