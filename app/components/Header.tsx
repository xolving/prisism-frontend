"use client"

import Link from "next/link";
import styled from "styled-components";
import Logo from "./icons/Logo";

const StyledHeader = styled.header`
    display: flex;
    padding-left: 25px;
    padding: 8px 15px 8px 15px;
    border-bottom: 1px;
    border-bottom: 1px solid #2f2f2f;
`

export default function Header(){
    return (
        <StyledHeader>
            <Link href={"/"}><Logo width={125} height={50} /></Link>
        </StyledHeader>
    )
}