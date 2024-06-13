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
  width: 42vw;
  height: 5vh;
  background-color: #2A2A2A;
  text-align: center;
  margin: 20px auto 0;
  display: block;
  vertical-align: middle;
  border: solid #434242;
  border-radius: 10px;
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
    <div>
      {isChatting ? (
        <QuitButton onClick={onQuit} />
      ) : (
        <StartButton onClick={onStartChat} />
      )}
    </div>
  );
};

export default Quit;
