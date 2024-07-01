'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  padding: 15px 50px;
  border-bottom: 1px solid var(--border-rgb);

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Menu = styled.span`
  display: flex;
  column-gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-right: 3rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 400;
`

const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  border-radius: 20px;
  border: 1px solid #434343;
  padding: 8px 20px;
  font-size: 15px;
  height: 100%;
`

const IconList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  border-radius: 20px;
  border: 1px solid #434343;
  padding: 8px 20px;
  font-size: 15px;
  height: 100%;
  column-gap: 15px;
`

const RightContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  column-gap: 8px;
`

export default function Header() {
  return (
    <StyledHeader>
      <Menu>
        <Link href={'/'} className="flex items-center gap-x-2">
          <Icon icon="material-symbols:family-link-outline-rounded" width={22} />
          <p>랜덤채팅</p>
        </Link>
        <Link href={'/board'} className="flex items-center gap-x-2">
          <Icon icon="material-symbols:note-stack-outline" width={22} />
          <p>게시판</p>
        </Link>
        <Link href={'/novel'} className="flex items-center gap-x-2">
          <Icon icon="material-symbols:book-5-outline-rounded" width={22} />
          <p>만화</p>
        </Link>
        <Link href={'/support'} className="flex items-center gap-x-2">
          <Icon icon="lucide:coins" width={22} />
          <p>서포트</p>
        </Link>
      </Menu>
      <RightContent>
        <IconList>
          <Link href={process.env.NEXT_PUBLIC_DISCORD_LINK ?? ''}>
            <Icon icon="ic:baseline-discord" width={22} />
          </Link>
          <Link href={process.env.NEXT_PUBLIC_GITHUB_LINK ?? ''}>
            <Icon icon="fa6-brands:github" width={18} />
          </Link>
        </IconList>
        <Link href={'/auth'}>
          <LoginButton>
            <p>로그인</p>
            <p>・</p>
            <p>회원가입</p>
          </LoginButton>
        </Link>
      </RightContent>
    </StyledHeader>
  )
}
