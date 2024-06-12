import styled from "styled-components";

export const ModalBackdrop = styled.div<{
  $backdrop: number;
  closeModalToBackdrop: boolean;
  $isBlur: boolean;
}>`
  background: rgba(0, 0, 0, ${(props) => props.$backdrop});
  cursor: ${(props) => (props.closeModalToBackdrop ? "pointer" : "default")};
  backdrop-filter: ${(props) => (props.$isBlur ? "blur(10px)" : "none")};

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 9999;
`;
