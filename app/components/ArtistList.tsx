import { Icon } from '@iconify/react'
import Image from 'next/image'
import styled from 'styled-components'
import { Board } from '../types/Board'

const StyledContent = styled.a`
  border: 1px solid var(--background-secondary-rgb);
  border-radius: 15px;
  padding: 10px;
  background-color: #262626;
`

export default function ArtistList({ boardList }: { boardList: Board[] }) {
  const mocks = [
    {
      id: 5,
      nickname: '변스트',
    },
    {
      id: 5,
      nickname: '변구',
    },
    {
      id: 5,
      nickname: '변킹',
    },
    {
      id: 5,
      nickname: '변겸',
    },
    {
      id: 5,
      nickname: '변스트',
    },
    {
      id: 5,
      nickname: '변구',
    },
    {
      id: 5,
      nickname: '변킹',
    },
    {
      id: 5,
      nickname: '변겸',
    },
    {
      id: 5,
      nickname: '변스트',
    },
    {
      id: 5,
      nickname: '변구',
    },
    {
      id: 5,
      nickname: '변킹',
    },
    {
      id: 5,
      nickname: '변겸',
    },
  ]

  return (
    <main className="mt-8">
      <h1 className="text-2xl mb-5">작가 목록</h1>
      <div className="grid grid-cols-4 gap-4">
        {mocks?.map((board, index) => (
          <StyledContent key={index} href={`/board/${board.id}`}>
            <Image src={'/example.png'} alt="example" width={180} height={180} className="rounded-md pb-3" />
            <div className="grid w-full h-full">
              <div className="flex">
                <p className="text-xl">{board.nickname}</p>
                <div className="flex gap-x-2 ml-auto">
                  <p>26</p>
                  <Icon icon="material-symbols:favorite-outline-rounded" width={20} />
                </div>
              </div>
            </div>
          </StyledContent>
        ))}
      </div>
    </main>
  )
}
