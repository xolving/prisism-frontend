'use client'

import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Button from "./components/Button";

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

export default function Home() {
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory]);

  const handleSendMessage = (message: string) => {
    setChatHistory(prevHistory => [...prevHistory, { message }]);
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
          <div ref={chatEndRef} />
        </Chattab>
        <Pad2 />
        <Button onSendMessage={handleSendMessage} />
      </Main> 
    </div>
  );
}