'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { Fa6BrandsDiscord, Fa6BrandsGithub } from './icons/Logo'

const StyledHeader = styled.header`
  display: flex;
  padding: 15px 50px;
  border-bottom: 1px solid #2f2f2f;

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
        <Link href={'/'}>랜덤채팅</Link>
        <Link href={'/board'}>게시판</Link>
      </Menu>
      <RightContent>
        <IconList>
          <Link href={process.env.NEXT_PUBLIC_DISCORD_LINK ?? ''}>
            <Fa6BrandsDiscord />
          </Link>
          <Link href={process.env.NEXT_PUBLIC_GITHUB_LINK ?? ''}>
            <Fa6BrandsGithub />
          </Link>
        </IconList>
        <LoginButton>
          <p>로그인</p>
          <p>・</p>
          <p>회원가입</p>
        </LoginButton>
      </RightContent>
    </StyledHeader>
  )
}
