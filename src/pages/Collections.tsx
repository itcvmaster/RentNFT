import styled from 'styled-components';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Filter, DefaultCard } from 'components';

const Collections: React.FC<any> = () => {
  const data = useSelector((state: any) => state.marketNFTs);
  const navigate = useNavigate();
  const collectionData = useMemo(() => {
    let newsArr = [];
    newsArr.push(data[0])
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < newsArr.length; j++) {
        if (newsArr[j].author === data[i].author) break;
        if (j === newsArr.length - 1) newsArr.push(data[i]);
      }
    }
    return newsArr;
  }, [data])
  const [searchData, setSearchData] = useState(data);
  const [filterData, setFilterData] = useState(collectionData);
  return (
    <Container>
      <Filter
        data={collectionData}
        searchData={searchData}
        setSearchData={setSearchData}
        setFilterData={setFilterData}
        isMarket={false}
      />
      <Content>
        {filterData.map((_data, index) => (
          <DefaultCard
            key={index}
            data={_data}
            action="collections"
            onClick={() => navigate("/Collections/" + _data.author)}
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
export default Collections;