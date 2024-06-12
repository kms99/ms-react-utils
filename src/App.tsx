import React from "react";
import ModalProvider from "./libs/modal/ModalProvider";
import ModalOpenButton from "./libs/modal/ModalOpenButton";
import ModalContainer from "./libs/modal/ModalContainer";
import ModalCloseButton from "./libs/modal/ModalCloseButton";

function App() {
  return (
    <div>
      <ModalProvider>
        <ModalOpenButton>열기</ModalOpenButton>
        <ModalContainer>
          <div>
            <ModalCloseButton>닫기</ModalCloseButton>
          </div>
        </ModalContainer>
      </ModalProvider>
    </div>
  );
}

export default App;
