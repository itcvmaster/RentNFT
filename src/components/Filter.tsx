import styled from 'styled-components';
import { useState } from 'react';

import Selector from './Selector';
import Search from './Search';
import { CollateralSelectNames, StateSelectNames, SortSelectNames, PriceRangeSelectNames } from "utils";

const Filter: React.FC<any> = (props: any) => {
  const { data, filterData, setFilterData } = props;
  const [search, setSearch] = useState("");

  return (
    <Container>
      <Search
        setSearch={setSearch}
      />
      <FilterBar>
        <Selector
          selects={CollateralSelectNames}
          text='Collateral type'
          value='All'
        />
        <Selector
          selects={StateSelectNames}
          text='State'
          value='All'
        />
        <Selector
          selects={PriceRangeSelectNames}
          text='Price Range'
          value='All'
        />
        <Selector
          selects={SortSelectNames}
          text='Sort'
          value=''
        />
      </FilterBar>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  padding-top: 50px;
  gap: 20px;
`;

const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export default Filter;