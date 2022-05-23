import styled from "styled-components";
import { useEffect, useRef, useState } from 'react';

import Icon from "./Icon";

const Selector: React.FC<any> = (props) => {

  const defaultName: any = props.value;
  const selects: Array<any> = props.selects;
  let [opened, setOpened] = useState(false);
  let [selectName, setSelectName] = useState(defaultName);

  const selector: any = useRef(null);
  const onClickOutside = (e: any) => {
    if (!selector || !selector?.current) return;
    
    if (!selector.current.contains(e.target)) {
      setOpened(false);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    }
  });

  const onSelect = (select: any) => {
    setOpened(!opened);
    setSelectName(select);
  }

  return (
    <Container ref={selector}>
      <Title> {props.text} </Title>
      <Default onClick={() => setOpened(!opened)} $isOpen={opened}>
        <Text>{selectName}</Text>
        {!opened && <Icon src="icons/select.svg" />}
      </Default>

      {opened &&
        <SelectList>
          {selects && selects.map((select: any) =>
            <Select
              onClick={() => onSelect(select)}
              key = {select}
            >
              <span>{select}</span>
            </Select>
          )}
        </SelectList>
      }
    </Container>  
  );
}

const Container = styled.div`
  user-select: none;
  display: block;
  width: 220px;
  box-sizing: border-box;
`

const Title = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: "#707A83";
  margin-left: 18px;
`;

const Default = styled.div<{$isOpen:boolean}>`
  z-index: 2;
  cursor: pointer;  
  display: flex;
  flex-direction: row;
  height: 36px;
  border: 1px solid #E8EBED;
  box-sizing: border-box;
  border-radius: 22px;
  background-color: transparent;
  color: #707A83;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  border-bottom-width: ${({$isOpen})=>$isOpen? "0px":"1px"};
  border-bottom-left-radius: ${({$isOpen})=>$isOpen? "0px":"18px"};
  border-bottom-right-radius: ${({$isOpen})=>$isOpen? "0px":"18px"};
`

const Text = styled.div`

`

const SelectList = styled.div`
  z-index: 2;
  position: absolute;
  width: 220px;
  height: 72px;
  display: block;
  box-sizing: border-box;
  background-color: #FFFFFF;  
  border: 1px solid #E8EBED;
  border-radius: 22px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
`

const Select = styled.div`
  cursor: pointer;  
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 36px;
  box-sizing: border-box;
  font-family: 'Pridi';
  color: #707A83;
  font-weight: 400;
  padding: 0 15px;
  gap: 10px;

  :hover {
    backdrop-filter: brightness(3);
  }
`

export default Selector;