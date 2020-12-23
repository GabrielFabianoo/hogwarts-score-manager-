import styled from "styled-components";

export const Line = styled.div`
  width: 100%;
  height: 7.5%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid rgba(87, 119, 168, 0.5);
`;

export const Name = styled.div`
  width: 60%;
  font-size: 2.5em;
  font-weight: bold;
  color: #5777a8;

  @media (max-width: 540px) {
    font-size: 1.5em;
  }

  @media (max-width: 425px) {
    font-size: 1em;
  }
  @media (max-width: 320px) {
    font-size: 0.8em;
  }
`;

export const House = styled.div`
  width: 40%;
  font-size: 2.5em;
  font-weight: bold;

  color: #5777a8;
  @media (max-width: 540px) {
    font-size: 1.5em;
  }

  @media (max-width: 425px) {
    font-size: 1em;
  }
  @media (max-width: 320px) {
    font-size: 0.8em;
  }
`;

export const ContainerStudants = styled.div`
  width: 100%;
  height: 50%;
`;

export const Pagination = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 7.5%;
  height: 35%;
  font-size: 1em;
  color: #5777a8;
  font-weight: bold;
  background: none;
  border: 2px solid rgba(87, 119, 168, 0.5);
  border-radius: 5px;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    border: 2px solid rgba(87, 119, 168, 1);
  }

  :focus {
    border: 2px solid rgba(87, 119, 168, 1);
  }
  @media (max-width: 540px) {
    width: 15%;
    height: 50%;
  }
`;

export const CurrentPage = styled.div`
  height: 5%;
  width: 100%;
  color: #5777a8;
  font-size: 1.5em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;
