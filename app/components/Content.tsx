import styled from "styled-components"
import { Board } from "../types/Board"

const StyledContent = styled.div`
`

export default function Content({ board }: { board: Board }){
    return (
        <StyledContent>
            <h1 className="text-xl">{board.title}</h1>
            <p>{board.content}</p>
        </StyledContent>
    )
}