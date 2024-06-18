"use client"

import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import Content from "../components/Content";
import { Board } from "../types/Board";

export default function Page(){
    const [boardList, setBoardList] = useState<Board[]>([])

    useEffect(() => {
        const fetchBoardList = async () => {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_HTTP_TYPE}://${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/board`).then((res) => res.data)
            setBoardList(response)
        }

        fetchBoardList()
    }, [])

    return (
        <main>
            <Suspense>
                {boardList.map((board, index) => 
                    <Content key={index} board={board} />)
                }
            </Suspense>
        </main>
    )
}