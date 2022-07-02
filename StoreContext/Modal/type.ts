import React from 'react';

export interface ModalStateType {
  isModal: boolean;
  component: React.ReactNode;
}

export interface ModalDispatchType {
  open: (component: React.ReactNode) => void;
  close: () => void;
}
