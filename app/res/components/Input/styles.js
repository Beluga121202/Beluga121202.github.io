import styled from 'styled-components';
import { Input } from 'antd';

export const InputCustom = styled(Input)`
  width: ${props => props.theme.inputStyle.width};
  border-radius: ${props => props.theme.inputStyle.borderRadius};
  padding: ${props => props.theme.inputStyle.padding};
`;
