import { Icon } from '@iconify/react'
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
          <div className="grid p-3 w-full h-full">
            <div>
              <p className="text-xl">{board.title}</p>
            </div>
            <div className="flex mt-auto justify-start w-full">
              <div>
                <p>guest23582818</p>
                <p className="ml-auto">{`${toKoreanDate(board.createdAt)}`}</p>
              </div>
              <div className="ml-auto mt-auto flex items-center gap-x-2">
                <p>26</p>
                <Icon icon="material-symbols:favorite-outline-rounded" width={22} />
              </div>
            </div>
          </div>
        </StyledContent>
      ))}
    </div>
  )
}
