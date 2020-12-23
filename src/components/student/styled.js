import styled from "styled-components";

export const Line = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid rgba(87, 119, 168, 0.5);
`;

export const Name = styled.div`
  width: 60%;
  font-size: 2.5em;
  color: #5777a8;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 540px) {
    font-size: 1em;
  }

  @media (max-width: 425x) {
    font-size: 0.8em;
  }
  @media (max-width: 280px) {
    font-size: 0.75em;
  }
`;

export const House = styled.div`
  width: 30%;
  font-size: 2.5em;
  color: #5777a8;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
  @media (max-width: 540px) {
    font-size: 1em;
  }

  @media (max-width: 425x) {
    font-size: 0.8em;
  }
  @media (max-width: 280px) {
    font-size: 0.75em;
  }
`;
export const ButtonBox = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    transform: scale(1.1);
  }
  img {
    @media (max-width: 540px) {
      width: 30px;
      height: 30px;
    }
    @media (max-width: 320px) {
      width: 16px;
      height: 16px;
    }
  }
`;
