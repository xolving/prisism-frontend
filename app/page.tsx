'use client'

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CurrentPlayer from "./components/CurrentPlayer";
import Button from "./components/form/ChatInput";

interface ChatHistory {
  message: string;
  sender: string;
}

const Main = styled.div`
  width: 58vw;
  height: 70vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    height: 100vh;
    width: 100vw;
    margin: 20px;
    border-radius: 0;
  }
`;

const ChatTab = styled.div`
  margin: 10px;
  height: 50vh;
  background-color: #313131;
  text-align: left;
  border: solid #434242;
  border-radius: 10px;
  overflow-y: auto;
  margin-top: 1vh;
  padding: 10px;
  width: 100%;
  align-content: end;

  @media screen and (max-width: 768px) {
    height: 70vh;
  }
`;

const UtilTab = styled.div`
  height: 68vh;
  margin: auto;
  align-items: center;
  color: white;
  border-radius: 10px;
  padding-left: 10px;

  @media screen and (max-width: 768px) {
    height: 100vh;
    width: 100vw;
    margin: 20px;
    border-radius: 0;
  }
`;

const Mobile = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export default function Page(){
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([]);
  const [isChatting, setChatting] = useState(false);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [chatHistory]);

  useEffect(() => {
    if (socket) {
      const handleIncomingMessage = (ev: MessageEvent<any>) => {
        const data = JSON.parse(ev.data);
        setChatHistory((prevHistory) => [
          ...prevHistory,
          data.status === undefined 
            ? { message: data.message, sender: "상대방" } 
            : { message: data.status, sender: "📣" }
        ]);
      };

      socket.addEventListener('message', handleIncomingMessage);

      return () => {
        socket.removeEventListener('message', handleIncomingMessage);
      };
    }
  }, [socket]);

  const handleSendMessage = (message: string) => {
    setChatHistory((prevHistory) => [...prevHistory, { message: message, sender: "나" }]);
    socket?.send(JSON.stringify({ message: message }));
  };

  const handleQuit = () => {
    setChatHistory((prevHistory) => [...prevHistory, { message: "채팅이 종료되었습니다.", sender: "📣" }]);
    setChatting(false);
    socket?.close();
  };

  const handleChatStart = async () => {
    setChatting(true);
    setSocket(new WebSocket(`wss://${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/ws/chat` ?? ""));
  };

  useEffect(() => {
    if (socket) {
      socket.addEventListener('close', () => {
        setChatting(false);
      });

      socket.addEventListener('open', () => {
        setChatHistory([]);
      });

      return () => {
        socket.close();
      };
    }
  }, [socket]);

  return (
    <div className="flex items-center justify-center">
      <div className="flex h-[90vh]">
        <Main>
          <ChatTab>
            {chatHistory.map((chat, index) => 
              <div key={index} className="block mb-3">
                <div className="bg-stone-800 px-3 py-2 inline-block rounded-xl">
                  <p className="text-sm dtext-slate-200">{chat.sender}</p>
                  <p>{chat.message}</p>
                </div>
              </div> 
            )}
            <div ref={chatEndRef} />
          </ChatTab>
          <Button onSendMessage={handleSendMessage} onStartChat={handleChatStart} isChatting={isChatting} onQuit={handleQuit} />
        </Main>
        <UtilTab>
          <CurrentPlayer />
        </UtilTab>
      </div>
    </div>
  );
};
