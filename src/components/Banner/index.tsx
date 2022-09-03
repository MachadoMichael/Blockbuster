import * as C from "./styles";
import { Movie } from "../../types/Movie";
import { Serie } from "../../types/Serie";
import { Player } from "../Player";
import { useState } from "react";

type Props = {
  list: Movie[] | Serie[];
  setList:
    | React.Dispatch<React.SetStateAction<Movie[]>>
    | React.Dispatch<React.SetStateAction<Serie[]>>;
};

export const Banner = ({ list, setList }: Props) => {
  const [modal, setModal] = useState("none");

  const [infoData, setInfoData] = useState<Serie | Movie>({
    season1: undefined,
    season2: undefined,
    season3: undefined,
    season4: undefined,
    season5: undefined,
    season6: undefined,
    season7: undefined,
    season8: undefined,
    season9: undefined,
    season10: undefined,
    description: "description",
    image: "image",
    name: "name",
    type: "serie",
    url: "url",
    release: 2014,
    genre: "genre",
    favorite: false,
  });

  const item = list.map((item, index) => {
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
              if (item.favorite === false) {
                item.favorite = true;
              } else {
                item.favorite = false;
                let newlist = list.filter((item) => item.favorite === true);
                setList([...newlist]);
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
      {item}
    </C.Container>
  );
};
