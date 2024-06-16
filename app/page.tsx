'use client'

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Quit from "./components/Quit";

interface ChatHistory {
  message: string;
  sender: string;
}

const Main = styled.div`
  width: 90vw;
  height: 100vh;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    height: 70vh;
    width: 58vw;
    margin: auto;
  }
`;

const Chattab = styled.div`
  margin: 10px;
  height: 70vh;
  background-color: #313131;
  text-align: left;
  border: solid #434242;
  border-radius: 10px;
  overflow-y: auto;
  margin-top: 1vh;
  padding: 10px;
  width: 90%;

  @media screen and (min-width: 768px) {
    height: 50vh;
  }
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
      setChatHistory((prevHistory) => [...prevHistory, JSON.parse(ev.data).status == undefined ? 
        {
          message: JSON.parse(ev.data).message,
          sender: "상대방"
        } 
        : {
          message: JSON.parse(ev.data).status,
          sender: "📣"
        }  
      ])
      })
  }, [socket]);

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollTop = chatEndRef.current.scrollHeight;
    }
  };

  const handleSendMessage = (message: string) => {
    setChatHistory((prevHistory) => [...prevHistory, { message: message, sender: "나" }]);
    socket?.send(JSON.stringify({ message: message }))
  };

  const handleQuit = () => {
    setChatHistory((prevHistory) => [...prevHistory, { message: "채팅이 종료되었습니다.", sender: "📣" }]);
    setChatting(false)
    socket?.close()
  };

  const handleChatStart = async () => {
    setChatting(true)
    setSocket(new WebSocket(process.env.NEXT_PUBLIC_SERVER_ADDRESS ?? ""))
  };

  socket?.addEventListener('close', () => {
    setChatting(false)
    socket?.close()
  })

  socket?.addEventListener('open', (ev: Event) => {
    setChatHistory([])
  })

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-4xl flex h-[85vh]">
        <Main>
          <Chattab ref={chatEndRef}>
            {chatHistory.map((chat, index) => 
            <div key={index} className="block mb-3">
                <div className="bg-stone-800 px-3 py-2 inline-block rounded-xl">
                  <p className="text-sm text-slate-200">{chat.sender}</p>
                  <p>{chat.message}</p>
                </div>
            </div> 
            )}
          </Chattab>
          {isChatting && <Button onSendMessage={handleSendMessage} />}
          {!isChatting && <Quit onQuit={handleQuit} isChatting={isChatting} onStartChat={handleChatStart} />}
          {isChatting && <Quit onQuit={handleQuit} isChatting={isChatting} onStartChat={handleChatStart} />}
        </Main>
      </div>
    </div>
  );
};

export default Home;
