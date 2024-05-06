'use client'

import { useRef, useState } from "react";
import styled from "styled-components";

interface ChatHistory {
  message: string;
}

const Main = styled.div`
  width:50vw;
  height: 70vh;
  background-color: #2A2A2A;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  vertical-align: middle;
  text-align: center;
  color: white;
  border-radius: 10px;
`

const Chattab = styled.div`
  width: 42vw;
  height: 50vh;
  background-color: #2A2A2A;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  margin-bottom: auto;
  border: solid #434242;
  border-radius: 10px;
  padding: 20px;
  overflow-y: auto;
`

const Pad = styled.div`
  height:120px;
`

const Pad2 = styled.div`
  height:10px;
`

const Pad3 = styled.div`
  height:10px;
`

const Logo = styled.img`
  width: 10vw;
  height: 5vh;
  margin-left: 4vw;
  margin-bottom: -5vh;
  margin-top: 1vh;
`

const Chatsend = styled.button`
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

const Chatinput = styled.input`
  width: 35vw;
  height: 5vh;
  background-color: #2A2A2A;
  text-align: center;
  margin-left: 65px;
  margin-top:20px;
  display: block;
  vertical-align: middle;
  border: solid #434242;
  border-radius: 10px;
`

const Sendbutton = styled.button`
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

function Button({ onSendMessage }: { onSendMessage: any }) {
  const [isInput, setIsInput] = useState(false);
  const [isValue, setIsValue] = useState('');
  const chatRef = useRef(null);

  const handleInputToggle = () => {
    setIsInput(true);
  };

  const sendToggle = () => {
    if (isValue.trim() !== "") {
      onSendMessage(isValue);
      setIsValue('');
      scrollToBottom();
    }
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      sendToggle();
    }
  };

  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };

  return (
    <div>
      {isInput ? (
        <div>
          <Chatinput 
            value={isValue} 
            onChange={(e) => setIsValue(e.target.value)} 
            onKeyPress={handleKeyPress} 
          />
          <Sendbutton onClick={sendToggle}>보내기</Sendbutton>
        </div>
      ) : (
        <Chatsend onClick={handleInputToggle}>채팅 시작하기</Chatsend>
      )}
    </div>
  );
}

export default function Home() {
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([]);

  const handleSendMessage = (message: any) => {
    setChatHistory(prevHistory => [...prevHistory, message]);
  };

  return (
    <div>
      <Pad />
      <Main>
        <Pad3 />
        <Logo src={'/underlive-logo.png'} alt="logo" />
        <Chattab>
          {chatHistory.map((chat, index) => (
            <p key={index}>{chat.message}</p>
          ))}
        </Chattab>
        <Pad2 />
        <Button onSendMessage={handleSendMessage} />
      </Main> 
    </div>
  );
}