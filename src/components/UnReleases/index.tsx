import * as C from "./styles";
import { Movie } from "../../types/Movie";
import { Serie } from "../../types/Serie";

type Props = {
  unReleased: Movie[] | Serie[];
};

export const UnReleases = ({ unReleased }: Props) => {
  const bannerSelector = unReleased?.map((item, index) => {
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
  });

  return <C.ComingSoonBanners>{bannerSelector}</C.ComingSoonBanners>;
};
