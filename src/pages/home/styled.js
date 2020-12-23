import styled from "styled-components";
import { Container, Nav } from "../../globalStyled/globalStyled";

export const NavHome = styled(Nav)`
  height: 35vh;
  width: 100%;
  max-width: 100vw;
  background: #6d9fea;
  padding: 0;
  padding-top: 5vh;
  margin: 0;
  align-items: flex-start;
  position: absolute;
  z-index: 1;

  @media (max-width: 1024px) {
    height: 26.25vh;
  }
`;

export const BoxNav = styled.div`
  width: 100%;
  height: 15vh;
  background: #3461a4;
  @media (max-width: 1024px) {
    height: 11.25vh;
  }
`;

export const BoxLogo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 110px;
  height: 115px;
  @media (max-width: 768px) {
    width: 95px;
    height: 90px;
  }
  @media (max-width: 540px) {
    width: 55px;
    height: 50px;
  }
  @media (max-width: 320px) {
    width: 45px;
    height: 40px;
  }
`;

export const NavTitle = styled.div`
  width: 80%;
  height: 100%;
  padding: 0 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.5em;
  font-weight: bold;
  color: #ffffff;
  @media (max-width: 1024px) {
    font-size: 2.8em;
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 540px) {
    font-size: 1.5em;
  }
  @media (max-width: 425px) {
    font-size: 1em;
  }
  @media (max-width: 320px) {
    font-size: 0.9em;
  }
`;

export const ContainerHome = styled(Container)`
  min-height: 100vh;
  padding-top: 25vh;
  background: #e5e5e5;
  justify-content: flex-start;

  @media (max-width: 1024px) {
    padding-top: 19.6vh;
  }
`;

export const ContainerCards = styled.div`
  width: 95%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  @media (max-width: 1440px) {
    height: 50vh;
  }
  @media (max-width: 1024px) {
    height: 75vh;
    flex-wrap: wrap;
  }
`;

export const Card = styled.div`
  width: 350px;
  height: 100%;
  margin: 0 45px 0 45px;
  background: #e5edf2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 1em rgba(10, 11, 11, 0.2);
  @media (max-width: 1440px) {
    width: 275px;
    margin: 0 25px 0 25px;
  }
  @media (max-width: 1280px) {
    width: 240px;
  }
  @media (max-width: 1024px) {
    margin: 0 10px 10px 10px;

    height: 50%;
  }
  @media (max-width: 540px) {
    width: 200px;
    height: 50%;
  }
  @media (max-width: 425px) {
    width: 150px;
  }
  @media (max-width: 320px) {
    width: 125px;
  }
  @media (max-width: 280px) {
    width: 100px;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 20%;
  font-family: roboto, sans-serif;
  font-size: 3.5em;
  color: #5777a8;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1440px) {
    font-size: 2.8em;
  }
  @media (max-width: 1280px) {
    font-size: 2.5em;
  }

  @media (max-width: 540px) {
    font-size: 2em;
  }
  @media (max-width: 425px) {
    font-size: 1.5em;
  }
  @media (max-width: 320px) {
    font-size: 1em;
  }
  @media (max-width: 280px) {
    font-size: 0.9em;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 370px;
  @media (max-width: 1440px) {
    width: 240px;
    height: 296px;
  }
  @media (max-width: 1280px) {
    width: 210px;
    height: 259px;
  }
  @media (max-width: 540px) {
    width: 150px;
    height: 185px;
  }
  @media (max-width: 425px) {
    width: 105px;
    height: 129.5px;
  }
  @media (max-width: 280px) {
    width: 84px;
    height: 103.6px;
  }
`;

export const Points = styled.div`
  width: 100%;
  height: 10%;
  margin: 5px 0;
  font-family: roboto, sans-serif;
  font-size: 4em;
  font-weight: bold;
  color: #5777a8;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1440px) {
    font-size: 3.5em;
  }
  @media (max-width: 1280px) {
    font-size: 3em;
  }
  @media (max-width: 540px) {
    font-size: 2em;
  }
`;

export const ContainerStudent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const BoxStudentsList = styled.div`
  width: 87.5%;
  height: 87.5%;
  display: flex;
  padding: 50px;
  background: #e5edf2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 1em rgba(10, 11, 11, 0.2);
  @media (max-width: 540px) {
    padding: 20px;
  }
  @media (max-width: 320px) {
    padding: 15px;
  }
  @media (max-width: 280px) {
    padding: 5px;
  }
`;

export const ContainerStudentTitle = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

export const BoxTitle = styled.div`
  height: 100%;
  width: 40%;
  font-size: 3.7em;
  color: #5777a8;
  @media (max-width: 1024px) {
    font-size: 3em;
  }
  @media (max-width: 540px) {
    font-size: 2em;
    width: 100%;
    height: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const BoxInput = styled.div`
  height: 100%;
  width: 60%;
  padding-top: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 1024px) {
    padding-top: 5px;
    justify-content: center;
  }
  @media (max-width: 540px) {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`;
export const Input = styled.input`
  width: 50%;
  height: 25%;
  padding: 10px;
  color: #5777a8;
  border: 1px solid rgba(87, 119, 168, 0.5);

  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 540px) {
    width: 90%;
    height: 50%;
  }
  @media (max-width: 320px) {
    width: 95%;
    height: 80%;
    font-size: 0.8em;
  }
  @media (max-width: 280px) {
    font-size: 0.6em;
  }
`;
