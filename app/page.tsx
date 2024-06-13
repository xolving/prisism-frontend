'use client'

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Quit from "./components/Quit";

interface ChatHistory {
  message: string;
}

const Main = styled.div`
  width: 58vw;
  height: 70vh;
  background-color: #2a2a2a;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  border-radius: 10px;
`;

const Chattab = styled.div`
  margin: 10px;
  height: 50vh;
  background-color: #313131;
  text-align: left;
  border: solid #434242;
  border-radius: 10px;
  overflow-y: auto;
  margin-top: 1vh;
  padding: 10px;
  width: 90%;
`;

const Header = styled.div`
  padding-top: 20px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 10vw;
  height: 5vh;
`;

const Home = () => {
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([]);
  const [isChatting, setChatting] = useState(false);
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }

    socket?.addEventListener('message', (ev: MessageEvent<any>) => {
      setChatHistory((prevHistory) => [...prevHistory, { message: JSON.parse(ev.data).status == undefined ? "상대방: " + JSON.parse(ev.data).message : JSON.parse(ev.data).status }]);
    })
  }, [socket]);

  const handleSendMessage = (message: string) => {
    setChatHistory((prevHistory) => [...prevHistory, { message: "나: " + message }]);
    socket?.send(JSON.stringify({ message: message }))
  };

  const handleQuit = () => {
    setChatHistory((prevHistory) => [...prevHistory, { message: "채팅이 종료되었습니다." }]);
    setChatting(false)
    socket?.close()
  };

  const handleChatStart = async () => {
    setChatting(true)
    setSocket(new WebSocket("ws://localhost:8080/ws/chat"))
  };

  socket?.addEventListener('close', () => {
    setChatting(false)
    socket?.close()
  })

  socket?.addEventListener('open', (ev: Event) => {
    setChatHistory([])
  })

  return (
    <div className="flex items-center justify-center h-screen">
      <Main className="max-w-4xl">
        <Header>
          <Logo src={"/underlive-logo.png"} alt="logo" />
          {isChatting && <Quit onQuit={handleQuit} isChatting={isChatting} onStartChat={handleChatStart} />}
        </Header>
        <Chattab>
          {chatHistory.map((chat, index) => (
            <p key={index}>{chat.message}</p>
          ))}
          <div ref={chatEndRef} />
        </Chattab>
        {isChatting && <Button onSendMessage={handleSendMessage} />}
        {!isChatting && <Quit onQuit={handleQuit} isChatting={isChatting} onStartChat={handleChatStart} />}
      </Main>
    </div>
  );
};

export default Home;
