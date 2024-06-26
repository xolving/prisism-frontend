'use client'

import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import ChatStatus from './components/ChatStatus'
import CurrentPlayer from './components/CurrentPlayer'
import Button from './components/form/ChatInput'
import * as R from './styles/Random'
import { ChatHistory } from './types/ChatHistory'

export default function Page() {
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([])
  const [isChatting, setChatting] = useState(false)
  const [socket, setSocket] = useState<WebSocket>()
  const chatEndRef = useRef<HTMLDivElement>(null)
  const [isWriting, setWriting] = useState(false)

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'auto' })
    }
  }, [chatHistory])

  useEffect(() => {
    if (socket) {
      const handleIncomingMessage = (ev: MessageEvent<any>) => {
        const data = JSON.parse(ev.data)

        switch (data.type) {
          case 'JOIN':
            setChatHistory((prevHistory) => [...prevHistory, { message: '상대방이 들어왔습니다.', sender: '📣' }])
            break
          case 'EXIT':
            setChatHistory((prevHistory) => [...prevHistory, { message: '채팅이 종료되었습니다.', sender: '📣' }])
            break
          case 'WAIT':
            setChatHistory((prevHistory) => [...prevHistory, { message: '상대방을 기다리고 있습니다.', sender: '📣' }])
            break
          case 'WRITE':
            setWriting(true)
            setTimeout(() => {
              setWriting(false)
            }, 4000)
          case 'PING':
            break
          case 'MESSAGE':
            setChatHistory((prevHistory) => [...prevHistory, { message: data.content, sender: data.sender }])
            break
        }
      }

      setInterval(() => {
        if (socket.readyState === WebSocket.OPEN) {
          socket.send(JSON.stringify({ type: 'PING' }))
        }
      }, 10000)

      socket.addEventListener('message', handleIncomingMessage)

      return () => {
        socket.removeEventListener('message', handleIncomingMessage)
      }
    }
  }, [socket])

  const handleSendMessage = ({ type, content }: { type: string; content: string }) => {
    if (content.length < 50) {
      socket?.send(JSON.stringify({ type: type, content: content }))
    } else {
      toast.info('50자 이하로 작성해주세요.')
    }
  }

  const handleQuit = () => {
    setChatHistory((prevHistory) => [...prevHistory, { message: '채팅이 종료되었습니다.', sender: '📣' }])
    setChatting(false)
    socket?.close()
  }

  const handleChatStart = async () => {
    setChatting(true)
    setSocket(
      new WebSocket(`${process.env.NEXT_PUBLIC_SOCKET_TYPE}://${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/ws/chat`),
    )
  }

  useEffect(() => {
    if (socket) {
      socket.addEventListener('close', (ev: CloseEvent) => {
        setChatting(false)
      })

      socket.addEventListener('open', () => {
        setChatHistory([])
      })

      return () => {
        socket.close()
      }
    }
  }, [socket])

  return (
    <div className="flex items-center justify-center">
      <R.ChatMain>
        <R.ChatTabOrigin>
          <CurrentPlayer />
          <R.ChatTab>
            {chatHistory.map((chat, index) => (
              <div key={index} className="block mb-3">
                <R.Chat>
                  <p className="text-sm text-slate-200">{chat.sender}</p>
                  <p>{chat.message}</p>
                </R.Chat>
              </div>
            ))}
            <ChatStatus isVisible={isWriting} />
            <div ref={chatEndRef} />
          </R.ChatTab>
        </R.ChatTabOrigin>
        <Button
          onSendMessage={handleSendMessage}
          onStartChat={handleChatStart}
          isChatting={isChatting}
          onQuit={handleQuit}
        />
      </R.ChatMain>
    </div>
  )
}
