import React from "react";
import styled from "styled-components";

const Quitbutton= styled.button`
  width: 6vw;
  height: 5vh;
  background-color: #2A2A2A;
  text-align: center;
  margin-left: 663px;
  display: block;
  vertical-align: middle;
  border: solid #434242;
  border-radius: 10px;
`;

const Quit = ({ onQuit, onChatStart }: { onQuit: () => void, onChatStart: () => void }) => {
  const handleQuit = () => {
    onQuit();
    onChatStart();
  };

  return(
    <div>
        <Quitbutton onClick={handleQuit}>종료하기</Quitbutton>
    </div>

  ); 
};

export default Quit;
