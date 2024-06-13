import { useState } from "react";
import styled from "styled-components";

const Chatinput = styled.input`
  margin: 10px;
  height: 5vh;
  background-color: #313131;
  text-align: left;
  border: solid #434242;
  border-radius: 10px;
  margin-top: 1vh;
  padding: 10px;
  width: 90%;
`;

const Button = ({ onSendMessage }: { onSendMessage: any }) => {
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

  return (
    <Chatinput
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleKeyPress}
      onCompositionStart={handleComposition}
      onCompositionEnd={handleComposition}
      placeholder="채팅을 입력해주세요."
    />
  );
};

export default Button;
