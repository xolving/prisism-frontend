import React from "react";
import styled from "styled-components";

const StyledQuitButton = styled.button`
  width: 6vw;
  height: 5vh;
  background-color: #2A2A2A;
  text-align: center;
  border: solid #434242;
  border-radius: 10px;
`;

const StyledStartButton = styled.button`
  margin: 10px;
  height: 5vh;
  background-color: #313131;
  text-align: center;
  border: solid #434242;
  border-radius: 10px;
  margin-top: 1vh;
  padding: 10px;
  width: 90%;
  font-weight: 700;
`;

interface QuitButtonProps {
  onClick: () => void;
}

const QuitButton: React.FC<QuitButtonProps> = ({ onClick }) => {
  return <StyledQuitButton onClick={onClick}>나가기</StyledQuitButton>;
};

interface StartButtonProps {
  onClick: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({ onClick }) => {
  return <StyledStartButton onClick={onClick}>채팅 시작하기</StyledStartButton>;
};

interface Props {
  onQuit: () => void;
  isChatting: boolean;
  onStartChat: () => void;
}

const Quit = ({ onQuit, isChatting, onStartChat }: Props) => {
  return (
    <>
      {isChatting ? (
        <QuitButton onClick={onQuit} />
      ) : (
        <StartButton onClick={onStartChat} />
      )}
    </>
  );
};

export default Quit;
