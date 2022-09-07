import * as C from "./styles";
import { Movie } from "../../types/Movie";
import { Serie } from "../../types/Serie";
import { useState, useEffect } from "react";

type Props = {
  unReleased: Movie[] | Serie[];
};

export const Releases = ({ unReleased }: Props) => {
  console.log(`banner`);
  const [unReleasedBanners, setUnReleasedBanner] = useState<Number[]>([]);

  useEffect(() => {
    randomMoviesForBanner();
  }, []);

  const randomNumber = () => {
    let random = parseInt((Math.random() * 10).toFixed(1));
    return random;
  };

  let firstBannerIndex = randomNumber();
  let secondBannerIndex = randomNumber();
  let thirdBannerIndex = randomNumber();

  const randomMoviesForBanner = () => {
    let indexList = [];
    const luckMovie = () => {
      if (secondBannerIndex === firstBannerIndex) {
        secondBannerIndex = randomNumber();
      } else {
        return secondBannerIndex;
      }

      if (
        thirdBannerIndex === firstBannerIndex ||
        thirdBannerIndex === secondBannerIndex
      ) {
        thirdBannerIndex = randomNumber();
      } else {
        return thirdBannerIndex;
      }
    };

    luckMovie();

    if (
      firstBannerIndex !== secondBannerIndex &&
      secondBannerIndex !== thirdBannerIndex &&
      firstBannerIndex !== thirdBannerIndex
    ) {
      indexList.push(firstBannerIndex, secondBannerIndex, thirdBannerIndex);
    } else {
      luckMovie();
    }

    setUnReleasedBanner(indexList);
  };

  const bannerSelector = unReleased?.map((item, index) => {
    if (
      index === unReleasedBanners[0] ||
      unReleasedBanners[1] ||
      unReleasedBanners[2]
    ) {
      return (
        <C.BannerBox key={index}>
          <C.Image url={item.image}>
            <C.NotAvailable>EM BREVE</C.NotAvailable>
          </C.Image>
          <C.Info>
            <C.Name>{item.name}</C.Name>
            <C.Release>{item.release}</C.Release>
          </C.Info>
        </C.BannerBox>
      );
    } else {
      return <div></div>;
    }
  });

  return <C.ComingSoonBanners>{bannerSelector}</C.ComingSoonBanners>;
};
