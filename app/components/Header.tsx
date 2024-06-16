"use client"

import Link from "next/link";
import styled from "styled-components";
import Logo from "./icons/Logo";

const StyledHeader = styled.header`
    display: flex;
    padding-left: 25px;
    padding: 18px 50px 18px 50px;
    border-bottom: 1px;
    border-bottom: 1px solid #2f2f2f;
`

export default function Header(){
    return (
        <StyledHeader>
            <Link href={"/"}><Logo width={50} height={50} /></Link>
            <span className="flex gap-x-8 justify-center items-center mx-12 text-lg font-medium">
                <Link href={"/"}>공지사항</Link>
                <Link href={"/"}>문의하기</Link>
                <Link href={"/"}>게시판</Link>
            </span>
        </StyledHeader>
    )
}