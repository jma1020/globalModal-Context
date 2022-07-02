import React, { Children, useCallback, useMemo, useState } from 'react';
import Modal from '../../components/Modal';
import { ModalState, ModalDispatch } from './Context';
import { ModalStateType, ModalDispatchType } from './type';

interface ModalProviderProps {
  children: React.ReactNode;
}

function ModalProvider({ children }: ModalProviderProps) {
  const [state, setState] = useState<ModalStateType>({
    isModal: false,
    component: null,
  });

  const open = (component: React.ReactNode) => {
    console.log('오픈입니다');
    setState((prev) => ({ ...prev, isModal: true, component }));
  };

  const close = () => {
    setState((prev) => ({ ...prev, isModal: false }));
  };

  return (
    <ModalState.Provider value={state}>
      <ModalDispatch.Provider value={{ open, close }}>
        {children}
        {state.isModal && <Modal>{state.component}</Modal>}
      </ModalDispatch.Provider>
    </ModalState.Provider>
  );
}

export default ModalProvider;
