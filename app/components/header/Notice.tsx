"use client"

import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    padding: 10px;
    background-color: #0fbe6a;
    justify-content: center;
`

export default function Notice(){
    return (
        <StyledHeader>
            <p>🚧 현재 프리시즘는 베타 버전입니다 🚧</p>
        </StyledHeader>
    )
}