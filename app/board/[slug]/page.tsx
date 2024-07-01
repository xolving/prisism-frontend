'use client'

import Hr from '@/app/components/Hr'
import { toKoreanDate } from '@/app/util/korean-date'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Textarea } from './styled'

export default function Page({ params }: { params: { slug: string } }) {
  const [board, setBoard] = useState<any>()

  useEffect(() => {
    const fetchBoard = async () => {
      setBoard(
        await axios
          .get(`${process.env.NEXT_PUBLIC_HTTP_TYPE}://${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/board/${params.slug}`)
          .then((res) => res.data),
      )
    }

    fetchBoard()
  })

  return (
    <main className="w-[70%]">
      <h2 className="">{toKoreanDate(board?.createdAt)}</h2>
      <h1 className="text-3xl font-medium">{board?.title}</h1>
      <Hr />
      <Textarea>{board?.content.replace(/<br\s*\/?>/gim, '\n')}</Textarea>
    </main>
  )
}
