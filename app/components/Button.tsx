import { useState } from "react";
import styled from "styled-components";

const Chatinput = styled.input`
  width: 35vw;
  height: 5vh;
  background-color: #2A2A2A;
  text-align: left;
  vertical-align: middle;
  border: solid #434242;
  border-radius: 10px;
`;

const Sendbutton = styled.button`
  width: 6vw;
  height: 5vh;
  background-color: #2A2A2A;
  text-align: center;
  vertical-align: middle;
  border: solid #434242;
  border-radius: 10px;
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
    <div className="flex gap-x-5 mt-4">
      <Chatinput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
        onCompositionStart={handleComposition}
        onCompositionEnd={handleComposition}
      />
      <Sendbutton onClick={sendToggle}>보내기</Sendbutton>
    </div>
  );
};

export default Button;
