'use client'

import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import BoardList from '../components/BoardList'
import * as L from '../styles/Layout'
import { Board } from '../types/Board'

export default function Page() {
  const [boardList, setBoardList] = useState<Board[]>([])

  useEffect(() => {
    const fetchBoardList = async () => {
      const response = await axios
        .get(`${process.env.NEXT_PUBLIC_HTTP_TYPE}://${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/board`)
        .then((res) => res.data)
      setBoardList(response)
    }

    fetchBoardList()
  }, [])

  return (
    <L.Main>
      <Link href={'/board/submit'} className="rounded-full border py-2 px-5 border-slate-500 place-items-end">
        작성하기
      </Link>
      <BoardList boardList={boardList} />
    </L.Main>
  )
}
