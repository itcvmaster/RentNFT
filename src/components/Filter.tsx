import styled from 'styled-components';

import Selector from './Selector';

const Filter: React.FC<any> = (props: any) => {

  return (
    <Container>
      <Content1>
        <Selector  text = 'Collateral type' />  
        <Selector  text = 'State' />  
        <Selector  text = 'Price Range' /> 
      </Content1>  
      <Content2>
        <Selector  text = 'Sort' />
      </Content2>  
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
  padding-top: 48px;
`;

const Content1 = styled.div`
  display: flex;
  gap: 24px;
`;

const Content2 = styled.div`
  display: flex;
`;

export default Filter;