import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Filter, MarketCard } from 'components';
import { useMemo, useState } from 'react';

const Market: React.FC<any> = () => {
  const data = useSelector((state: any) => state.marketNFTs);
  const id = useParams().id || "";
  const [searchData, setSearchData] = useState(data);
  const [filterData, setFilterData] = useState(searchData);

  const renderData = useMemo(() => {
    if (id === "") return filterData;
    else {
      let tempArr = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].author === id) tempArr.push(data[i]);
      }
      return tempArr;
    }
  }, [id, data, filterData])

  return (
    <Container>
      <Filter
        data={data}
        searchData={searchData}
        setSearchData={setSearchData}
        setFilterData={setFilterData}
        isMarket={true}
      />
      <Content>
        {renderData.map((_data: any, index: number) => (
          <MarketCard
            key={index}
            imagePath={_data.imagePath}
            title={_data.title}
            author={_data.author}
            maxDuration={_data.maxDuration}
            dailyPrice={_data.dailyPrice}
            collateralPrice={_data.collateralPrice}
            priceUnit={_data.priceUnit}
            lenderAdd={_data.lenderAdd}
            contractAdd={_data.contractAdd}
            state={_data.state}
            describe={_data.describe}
          />
        ))}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: block;
  padding: var(--padding);
  padding-bottom: 50px;
  box-sizing: border-box;
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default Market;