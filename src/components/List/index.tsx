import * as C from "./styles";
import { Link } from "react-router-dom";
import "../../App.css";

type Props = {
  nav: string[];
};

export const List = ({ nav }: Props) => {
  const itemNav = nav.map((item, index) => {
    if (item === "Inicio") {
      return (
        <C.ItemList key={index}>
          <Link className="navLinks" to="/">
            {item}
          </Link>
        </C.ItemList>
      );
    } else {
      return (
        <C.ItemList key={index}>
          <Link className="navLinks" to={`${item}`}>
            {item}
          </Link>
        </C.ItemList>
      );
    }
  });

  return <C.NavButtons>{itemNav}</C.NavButtons>;
};
