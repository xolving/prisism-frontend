'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import ArtistList from '../components/ArtistList'
import NovelList from '../components/NovelList'
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
    <main className="mx-10">
      <NovelList boardList={boardList} />
      <ArtistList boardList={boardList} />
    </main>
  )
}
