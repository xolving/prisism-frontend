'use client'

import { Main } from "@/app/styles/Layout";
import axios from "axios";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import { ContentInput, TitleInput, UploadButton } from "./styled";

export default function page(){
  const onSubmit = (e: any) => {
    if(e.get("title").length == 0 || e.get("content").length == 0) toast.error("제목과 내용이 비어있으면 안됩니다.")
    else {
      axios.post(`${process.env.NEXT_PUBLIC_HTTP_TYPE}://${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/board`,
        { title: e.get("title"), content: e.get("content")})
      redirect("/board")
    }
  }

  const onPress = (e: any) => {
    if(e.keyCode == '13'){
      e.preventDefault(); 
    }
  }
  
  return (
    <Main>
      <form className="w-full h-5/6">
        <UploadButton type="submit" formAction={onSubmit}>업로드하기</UploadButton>
        <TitleInput placeholder="제목을 입력해주세요." type="text" name="title" onKeyDown={onPress}></TitleInput>
        <ContentInput placeholder="내용을 입력해주세요." name="content"></ContentInput>
      </form>
    </Main>
  )
}