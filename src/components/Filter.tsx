import styled from 'styled-components';
import { useState, useEffect } from 'react';

import Selector from './Selector';
import Search from './Search';
import { CollateralSelectNames, StateSelectNames, SortSelectNames } from "utils";

const Filter: React.FC<any> = (props: any) => {
  const { data, searchData, setSearchData, setFilterData, isMarket } = props;
  const [search, setSearch] = useState("");
  const [collateral, setCollateral] = useState(CollateralSelectNames[0]);
  const [tokenState, setTokenState] = useState(StateSelectNames[0]);
  const [sort, setSort] = useState(SortSelectNames[0]);

  useEffect(() => {
    let tempArr: any = [];
    data.forEach((_data: any) => {
      if (_data.title.toLowerCase().includes(search.toLocaleLowerCase()) ||
        _data.author.toLowerCase().includes(search.toLocaleLowerCase()))
        tempArr.push(_data);
    })
    setSearchData(tempArr)
  }, [search, data, setSearchData])

  useEffect(() => {
    let collateralData: any = [];
    if (collateral === CollateralSelectNames[0]) collateralData = searchData;
    else if (collateral === CollateralSelectNames[1]) {
      searchData.forEach((_data: any) => {
        if (_data.collateralPrice > 0) collateralData.push(_data);
      })
    }
    else if (collateral === CollateralSelectNames[2]) {
      searchData.forEach((_data: any) => {
        if (_data.collateralPrice === 0) collateralData.push(_data);
      })
    }

    let stateData: any = [];
    if (tokenState === StateSelectNames[0]) stateData = collateralData;
    else if (tokenState === StateSelectNames[1]) {
      collateralData.forEach((_data: any) => {
        if (_data.state === StateSelectNames[1]) stateData.push(_data);
      })
    }
    else if (tokenState === StateSelectNames[2]) {
      collateralData.forEach((_data: any) => {
        if (_data.state === StateSelectNames[2]) stateData.push(_data);
      })
    }

    let sortData: any = [];
    stateData.forEach(
      (_data: any) => sortData.push(_data)
    )
    const ComparePrice = (property: string, key: boolean) => {
      return (a: any, b: any) => {
        let value1 = a[property];
        let value2 = b[property];
        return key ? value1 - value2 : value2 - value1;
      }
    }
    const CompareName = (property: string, key: boolean) => {
      return (a: any, b: any) => {
        let value1 = a[property].toUpperCase();
        let value2 = b[property].toUpperCase();
        let comparison = 0;
        if (value1 > value2) {
          comparison = key ? 1 : -1;
        } else if (value1 < value2) {
          comparison = key ? -1 : 1;
        }
        return comparison;
      }
    }
    if (sort === SortSelectNames[0]) sortData = stateData;
    else if (sort === SortSelectNames[1]) {
      let tempData: any = [];
      stateData.forEach(
        (_data: any) => tempData.push(_data)
      )
      sortData = tempData.reverse();
    }
    else if (sort === SortSelectNames[2]) sortData = sortData.sort(ComparePrice("dailyPrice", true));
    else if (sort === SortSelectNames[3]) sortData = sortData.sort(ComparePrice("dailyPrice", false));
    else if (sort === SortSelectNames[4]) sortData = sortData.sort(ComparePrice("collateralPrice", true));
    else if (sort === SortSelectNames[5]) sortData = sortData.sort(ComparePrice("collateralPrice", false));
    else if (sort === SortSelectNames[6])
      sortData = isMarket ?
        sortData.sort(CompareName("title", true)) :
        sortData.sort(CompareName("author", true));
    else if (sort === SortSelectNames[7])
      sortData = isMarket ?
        sortData.sort(CompareName("title", false)) :
        sortData.sort(CompareName("author", false));

    setFilterData(sortData);

  }, [collateral, tokenState, sort, searchData, setFilterData, isMarket])

  return (
    <Container>
      <Search
        setSearch={setSearch}
      />
      <FilterBar>
        {isMarket && <Selector
          selects={CollateralSelectNames}
          text="Collateral type"
          selectName={collateral}
          setSelectName={setCollateral}
          width="200px"
        />}
        {isMarket && <Selector
          selects={StateSelectNames}
          text="State"
          selectName={tokenState}
          setSelectName={setTokenState}
          width="200px"
        />}
        <Selector
          selects={isMarket ? SortSelectNames : SortSelectNames.slice(0, 2).concat(SortSelectNames.slice(SortSelectNames.length - 2))}
          text="Sort By"
          selectName={sort}
          setSelectName={setSort}
          width="250px"
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