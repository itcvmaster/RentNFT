import styled from "styled-components";

import { mobileSmall } from 'utils';
import Button from "components/Button";

const ConfirmWindow: React.FC<any> = (props) => {
  return (
    <Container>
      <Card>
        <Text>{props.text}</Text>
        <Button 
          text="OK"
          onClick={props.onClick}
        />
      </Card>
    </Container>
  )
}

export default ConfirmWindow;

const Container = styled.div`
  width: 400px;
  max-height: 200px;
  display: block;
  box-shadow: 0 8px 36px #e4e4e4;
  background: var(--shade-8);
  overflow: auto;
  border-radius: 32px;
  ${mobileSmall} {
    width: 100%;
  }
`;
const Text = styled.div`
  font-weight: 400;
  font-size: 20px;
  color: var(--shade-4);
`;
const Card = styled.div`
  padding: 30px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`
