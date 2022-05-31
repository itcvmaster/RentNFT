import styled from 'styled-components';

import { Filter, CollectionCard } from 'components';
import testData from '../utils/testData.json';

const Collections: React.FC<any> = () => {
  return (
    <Container>
      <Filter />
      <Content>
        {testData.map((data, index) => (
          <CollectionCard
            key={index}
            imagePath={data.imagePath}
            author={data.author}
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  display: grid;
  gap: 30px;
  padding: 10px;
`
export default Collections;