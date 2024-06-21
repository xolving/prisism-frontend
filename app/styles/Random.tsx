import styled from 'styled-components';

export const ChatMain = styled.div`
  width: 58vw;
  height: 70vh;
  margin: auto;
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

export const ChatTab = styled.div`
  margin: 10px;
  height: 50vh;
  text-align: left;
  border-radius: 10px;
  overflow-y: auto;
  margin-top: 1vh;
  width: 100%;
  align-content: end;

  @media screen and (max-width: 768px) {
    height: 90%;
    padding-bottom: 3vh;
  }
`;

export const ChatTabOrigin = styled.div`
  margin: 10px;
  height: 60vh;
  background-color: #262626;
  text-align: left;
  border: 1px solid var(--background-secondary-rgb);
  border-radius: 10px;
  margin-top: 1vh;
  padding: 10px;
  width: 100%;
  align-content: end;

  @media screen and (max-width: 768px) {
    height: 100%;
    border: none;
  }
`;

export const Chat = styled.div`
  padding: 8px 12px;
  display: inline-block;
  border-radius: 12px;
  background-color: #232323;
  border: 1px solid #424a47;
`