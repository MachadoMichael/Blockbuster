import styled from "styled-components";

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  background-color: rgb(0, 50, 150);
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  margin: 0.5% 0.5%;
  min-height: 5vw;
  z-index: 2;
`;

export const Nav = styled.ul`
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
`;

export const Search = styled.input``;
