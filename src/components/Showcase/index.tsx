import { Movie } from "../../types/Movie";
import { Serie } from "../../types/Serie";
import { Slider } from "../Slider/Slider";
import * as C from "./styles";
import { SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import "../../App.css";

type Props = {
  data: Movie[] | Serie[];
  title?: string;
  setDataBase?:
    | React.Dispatch<React.SetStateAction<Movie[]>>
    | React.Dispatch<React.SetStateAction<Serie[]>>;
  setSelectMovie?: React.Dispatch<React.SetStateAction<number>> | any;
  height: number;
  marginBox: number[];
};

const settings = {
  spaceBetween: 0,
  slidesPerView: 6,
  navigation: true,
  modules: [Navigation, Pagination],
  pagination: { clickable: true },
};

export const Showcase = ({
  setDataBase,
  data,
  title,
  setSelectMovie,
  height,
  marginBox,
}: Props) => {
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
    type: "type",
    url: "url",
    release: 2014,
    genre: "genre",
    favorite: false,
  });

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let modalArea = e.currentTarget;
    if (modalArea === e.target) {
      setModal("none");
    }
  };

  const showcase = data.map((item, index) => {
    return (
      <SwiperSlide className="swiperSliderTest" key={index}>
        <C.Image
          onClick={(e) => {
            if (e.currentTarget === e.target) {
              setSelectMovie(index);
            }
          }}
          url={item.image}
        >
          {item.release < 2023 ? "" : <C.ComingSoon>EM BREVE</C.ComingSoon>}
          <C.Box margintop={item.release < 2023 ? marginBox[1] : marginBox[0]}>
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
                    setDataBase ? setDataBase([...data]) : console.log(item);
                  } else {
                    item.favorite = false;
                    setDataBase ? setDataBase([...data]) : console.log(item);
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
            </C.Controllers>
          </C.Box>
        </C.Image>
      </SwiperSlide>
    );
  });

  return (
    <C.Carousel height={height}>
      <C.Modal onClick={(e) => closeModal(e)} display={modal}>
        <C.Info>
          <C.Trailer src={infoData.url}></C.Trailer>
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
      <Slider settings={settings}>{showcase}</Slider>
    </C.Carousel>
  );
};
