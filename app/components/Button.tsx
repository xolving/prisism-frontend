import React, { useState } from "react";
import styled from "styled-components";

const Chatsend = styled.button`
  width: 42vw;
  height: 5vh;
  background-color: #2A2A2A;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  display: block;
  vertical-align: middle;
  border: solid #434242;
  border-radius: 10px;
`;

const Chatinput = styled.input`
  width: 35vw;
  height: 5vh;
  background-color: #2A2A2A;
  text-align: left;
  margin-top: 20px;
  display: block;
  vertical-align: middle;
  border: solid #434242;
  border-radius: 10px;
`;

const Sendbutton = styled.button`
  width: 6vw;
  height: 5vh;
  background-color: #2A2A2A;
  text-align: center;
  margin-left: 600px;
  margin-top: -47px;
  display: block;
  vertical-align: middle;
  border: solid #434242;
  border-radius: 10px;
`;

const between = styled.div`
  margin-left: 10px;
`

const Button = ({ onSendMessage }: { onSendMessage: any }) => {
  const [value, setValue] = useState('');

  const sendToggle = () => {
    if (value.trim() !== "") {
      onSendMessage(value);
      setValue('');
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      sendToggle();
    }
  };

  return (
    <div>
      <Chatinput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <Sendbutton onClick={sendToggle}>보내기</Sendbutton>
    </div>
  );
};

export default Button;
