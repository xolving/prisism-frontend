import styled from "styled-components";

const StyledStartButton = styled.button`
  margin: 10px;
  height: 5vh;
  background-color: #313131;
  text-align: center;
  border: solid #434242;
  border-radius: 10px;
  margin-top: 1vh;
  padding: 10px;
  width: 100%;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    margin: 0;
    position: fixed;
    bottom: 0;  
  }
`;

interface StartButtonProps {
    onClick: () => void;
}

export default function StartButton({ onClick }: StartButtonProps){
    return <StyledStartButton onClick={onClick}>채팅 시작하기</StyledStartButton>;
};