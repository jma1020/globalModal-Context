import React, { createContext } from 'react';
import { ModalStateType, ModalDispatchType } from './type';

export const ModalState = createContext<ModalStateType>({
  isModal: false,
  component: null,
});

export const ModalDispatch = createContext<ModalDispatchType>({
  open: () => {},
  close: () => {},
});
