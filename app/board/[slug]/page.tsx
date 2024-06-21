'use client'

import Hr from '@/app/components/Hr'
import SubTitle from '@/app/components/SubTitle'
import Title from '@/app/components/Title'
import { ContentLayout } from '@/app/styles/Layout'
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
    <ContentLayout>
      <Title>{board?.title}</Title>
      <SubTitle>{toKoreanDate(board?.createdAt)}</SubTitle>
      <Hr />
      <Textarea>{board?.content.replace(/<br\s*\/?>/gim, '\n')}</Textarea>
    </ContentLayout>
  )
}
