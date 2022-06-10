import styled from 'styled-components';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { CollectionCard } from 'components';
import data from 'utils/testData.json';

const Collections: React.FC<any> = () => {
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
  }, [])
  return (
    <Container>
      <Content>
        {collectionData.map((_data, index) => (
          <CollectionCard
            key={index}
            imagePath={_data.imagePath}
            author={_data.author}
            onClick={() => navigate("/Collections/" + _data.author)}
          />
        ))}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: block;
  padding: 20px 20px 50px 20px;
  padding-bottom: 50px;
  box-sizing: border-box;
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export default Collections;