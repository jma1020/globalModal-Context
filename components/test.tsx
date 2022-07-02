import { useContext } from 'react';
import styled from 'styled-components';
import { ModalDispatch } from '../StoreContext/Modal/Context';

const Test = () => {
  const { open } = useContext(ModalDispatch);
  console.log(open);

  return (
    <Container>
      <h1>이거는 컴포넌트 button</h1>
      <Button onClick={() => open(<h1>컴포넌트에서 modal 활성화</h1>)}>
        컴포넌트 버튼
      </Button>
    </Container>
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

export default Test;
