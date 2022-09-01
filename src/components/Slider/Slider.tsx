import { Swiper, SwiperProps } from "swiper/react";
import "swiper/css";
import { ReactNode } from "react";


interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

export const Slider = ({ settings, children }: SliderProps) => {
  return <Swiper {...settings}>{children}</Swiper>;
};
