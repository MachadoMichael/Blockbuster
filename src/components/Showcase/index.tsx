import * as C from "./styles";
import { Movie } from "../../types/Movie";
import { Serie } from "../../types/Serie";
import { Slider } from "../Slider/Slider";
import { Player } from "../Player";
import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "../../App.css";

type Props = {
  data: Movie[] | Serie[];
  setDataBase?:
    | React.Dispatch<React.SetStateAction<Movie[]>>
    | React.Dispatch<React.SetStateAction<Serie[]>>;
  setSelectMovie?: React.Dispatch<React.SetStateAction<number>> | any;
  height: number;
  width: number;
  marginBox: number[];
  sliderPerViews: number;
};

export const Showcase = ({
  setDataBase,
  data,
  setSelectMovie,
  height,
  width,
  marginBox,
  sliderPerViews,
}: Props) => {
  const [modal, setModal] = useState("none");
  const [infoData, setInfoData] = useState<Serie | Movie>({
    seasons: {},
    description: "description",
    image: "image",
    name: "name",
    type: "type",
    url: "url",
    release: 2014,
    genre: "genre",
    favorite: false,
  });

  const settings = {
    spaceBetween: 0,
    slidesPerView: sliderPerViews,
    navigation: true,
    modules: [Navigation, Pagination],
    pagination: { clickable: true },
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
    <C.Carousel height={height} width={width}>
      <Player
        modal={modal}
        setModal={setModal}
        infoData={infoData}
        setInfoData={setInfoData}
      ></Player>
      <Slider settings={settings}>{showcase}</Slider>
    </C.Carousel>
  );
};
