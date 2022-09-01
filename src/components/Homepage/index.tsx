import * as C from "./styles";
import { Movie } from "../../types/Movie";
import { useEffect, useState } from "react";
import { Showcase } from "../Showcase";
import { Serie } from "../../types/Serie";

type Props = {
  dataBase: Movie[] | Serie[];
  setDataBase: React.Dispatch<React.SetStateAction<Movie[]>>;
};

export const Homepage = ({ dataBase, setDataBase }: Props) => {
  const [selectMovie, setSelectMovie] = useState(0);

  useEffect(() => {
    let random = parseInt((Math.random() * 10).toFixed(1));
    setSelectMovie(random);
  }, []);

  const midia = dataBase.map((item, index) => {
    if (index === selectMovie) {
      return (
        <C.Image url={item.image} key={index}>
          <C.Info>
            <C.Name>{item.name}</C.Name>
            <C.Description>{item.description}</C.Description>
            <C.Button>PLAY</C.Button>
            <C.Button
              onClick={() => {
                if (item.favorite === false) {
                  item.favorite = true;
                  setDataBase([...dataBase]);
                } else {
                  item.favorite = false;
                  setDataBase([...dataBase]);
                }
              }}
              background={
                item.favorite === true
                  ? "rgb(250, 180, 0);"
                  : "rgb(0, 50, 150);"
              }
              color={item.favorite === true ? "black" : "white"}
            >
              FAVORITE
            </C.Button>
            {item.release < 2023 ? (
              ""
            ) : (
              <C.Button background="brown">EM BREVE</C.Button>
            )}
          </C.Info>
        </C.Image>
      );
    } else {
      return <div key={index}></div>;
    }
  });

  return (
    <C.Container>
      <C.Highlight>{midia}</C.Highlight>
      <Showcase
        marginBox={[50, 62]}
        height={30}
        data={dataBase}
        setDataBase={setDataBase}
        title="Movies"
        setSelectMovie={setSelectMovie}
      ></Showcase>
    </C.Container>
  );
};
