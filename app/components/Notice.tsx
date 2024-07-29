'use client'

import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  padding: 5px 50px;
  border-bottom: 1px solid var(--border-rgb);
  text-align: center;
`

export default function Notice() {
  return <StyledHeader>개발자가 거지여서 서버 닫음. me@fodo.dev</StyledHeader>
}
