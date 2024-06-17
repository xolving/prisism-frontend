'use client'

import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import UserLogo from "./icons/UserLogo";

const StyledPlayers = styled.div`
  padding: 10px;
  text-align: center;
  display: flex;
  column-gap: 12px;
`;

export default function CurrentPlayer() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchCount = async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_HTTP_TYPE}://${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/room/player`)
      setCount(response.data.count)
    } 
    fetchCount()
  }, [])

  return (
    <StyledPlayers>
      <UserLogo width={24} height={24} />
      <Suspense>{count}</Suspense>
    </StyledPlayers>
  )
}
