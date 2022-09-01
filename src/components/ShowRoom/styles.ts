import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: block;
`;

export const FilterBox = styled.div`
  width: 100%;
  height: 54vh;
  margin-top: 3%;
  background-color: rgb(0, 50, 150);
  justify-content: center;
  align-items: center;
`;

export const MovieSwiper = styled.div<{ margin: number }>`
  margin-top: ${(props) => props.margin}%;
`;

export const Subtitle = styled.div<{ display: string }>`
  display: ${(props) => props.display};
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 6vh;
  margin: 0;
  background-color: rgba(5, 5, 5, 0.9);
  color: white;
  padding: 0;
  font-size: 30px;
  text-align: center;
  font-weight: bolder;
`;

const UpDown = keyframes`
0%{
  transform: translateY(-5px)
}
50%{
  transform: translateY(5px);
}
100%{
  transform: translateY(-5px)
}
`;

export const Arrow = styled.div`
  animation: ${UpDown} 2s linear infinite;
  margin-left: 1%;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 2px white;
    border-radius: 5px;
  }
`;

export const GenreFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 6vh;
  margin: 0;
  background-color: rgba(5, 5, 5, 0.9);
  color: white;
  padding: 0;
  font-size: 30px;
  text-align: center;
  font-weight: bolder;
`;

export const Form = styled.form`
  display: flex;
`;

export const SelectFilter = styled.select`
  width: 5.5vw;
  height: 3vh;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: white;
  border: none;
  margin-right: 10%;
`;

export const Option = styled.option`
  background-color: rgb(0, 50, 150);
`;

export const Button = styled.button<{ background?: string; color?: string }>`
  background-color: rgb(0, 50, 150);
  color: white;
  border-radius: 2px;
  border: none;
  font-size: 14px;
  padding: 3px 15px;
  cursor: pointer;
  box-shadow: 0px 0px 5px black;
  font-weight: bold;

  &:hover {
    border: 2px solid white;
  }
`;
