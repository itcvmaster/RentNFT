import styled from "styled-components";

import { mobileSmall } from "utils";

const Search: React.FC<any> = (props: any) => {
  return (
    <Container>
      <Title>Search</Title>
      <Input
        placeholder="Search ..."
        onChange={(e) => props.setSearch(e.target.value)}
      />
    </Container>
  );
}

const Container = styled.div`
  display: block;
`
const Input = styled.input`
  box-sizing: border-box;
  width: 400px;
  ${mobileSmall} {
    width: 220px;
  }
  height: 36px;
  border: 1px solid var(--shade-6);
  box-sizing: border-box;
  border-radius: 18px;
  background: transparent;
  color: var(--shade-2);
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  font-weight: 400;
  font-size: 14px;
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: var(--shade-2);
  padding-left: 18px;
`;

export default Search;