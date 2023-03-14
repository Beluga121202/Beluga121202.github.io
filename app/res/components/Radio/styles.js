import styled from 'styled-components';
import { Radio } from 'antd';

export const RadioGroupCustom = styled(Radio.Group)`
  display: ${props => props.theme.radioStyle.display};
  justify-content: ${props => props.theme.radioStyle.justifyContent};
`;
export const RadioCustom = styled(Radio)`
  .ant-radio-inner:after {
    background-color: ${props => props.theme.radioStyle.backgroundColor};
  }
  .ant-radio-checked .ant-radio-inner {
    border-color: ${props => props.theme.radioStyle.borderColor};
  }
  .ant-radio:hover .ant-radio-inner{
    border-color: ${props => props.theme.radioStyle.borderColor};
  }
`;
