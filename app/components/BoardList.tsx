import styled from 'styled-components'
import { Board } from '../types/Board'
import { toKoreanDate } from '../util/korean-date'

const StyledContent = styled.a`
  border: 1px solid var(--background-secondary-rgb);
  border-radius: 15px;
  height: 150px;
  padding: 20px;
  background-color: #262626;
`

export default function BoardList({ boardList }: { boardList: Board[] }) {
  return (
    <div className="grid mt-10 grid-cols-3 gap-4">
      {boardList?.map((board, index) => (
        <StyledContent key={index} href={`/board/${board.id}`}>
          <p className="ml-auto">{`${toKoreanDate(board.createdAt)}`}</p>
          <p className="text-lg">{board.title}</p>
        </StyledContent>
      ))}
    </div>
  )
}
