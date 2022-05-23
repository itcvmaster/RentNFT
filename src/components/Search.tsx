import styled from "styled-components";

const Search: React.FC<any> = () => {
  return (
    <Container>
      <Input placeholder='Search items, collections, and accounts' />
    </Container>
  );
}

const Container = styled.div`
  width: 500px;
`
const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 36px;
  padding: 10px 30px;
  background: var(--shade-7);
  border: 0;
  border-radius: var(--border-radius);
  font-weight: 400;
  font-size: 16px;
`;



export default Search;