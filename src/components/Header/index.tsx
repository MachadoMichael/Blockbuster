import { useNavigate } from "react-router-dom";
import { List } from "../List";
import { Link } from "react-router-dom";
import * as C from "./styles";
import { useState } from "react";

export const Header = () => {
  const [search, setSearch] = useState("");
  let navigate = useNavigate();
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    e.preventDefault();

    if (!search) return;
    navigate(`/Pesquisa?q=${search}`);
    setSearch("");
  };
  return (
    <C.Header>
      <Link className="navLinks" to="/">
        {" "}
        <C.Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Blockbuster_logo.svg/594px-Blockbuster_logo.svg.png"></C.Logo>
      </Link>

      <C.Nav>
        <List nav={["Inicio", "Series", "Filmes", "Favoritos"]}></List>
        <C.Form onSubmit={handleSubmit}>
          <C.SearchInput
            type="text"
            placeholder="Procurando algo?"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></C.SearchInput>
          <C.SearchButton type="submit">procurar</C.SearchButton>
        </C.Form>
      </C.Nav>
    </C.Header>
  );
};
