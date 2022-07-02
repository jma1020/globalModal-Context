import React, { useContext } from 'react';
import { ModalDispatch } from '../../StoreContext/Modal/Context';
import * as Styled from './styled';

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const { close } = useContext(ModalDispatch);
  return (
    <React.Fragment>
      <Styled.Background onClick={close} />
      <Styled.ModalBox>{children}</Styled.ModalBox>
    </React.Fragment>
  );
};

export default Modal;
