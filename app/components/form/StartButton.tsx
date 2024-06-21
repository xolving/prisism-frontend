import styled from 'styled-components';

const StyledStartButton = styled.button`
  height: 5vh;
  background-color: #262626;
  text-align: center;
  border: 1px solid #313131;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    position: fixed;
    bottom: 0;  
    left: 0;
    right: 0;
    border-radius: 0;
    height: 6vh;
    z-index: 1000;
  }
`;

interface StartButtonProps {
    onClick: () => void;
}

export default function StartButton({ onClick }: StartButtonProps){
    return <StyledStartButton onClick={onClick}>채팅 시작하기</StyledStartButton>;
};