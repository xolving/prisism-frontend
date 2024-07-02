import styled from 'styled-components'
import { Board } from '../types/Board'

const StyledContent = styled.a`
  border: 1px solid var(--background-secondary-rgb);
  border-radius: 10px;
  padding: 10px;
  background-color: #262626;
  display: block;
  margin-bottom: 10px;
`

export default function NovelList({ boardList }: { boardList: Board[] }) {
  const mocks = [
    {
      id: 5,
      title: '일어나보니 영애의 침대에 누워있었다.',
    },
    {
      id: 5,
      title: '변구와 스타크래프트 데이트',
    },
    {
      id: 5,
      title: '항상 상태창이 머리 위에',
    },
    {
      id: 5,
      title: '전생에 나라를 구했더니 받은 능력은',
    },
  ]

  return (
    <div>
      <h1 className="text-2xl mb-5">최근에 올라온 만화</h1>
      {mocks?.map((board, index) => (
        <StyledContent key={index} href={`/board/${board.id}`}>
          <p>{board.title}</p>
        </StyledContent>
      ))}
    </div>
  )
}
