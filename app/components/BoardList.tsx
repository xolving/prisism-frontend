import styled from "styled-components"
import { Board } from "../types/Board"

const StyledContent = styled.div`
    border: 1px solid var(--background-secondary-rgb);
    color: #eaeaea;
    border-radius: 10px;
    padding: 10px;
    width: 120vh;
    padding-left: 35px;
    background-color: #262626;
`

export default function BoardList({ boardList }: { boardList: Board[] }){
    return (
        <div className="grid gap-y-2 mt-10">
            {boardList?.map((board, index) => 
                <StyledContent key={index}>
                    <h1 className="text-xl">{board.title}</h1>
                </StyledContent>
            )}
        </div>
    )
}