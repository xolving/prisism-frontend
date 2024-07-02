'use client'

import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  padding: 8px 50px;
  border-bottom: 1px solid var(--border-rgb);
  background-color: #0db458;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export default function Notice() {
  return (
    <StyledHeader>
      <h1>현재 프리시즘은 베타 서비스입니다.</h1>
    </StyledHeader>
  )
}
