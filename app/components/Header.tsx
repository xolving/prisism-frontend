'use client'

import Link from 'next/link';
import styled from 'styled-components';
import Logo from './icons/Logo';

const StyledHeader = styled.header`
    display: flex;
    padding-left: 25px;
    padding: 18px 50px 18px 50px;
    border-bottom: 1px;
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
    margin-left: 3rem;
    margin-right: 3rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 500;
`

export default function Header(){
    return (
        <StyledHeader>
            <Link href={'/'}><Logo width={50} height={50} /></Link>
            <Menu>
                <Link href={'/about'}>소개</Link>
                <Link href={'/board'}>게시판</Link>
            </Menu>
        </StyledHeader>
    )
}