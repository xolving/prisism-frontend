import { useState } from "react";
import styled from "styled-components";
import QuitIcon from "../icons/QuitIcon";
import StartButton from "./StartButton";

const Bottom = styled.div`
  background-color: #313131;
  border: solid #434242;
  border-radius: 10px;
  display: flex;
  padding: 10px;
  width: 100%;

  @media screen and (max-width: 768px) {
    position: fixed;
    bottom: 0;  
    margin: 0;
  }
`

const Chatinput = styled.input`
  background-color: #313131;
  text-align: left;
  width: 95%;
`

const StyledQuitButton = styled.button`
  text-align: center;
  margin-left: auto;
`

interface Props {
  onSendMessage: (input: string) => void;
  onQuit: () => void;
  isChatting: boolean;
  onStartChat: () => void;
}

const Button = ({ onSendMessage, isChatting, onStartChat, onQuit }: Props) => {
  const [value, setValue] = useState('');
  const [isComposing, setComposing] = useState(false);

  const sendToggle = () => {
    if (value.trim() !== "") {
      onSendMessage(value);
      setValue('');
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter' && !isComposing) {
      sendToggle();
    }
  };

  const handleComposition = (e: any) => {
    if (e.type === 'compositionstart') {
      setComposing(true);
    } else if (e.type === 'compositionend') {
      setComposing(false);
    }
  };

  return isChatting ? (
    <Bottom>
      <Chatinput 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
        onCompositionStart={handleComposition}
        onCompositionEnd={handleComposition}
        placeholder="채팅을 입력해주세요."
      />
      <StyledQuitButton onClick={onQuit}><QuitIcon width={22} height={22} /></StyledQuitButton>
    </Bottom>
  ) : (
    <StartButton onClick={onStartChat} />
  )
};

export default Button;
