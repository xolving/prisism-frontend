'use client'

import { Icon } from '@iconify/react'
import axios from 'axios'
import { Suspense } from 'react'
import styled from 'styled-components'
import useSWR from 'swr'

const StyledPlayers = styled.div`
  padding: 10px;
  text-align: center;
  display: flex;
  column-gap: 12px;
  align-items: center;

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
      <Icon icon="material-symbols:user-attributes" width={30} />
      <Suspense>{data ?? 0}</Suspense>
    </StyledPlayers>
  )
}
