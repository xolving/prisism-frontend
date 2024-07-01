import Image from 'next/image'
import styled from 'styled-components'
import { Board } from '../types/Board'
import { toKoreanDate } from '../util/korean-date'

const StyledContent = styled.a`
  border: 1px solid var(--background-secondary-rgb);
  border-radius: 15px;
  padding: 10px;
  background-color: #262626;
  display: flex;
  column-gap: 10px;
`

export default function BoardList({ boardList }: { boardList: Board[] }) {
  return (
    <div className="grid mt-10 grid-cols-2 gap-4">
      {boardList?.map((board, index) => (
        <StyledContent key={index} href={`/board/${board.id}`}>
          <Image src={'/example.png'} alt="example" width={200} height={200} className="rounded-xl" />
          <div className="p-3">
            <p className="ml-auto">{`${toKoreanDate(board.createdAt)}`}</p>
            <p className="text-lg">{board.title}</p>
          </div>
        </StyledContent>
      ))}
    </div>
  )
}
