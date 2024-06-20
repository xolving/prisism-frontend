"use client"

import { Main } from "@/app/styles/Layout"
import axios from "axios"

export default function page ({ params }: { params: { slug: string } }){
    const board = axios.get(
        `${process.env.NEXT_PUBLIC_HTTP_TYPE}://${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/board/${params.slug}`
    ).then((res) => res.data)

    return (
        <Main>
            {board.then(response => response.content)}
        </Main>
    )
}