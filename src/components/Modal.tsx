import styled from 'styled-components';
import { Icon15x15 } from './Icon';

const Modal: React.FC<any> = (props) => {
  return (
    <Container>
      <Title>
        <Span>{props.title}</Span>
        <Icon15x15 src="./icons/close.svg" onClick={props.onClose} />
      </Title>
      {props.content}
    </Container>
  );
}

export default Modal;

const Container = styled.div`
 
`;

const Title = styled.div`

`;

const Span = styled.span`

`;