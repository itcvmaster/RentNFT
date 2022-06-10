import styled from 'styled-components';

const Button: React.FC<any> = (props) => {
  const { text, onClick } = props;
  return (
    <ButtonStyle onClick={onClick} {...props}>
      {text}
    </ButtonStyle>
  );
}
export default Button;

export const ButtonStyle = styled.button`
  diplay: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 180px;
  height: 36px;
  border: 1px solid var(--shade-4);
  box-sizing: border-box;
  border-radius: 18px;
  background-color: transparent;
  color: var(--shade-4);
  font-weight: 400;
  font-size: 16px;
  transition: 0.15s ease-in-out;
`;
