import styled from "styled-components";

export const Header = styled.div`
  min-width: 100vw;
  position: fixed;
  top: 0;
  background-color: rgba(250, 180, 0, 0.8);
  height: 6%;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  margin: 5% 5%;
  height: 5vw;
  z-index: 2;
`;

export const Nav = styled.ul`
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
`;

export const SearchInput = styled.input`
  border: 2px solid rgb(0, 50, 150);
  border-radius: 3px;
`;

export const SearchButton = styled.button`
  background-color: rgb(0, 50, 150);
  color: white;
  border-radius: 2px;
  border: none;
  width: 6vw;
  height: 3vh;
  font-size: 14px;
  padding: 3px 15px;
  cursor: pointer;
  box-shadow: 0px 0px 5px black;
  font-weight: bold;
  display: none;

  &:hover {
    border: 2px solid white;
  }
`;

export const Form = styled.form``;
