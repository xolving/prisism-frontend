'use client'

import { useEffect, useRef, useState } from 'react'
import CurrentPlayer from './components/CurrentPlayer'
import Button from './components/form/ChatInput'
import * as R from './styles/Random'
import { ChatHistory } from './types/ChatHistory'

export default function Page() {
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([])
  const [isChatting, setChatting] = useState(false)
  const [socket, setSocket] = useState<WebSocket>()
  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'auto' })
    }
  }, [chatHistory])

  useEffect(() => {
    if (socket) {
      const handleIncomingMessage = (ev: MessageEvent<any>) => {
        const data = JSON.parse(ev.data)

        if (data.status !== undefined && data.status !== null) {
          setChatHistory((prevHistory) => [...prevHistory, { message: data.status, sender: '📣' }])
        } else if (data.message !== undefined && data.message !== null) {
          setChatHistory((prevHistory) => [...prevHistory, { message: data.message, sender: '상대방' }])
        }
      }

      setInterval(() => {
        socket.send(JSON.stringify({ ping: 'ping' }))
      }, 10000)

      socket.addEventListener('message', handleIncomingMessage)

      return () => {
        socket.removeEventListener('message', handleIncomingMessage)
      }
    }
  }, [socket])

  const handleSendMessage = (message: string) => {
    if (message.length < 50) {
      setChatHistory((prevHistory) => [...prevHistory, { message: message, sender: '나' }])
      socket?.send(JSON.stringify({ message: message }))
    } else {
      setChatHistory((prevHistory) => [...prevHistory, { message: '50자 이하로 작성해주세요.', sender: '📣' }])
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
      <div className="flex h-[90vh]">
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
    </div>
  )
}
