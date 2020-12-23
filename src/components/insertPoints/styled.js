import styled from "styled-components";
import Popup from "reactjs-popup";

export const StyledPopup = styled(Popup)`
  &-overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(10, 11, 11, 0.3);
  }
  &-content {
    width: 40%;
    height: 40%;
    background: #e5edf2;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1440px) {
      width: 50%;
      height: 45%;
    }
    @media (max-width: 1280px) {
      width: 60%;
      height: 50%;
    }

    @media (max-width: 1024px) {
      width: 75%;
      height: 25%;
    }
    @media (max-width: 540px) {
      width: 90%;
      height: 30%;
    }
    @media (max-width: 425px) {
      width: 90%;
      height: 20%;
    }
  }
`;

export const Header = styled.div`
  height: 100%;
  width: 35%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 540px) {
    padding: 7.5px;
  }
`;

export const StudentPic = styled.img`
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  width: 65%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 540px) {
    padding: 5px;
  }
`;

export const BoxLogo = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
`;

export const HouseLogo = styled.img`
  width: 72px;
  height: 88.8px;

  @media (max-width: 1024px) {
    width: 36px;
    height: 44.4px;
  }
  @media (max-width: 425px) {
    width: 28.5px;
    height: 33.3px;
  }
`;

export const HouseName = styled.div`
  height: 100%;
  width: 70%;
  padding-left: 20px;
  font-size: 3em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #3461a4;

  @media (max-width: 1024px) {
    font-size: 2.5em;
  }
  @media (max-width: 540px) {
    padding-left: 10px;
  }
  @media (max-width: 425px) {
    padding-left: 5px;
    font-size: 1.2em;
  }
`;

export const Name = styled.div`
  width: 100%;
  height: 20%;
  font-size: 3.5em;
  color: #3461a4;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    font-size: 2em;
  }
  @media (max-width: 425px) {
    font-size: 1em;
    height: 10%;
  }
`;

export const BoxPoints = styled.div`
  width: 100%;
  height: 55%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1024px) {
    padding-top: 5px;
  }
`;

export const Input = styled.input`
  width: 70%;
  height: 25%;
  padding: 10px;
  font-size: 1.5em;
  color: #3461a4;
  outline: none;
  border: 1px solid rgba(87, 119, 168);
  @media (max-width: 1024px) {
    width: 90%;
    height: 40%;
  }
  @media (max-width: 540px) {
    padding: 5px;
  }
  @media (max-width: 425px) {
    font-size: 0.8em;
  }
`;

export const ButtonsPlace = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 540px) {
    height: 60%;
  }
`;

export const ButtonAdd = styled.button`
  width: 30%;
  height: 50%;
  border: none;
  background: #65e1cb;
  color: #ffffff;
  font-size: 2em;
  margin: 0 5%;

  @media (max-width: 1024px) {
    font-size: 1.5em;
    height: 70%;
  }
  @media (max-width: 540px) {
    font-size: 1.5em;
    height: 70%;
  }
  @media (max-width: 425px) {
    font-size: 1em;
    height: 85%;
  }
`;

export const ButtonRemove = styled(ButtonAdd)`
  background: #f8a388;
`;

export const DisplayAddPoints = styled.div`
  font-size: 3.5em;
  font-weight: bold;
  color: #65e1cb;
`;

export const DisplayRemovePoints = styled(DisplayAddPoints)`
  color: #f8a388;
`;
export const ButtonDone = styled(ButtonAdd)`
  background: #3461a4;
`;

export const Image = styled.img``;
