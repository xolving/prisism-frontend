import styled from 'styled-components'
import { Board } from '../types/Board'
import { toKoreanDate } from '../util/korean-date'

const StyledContent = styled.a`
    border: 1px solid var(--background-secondary-rgb);
    border-radius: 15px;
    padding: 10px;
    width: 100vh;
    padding-left: 35px;
    padding-right: 20px;
    background-color: #262626;
    display: flex;
`

export default function BoardList({ boardList }: { boardList: Board[] }){
    return (
        <div className='grid gap-y-2 mt-10'>
            {boardList?.map((board, index) => 
                <StyledContent key={index} href={`/board/${board.id}`}>
                    <h1>{board.title}</h1>
                    <h1 className='ml-auto'>{`${toKoreanDate(board.createdAt)}`}</h1>
                </StyledContent>
            )}
        </div>
    )
}