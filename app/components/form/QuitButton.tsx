import React from "react";
import styled from "styled-components";
import QuitIcon from "../icons/QuitIcon";

const StyledQuitButton = styled.button`
  padding: 10px;
  background-color: #2A2A2A;
  text-align: center;
  border: solid #434242;
  border-radius: 10px;
`;

interface QuitButtonProps {
  onClick: () => void;
}

const QuitButton: React.FC<QuitButtonProps> = ({ onClick }) => {
  return <StyledQuitButton onClick={onClick}><QuitIcon width={24} height={24} /></StyledQuitButton>;
};

interface Props {
  onQuit: () => void;
  isChatting: boolean;
  onStartChat: () => void;
}

const Quit = ({ onQuit, isChatting }: Props) => {
  return isChatting && <QuitButton onClick={onQuit} />  
};

export default Quit;
