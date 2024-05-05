'use client'

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import logo from './underlive-logo.png'

const Main = styled.div`
  width:50vw;
  height: 70vh;
  background-color: #2A2A2A;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  vertical-align: middle;
  text-align: center;
  color: white;
  border-radius: 10px
`

const Chattab = styled.div`
width: 42vw;
height: 50vh;
background-color: #2A2A2A;
text-align: left;
margin-left: auto;
margin-right: auto;
margin-top: 60px;
margin-bottom: auto;
border: solid #434242;
border-radius: 10px;

`

const Pad = styled.div`
  height:120px;
`

const Pad2 = styled.div`
  height:10px;
`

const Pad3 = styled.div`
  height:15px;
`

const Logo = styled.img`
  width: 10vw;
  height: 5vh;
  margin-left: 4vw;
  margin-bottom: -5vh;
`
function Button(){
  const Chatsend = styled.button`
  width: 42vw;
  height: 5vh;
  background-color: #2A2A2A;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top:20px;
  display: block;
  vertical-align: middle;
  border: solid #434242;
  border-radius: 10px;
  `

  return(
    <div>
      <Chatsend>채팅 시작하기</Chatsend>
    </div>
  );
}

export default function Home() {
  return (
    <div>
    <Pad />
    <Main>
      <Pad3 />
      <Logo src={'/underlive-logo.png'} alt="logo" />
      <Chattab></Chattab>
      <Pad2 />a
      <Button />
    </Main>
    </div>
  );
}