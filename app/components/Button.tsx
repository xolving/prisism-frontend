import { useRef, useState } from "react";
import styled from "styled-components";

export const Chatsend = styled.button`
  width: 42vw;
  height: 5vh;
  background-color: #2A2A2A;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top:20px;
  display: block;
  vertical-align: middle;
  border: solid #434242;
  border-radius: 10px;
`

export const Chatinput = styled.input`
  width: 35vw;
  height: 5vh;
  background-color: #2A2A2A;
  text-align: left;
  margin-left: 65px;
  margin-top:20px;
  display: block;
  vertical-align: middle;
  border: solid #434242;
  border-radius: 10px;
`

export const Sendbutton = styled.button`
  width: 6vw;
  height: 5vh;
  background-color: #2A2A2A;
  text-align: center;
  margin-left: 663px;
  margin-top:-47px;
  display: block;
  vertical-align: middle;
  border: solid #434242;
  border-radius: 10px;
`

export default function Button({ onSendMessage }: { onSendMessage: any }) {
    const [isInput, setIsInput] = useState(false);
    const [value, setValue] = useState('');
    const chatRef = useRef<HTMLUListElement>(null);
  
    const handleInputToggle = () => {
      setIsInput(true);
    };
  
    const sendToggle = () => {
      if (value.trim() !== "") {
        onSendMessage(value);
        setValue('');
        scrollToBottom();
      }
    }
  
    const handleKeyPress = (e: any) => {
      if (e.key === 'Enter') {
        sendToggle();
      }
    };
  
    return (
      <div>
        {isInput ? (
          <div>
            <Chatinput
              value={value} 
              onChange={(e) => setValue(e.target.value)} 
              onKeyDown={handleKeyPress}
            />
            <Sendbutton onClick={sendToggle}>보내기</Sendbutton>
          </div>
        ) : (
          <Chatsend onClick={handleInputToggle}>채팅 시작하기</Chatsend>
        )}
      </div>
    );
  }