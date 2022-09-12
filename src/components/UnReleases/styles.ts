import styled from "styled-components";

export const ComingSoonBanners = styled.div`
  width: 100%;
  height: 60vh;
  margin-top: 3%;
  background-color: rgb(0, 50, 150);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BannerBox = styled.div`
  width: 20vw;
  height: 50vh;
  border: 2px solid black;
  margin: 0.5% 0.5%;
  box-shadow: 1px 1px 5px black;
  display: flex;
  flex-direction: column;

  &:hover {
    border: 2px solid rgb(250, 180, 0);
  }
`;

export const Image = styled.div<{ url?: string }>`
  background-image: url(${(props) => JSON.stringify(props.url)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 90%;
  width: 100%;
  border-radius: 2px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const NotAvailable = styled.div`
  background-color: brown;
  width: 25em;
  height: 10%;
  text-align: center;
  font-size: 30px;
  margin: auto;
  opacity: 0.8;
`;

export const Info = styled.div`
  background-color: rgba(7, 7, 7, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
`;

export const Soon = styled.h3`
  display: none;
  color: white;
  ${BannerBox}:hover & {
    display: block;
  }
`;

export const Name = styled.h3`
  color: white;
  font-size: 20px;

  ${BannerBox}:hover & {
    display: none;
  }
`;

export const Release = styled.h3`
  display: none;
  color: white;
  font-size: 20px;
  ${BannerBox}:hover & {
    display: block;
  }
`;
