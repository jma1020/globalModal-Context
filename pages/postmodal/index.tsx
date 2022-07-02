import React, { useContext } from 'react';
import ModalProvider from '../../StoreContext/Modal/Provider';
import { ModalDispatch, ModalState } from '../../StoreContext/Modal/Context';
import styled from 'styled-components';
import Test from '../../components/test';

const PostPage = () => {
  const { open } = useContext(ModalDispatch);
  const state = useContext(ModalState);
  console.log(open);
  console.log(state);
  return (
    <ModalProvider>
      <Container>
        <h1>여기는 Post 페이지이다</h1>
        <Button onClick={() => open(<h1>이거는 post페이지</h1>)}>
          모달 클릭 창
        </Button>
      </Container>
      <Test />
    </ModalProvider>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 200px;
  height: 100px;
  background-color: yellow;
  border-radius: 6px;
  cursor: pointer;
`;

export default PostPage;
