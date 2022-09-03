import * as C from "./styles";
import { useEffect, useState } from "react";
import { Serie } from "../../types/Serie";
import { Movie } from "../../types/Movie";

type Props = {
  modal: string;
  setModal: React.Dispatch<React.SetStateAction<string>>;
  infoData: Movie | Serie;
  setInfoData:
    | React.Dispatch<React.SetStateAction<Serie>>
    | React.Dispatch<React.SetStateAction<Movie>>;
};

export const Player = ({ modal, setModal, infoData, setInfoData }: Props) => {
  const [displayScreenSeries, setDisplayScreenSeries] = useState("none");
  const [displaySeasonsSeries, setDisplaySeasonsSeries] = useState("block");
  const [serieData, setSerieData] = useState<Serie>();
  const [movieData, setMovieData] = useState<Movie>();

  useEffect(() => {
    infoData.type === "movie" ? setMovieData(infoData) : setSerieData(infoData);
  }, [infoData]);

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let modalArea = e.currentTarget;
    if (modalArea === e.target) {
      setModal("none");
    }
  };

  if (infoData.type === "movie") {
    return (
      <C.Modal onClick={(e) => closeModal(e)} display={modal}>
        <C.Info>
          <C.Screen display="block" src={infoData.url}></C.Screen>
          <C.DataMovie>
            <C.TitleInfo>{infoData.name}</C.TitleInfo>
            <C.Description>{infoData.description}</C.Description>
            <C.Controllers>
              <C.Button onClick={() => (infoData.favorite = true)}>
                MINHA LISTA
              </C.Button>
              <C.Button onClick={() => setModal("none")}>X</C.Button>
            </C.Controllers>
          </C.DataMovie>
        </C.Info>
      </C.Modal>
    );
  }
  if (infoData.type === "serie" && serieData) {
    const Seasonx = Object.keys(serieData).map((item, index) => {
      if (item.includes("season")) {
  
        if(serieData)
        return <C.Season>{item.toUpperCase()}</C.Season>;
      } else {
        return <div></div>;
      }
    });

    return (
      <C.Modal onClick={(e) => closeModal(e)} display={modal}>
        <C.Info>
          <C.Screen display={displayScreenSeries} src={infoData.url}></C.Screen>
          <C.ScreenBackground display={displaySeasonsSeries}>
            {Seasonx}
            {/* <C.SeasonsBackground>
            {serieData.season1 !== undefined ? <C.Season>SEASON 1</C.Season> : ""}
            {serieData.season2 !== undefined ? <C.Season>SEASON 2</C.Season> : ""}
            {serieData.season3 !== undefined ? <C.Season>SEASON 3</C.Season> : ""}
            {serieData.season4 !== undefined ? <C.Season>SEASON 4</C.Season> : ""}
            {serieData.season5 !== undefined ? <C.Season>SEASON 5</C.Season> : ""}
            {serieData.season6 !== undefined ? <C.Season>SEASON 6</C.Season> : ""}
            {serieData.season7 !== undefined ? <C.Season>SEASON 7</C.Season> : ""}
            {serieData.season8 !== undefined ? <C.Season>SEASON 8</C.Season> : ""}
            {serieData.season9 !== undefined ? <C.Season>SEASON 9</C.Season> : ""}
            {serieData.season10 !== undefined ? <C.Season>SEASON 10</C.Season> : ""}
            </C.SeasonsBackground> */}
          </C.ScreenBackground>
          <C.DataMovie>
            <C.TitleInfo>{infoData.name}</C.TitleInfo>
            <C.Description>{infoData.description}</C.Description>
            <C.Controllers>
              <C.Button onClick={() => (infoData.favorite = true)}>
                MINHA LISTA
              </C.Button>
              <C.Button onClick={() => setModal("none")}>X</C.Button>
            </C.Controllers>
          </C.DataMovie>
        </C.Info>
      </C.Modal>
    );
  } else {
    return <div></div>;
  }
};
