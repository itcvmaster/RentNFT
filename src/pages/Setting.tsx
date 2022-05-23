import styled from "styled-components";

const Setting: React.FC<any> = (props) => {
  return (
    <Container>
      <Content>
        <Img src = "icons/Vacation-Palette-Nft.jpg" />
        <TextGroup>

        </TextGroup>
      </Content>    
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  
`
const Content = styled.div`
  display: flex;
  padding: 65px;
`
const Img = styled.img`
  width: 600px;
  height: 600px; 
`
const TextGroup = styled.div`
  
`

export default Setting;