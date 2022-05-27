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
  width: 220px;
  height: 44px;
  border: 1px solid #E8EBED;
  box-sizing: border-box;
  border-radius: 22px;
  background-color: transparent;
  color: #707A83;
  font-family: 'Pridi';
  font-weight: 400;
  font-size: 20px;
  transition: 0.15s ease-in-out;

  :hover {
    filter: brightness(130%);
  }

  :active {
    filter: brightness(80%);
  }

  :disabled {
    filter: brightness(40%);
  }
`;
