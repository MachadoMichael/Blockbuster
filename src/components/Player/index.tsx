import * as C from "./styles";
import { useState } from "react";
import { Serie } from "../../types/Serie";
import { Movie } from "../../types/Movie";

type Props = {
  modal: string;
  setModal: React.Dispatch<React.SetStateAction<string>>;
  infoData: Serie | Movie;
  setInfoData:
    | React.Dispatch<React.SetStateAction<Serie>>
    | React.Dispatch<React.SetStateAction<Movie>>;
};

export const Player = ({ modal, setModal, infoData, setInfoData }: Props) => {
  const [urlEpisode, setUrlEpisode] = useState<string>();
  const [display, setDisplay] = useState("seasons");
  const [estruturaEpisodes, setEstruturaEpisodes] = useState<JSX.Element[]>();

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let modalArea = e.currentTarget;
    if (modalArea === e.target) {
      setModal("none");
      setDisplay("seasons");
    }
  };

  let InfoDataSeasons = Object.values(infoData)[0];
  const seasonData = Object.values(InfoDataSeasons);
  const seasons = seasonData.map((season: Array<string>, index) => {
    return (
      <C.BoxButton
        key={index}
        onClick={() => {
          setDisplay("episodes");
          readEpisodes(season);
        }}
      >
        Season {index + 1}
      </C.BoxButton>
    );
  });

  const readEpisodes = (season: Array<string>) => {
    const episodes = season.map((episode, index) => {
      return (
        <C.BoxButton
          key={index}
          onClick={() => {
            setDisplay("screen");
            setUrlEpisode(episode);
          }}
        >
          {" "}
          Episode {index + 1}
        </C.BoxButton>
      );
    });

    setEstruturaEpisodes(episodes);
  };

  if (infoData.type === "movie" && infoData) {
    return (
      <C.Modal onClick={(e) => closeModal(e)} display={modal}>
        <C.Info>
          <C.Screen src={infoData.url}></C.Screen>
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

  if (infoData.type === "serie") {
    return (
      <C.Modal onClick={(e) => closeModal(e)} display={modal}>
        <C.Info>
          {display === "seasons" ? (
            <C.BackgroundButtons>{seasons}</C.BackgroundButtons>
          ) : (
            <div></div>
          )}

          {display === "episodes" ? (
            <C.BackgroundButtons>
              {estruturaEpisodes !== undefined ? (
                estruturaEpisodes
              ) : (
                <div></div>
              )}
            </C.BackgroundButtons>
          ) : (
            <div></div>
          )}

          {display === "screen" ? (
            <C.Screen src={urlEpisode}></C.Screen>
          ) : (
            <div></div>
          )}

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
