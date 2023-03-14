import styled from 'styled-components';
import { DatePicker } from 'antd';

export const DatePickerCustom = styled(DatePicker)`
  width: ${props => props.theme.datePickerStyle.width};
  padding: ${props => props.theme.datePickerStyle.padding};
  border-radius: ${props => props.theme.datePickerStyle.borderRadius};
`;
