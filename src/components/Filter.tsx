import styled from 'styled-components';

import Selector from './Selector';
import { CollateralSelectNames, StateSelectNames, SortSelectNames, PriceRangeSelectNames } from "utils";

const Filter: React.FC<any> = (props: any) => {

  return (
    <Container>
      <Content1>
        <Selector 
          selects = {CollateralSelectNames} 
          text = 'Collateral type' 
          value = 'All' 
        />  
        <Selector
          selects = {StateSelectNames} 
          text = 'State' 
          value = 'All' 
        />  
        <Selector
          selects = {PriceRangeSelectNames}
          text = 'Price Range' 
          value = 'All' 
        />
      </Content1>  
      <Content2>
        <Selector
          selects = {SortSelectNames} 
          text = 'Sort' 
          value = '' 
        />
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