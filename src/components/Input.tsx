import styled from 'styled-components';

export const Input: React.FC<any> = (props) => {
  return (
    <Container>
      <Title $isError={props.color}>
        {props.title}
      </Title>
			<Content>
				<InputStyle
					onChange={(e) => props.onChange(e.target.value)}
					placeholder={props.holder}
					value={props.value}
					type={props.type}
					disabled={props.disabled}
				/>
				<Unit>
					{props.unit}
				</Unit>
			</Content> 
    </Container>
  );
}

const Container = styled.div`
	display: flex;
  justify-content: space-between;
  align-items: center;  
`
const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 50%;
`

const InputStyle = styled.input`
	box-sizing: border-box;
	border: 1px solid var(--shade-4);
	border-radius: var(--border-radius);
	font-weight: 400;
	font-size: 14px;
	width: 80%;
	padding: 5px 10px;
	text-align: right;
`;

export const Title = styled.div<{$isError?:any}>`
	font-weight: 400;
  font-size: 14px;
  color: var(--shade-4);
`;

const Unit = styled.div`
	font-weight: 400;
	font-size: 14px;
	color: var(--shade-4);
`;
