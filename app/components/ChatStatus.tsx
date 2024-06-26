'use client'

import styled from 'styled-components'

const StyledPlayers = styled.div`
  text-align: left;
  margin-bottom: 0.75rem;
  padding: 8px 12px;
  border-radius: 12px;
  background-color: #232323;
  border: 1px solid #424a47;
`

export default function ChatStatus({ isVisible }: { isVisible: boolean }) {
  return (
    <StyledPlayers className={isVisible ? 'inline-block' : 'hidden'}>
      <p>입력 중...</p>
    </StyledPlayers>
  )
}
