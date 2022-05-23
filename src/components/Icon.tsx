import styled from 'styled-components';

const Icon = styled.img<{
  width?: string, 
  height?: string, 
  cursor?: string
}>`
  user-select: none;
  cursor: ${props => props.cursor? props.cursor:"select"};
  width: ${props => props.width? props.width:"24px"};
  height: ${props => props.height? props.height:"24px"};
`;

export default Icon;

export const Icon50x50 = (props: any) => <Icon {...props} width="50px" height="50px" cursor="pointer"/>
export const Icon30x30 = (props: any) => <Icon {...props} width="30px" height="30px" cursor="pointer"/>
export const Icon15x15 = (props: any) => <Icon {...props} width="15px" height="15px" cursor="pointer"/>
