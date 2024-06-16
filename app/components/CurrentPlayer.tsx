import styled from "styled-components";
import UserLogo from "./icons/UserLogo";

const StyledPlayers = styled.button`
  padding: 10px;
  background-color: #2A2A2A;
  text-align: center;
  border: solid #434242;
  border-radius: 10px;
  display: flex;
  column-gap: 2px;
`;

export default function CurrentPlayer() {
  return (
    <StyledPlayers>
      <UserLogo width={24} height={24} />
      <p>test</p>
    </StyledPlayers>
  )
}
