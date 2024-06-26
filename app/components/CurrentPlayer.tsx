'use client'

import axios from 'axios'
import { Suspense } from 'react'
import styled from 'styled-components'
import useSWR from 'swr'
import UserLogo from './icons/UserLogo'

const StyledPlayers = styled.div`
  padding: 10px;
  text-align: center;
  display: flex;
  column-gap: 12px;

  @media screen and (max-width: 768px) {
    position: fixed;
  }
`

export default function CurrentPlayer() {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data.count)
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_HTTP_TYPE}://${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/room/player`,
    fetcher,
    { refreshInterval: 10000 },
  )

  return (
    <StyledPlayers>
      <UserLogo width={24} height={24} />
      <Suspense>{data}</Suspense>
    </StyledPlayers>
  )
}
