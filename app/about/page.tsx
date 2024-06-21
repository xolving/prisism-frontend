import Link from 'next/link'

export default function page() {
  return (
    <main className="p-20 grid gap-y-10">
      <div>
        <h1 className="text-3xl pb-2 font-medium">소개</h1>
        <p>프리시즘은 채팅을 저장하지 않으며 또한 아무런 정보도 수집하지 않습니다.</p>
      </div>
      <div>
        <h1 className="text-3xl pb-2 font-medium">디스코드</h1>
        <p>프리시즘에 버그가 있거나 건의사항이 있다면 디스코드 서버에 올려주세요.</p>
        <Link className=" text-blue-500" href={'https://discord.gg/FuWPb5pP'}>
          https://discord.gg/FuWPb5pP
        </Link>
      </div>
    </main>
  )
}
