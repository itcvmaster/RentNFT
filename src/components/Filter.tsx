import styled from 'styled-components';
import { useState, useEffect } from 'react';

import Selector from './Selector';
import Search from './Search';
import { CollateralSelectNames, StateSelectNames, SortSelectNames, PriceRangeSelectNames } from "utils";

const Filter: React.FC<any> = (props: any) => {
  const { data, searchData, setSearchData, setFilterData, isMarket } = props;
  const [search, setSearch] = useState("");
  const [collateral, setCollateral] = useState(CollateralSelectNames[0]);
  const [tokenState, setTokenState] = useState(StateSelectNames[0]);
  const [priceRange, setPriceRange] = useState(PriceRangeSelectNames[0]);
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

    let priceData: any = [];
    if (priceRange === PriceRangeSelectNames[0]) stateData.forEach(
      (_data: any) => priceData.push(_data)
    )

    let sortData: any = [];
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
    else if (sort === SortSelectNames[1]) sortData = stateData;
    else if (sort === SortSelectNames[2]) sortData = priceData.sort(ComparePrice("dailyPrice", true));
    else if (sort === SortSelectNames[3]) sortData = priceData.sort(ComparePrice("dailyPrice", false));
    else if (sort === SortSelectNames[4]) sortData = priceData.sort(ComparePrice("collateralPrice", true));
    else if (sort === SortSelectNames[5]) sortData = priceData.sort(ComparePrice("collateralPrice", false));
    else if (sort === SortSelectNames[6])
      sortData = isMarket ?
        priceData.sort(CompareName("title", true)) :
        priceData.sort(CompareName("author", true));
    else if (sort === SortSelectNames[7])
      sortData = isMarket ?
        priceData.sort(CompareName("title", false)) :
        priceData.sort(CompareName("author", false));

    setFilterData(sortData);

  }, [collateral, tokenState, priceRange, sort, searchData, setFilterData, isMarket])

  return (
    <Container>
      <Search
        setSearch={setSearch}
      />
      <FilterBar>
        <Selector
          selects={CollateralSelectNames}
          text='Collateral type'
          selectName={collateral}
          setSelectName={setCollateral}
        />
        <Selector
          selects={StateSelectNames}
          text='State'
          selectName={tokenState}
          setSelectName={setTokenState}
        />
        <Selector
          selects={PriceRangeSelectNames}
          text='Price Range'
          selectName={priceRange}
          setSelectName={setPriceRange}
        />
        <Selector
          selects={SortSelectNames}
          text='Sort By'
          selectName={sort}
          setSelectName={setSort}
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