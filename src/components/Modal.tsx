import styled from 'styled-components';
import { Icon30x30 } from './Icon';

const Modal: React.FC<any> = (props) => {
  return (
    <Container>
      <Card>
        <Title>
          <Span>{props.title}</Span>
          <Icon30x30 src="icons/close.svg" onClick={props.onClose} />
        </Title>
        {props.content}
      </Card>
    </Container>
  );
}

export default Modal;

const Container = styled.div`
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background-color: #FFFFFF;
  position: fixed;
  overflow: auto;
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #073A65;
  height: 40px;
  padding: 20px;
`;

const Span = styled.span`
  font-family: 'Pridi';
  font-weight: 400;
  font-size: 24px;
  color: #FFFFFF;
`;