import styled from "styled-components";

export const Main = styled.div`
  width: 70vw;
  height: 70vh;
  margin: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    height: 100vh;
    width: 100vw;
    border-radius: 0;
    text-align: left;
  }
`;

export const ContentLayout = styled.div`
  width: 70vw;
  height: 70vh;
  margin: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: white;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    height: 100vh;
    width: 100vw;
    border-radius: 0;
    text-align: left;
  }
`;