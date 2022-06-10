import styled from "styled-components";
import { useEffect, useRef, useState } from 'react';

import Icon from "./Icon";


const Selector: React.FC<any> = (props) => {
  const { selects, text, selectName, setSelectName, width } = props;
  let [opened, setOpened] = useState(false);

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
    <Container
      ref={selector}
      width={width}
    >
      <Title> {text} </Title>
      <Default onClick={() => setOpened(!opened)}>
        <Text>{selectName}</Text>
        <Icon src="icons/select-black.svg" />
      </Default>

      {opened &&
        <SelectList width={width}>
          {selects && selects.map((select: any) =>
            <Select
              onClick={() => onSelect(select)}
              key={select}
            >
              <Text>{select}</Text>
            </Select>
          )}
        </SelectList>
      }
    </Container>
  );
}

const Container = styled.div<{ width: string }>`
  user-select: none;
  display: block;
  width: ${(props) => props.width};
  box-sizing: border-box;
`

const Title = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: var(--shade-2);
  padding-left: 18px;
`;

const Default = styled.div`
  z-index: 2;
  cursor: pointer;  
  display: flex;
  flex-direction: row;
  height: 36px;
  border: 1px solid var(--shade-6);
  box-sizing: border-box;
  border-radius: 18px;
  background-color: transparent;
  color: var(--shade-2);
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
`

const Text = styled.div`
`

const SelectList = styled.div<{ width: string }>`
  z-index: 2;
  position: absolute;
  width: ${(props) => props.width};
  height: auto;
  display: block;
  box-sizing: border-box;
  background-color: var(--shade-8);  
  border: 1px solid var(--shade-6);
  border-radius: 18px;
`

const Select = styled.div`
  cursor: pointer;  
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 36px;
  box-sizing: border-box;
  color: var(--shade-2);
  font-weight: 400;
  padding: 0 18px;
  gap: 10px;
  :hover {
    color: var(--shade-0)
  }
`

export default Selector;