import styled from 'styled-components';
import { Select } from 'antd';

export const SelectCustom = styled(Select)`
  width: ${props => props.theme.selectStyle.width};
  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-radius: ${props => props.theme.selectStyle.borderRadius};
    padding: ${props => props.theme.selectStyle.padding};
    height: ${props => props.theme.selectStyle.height};
    align-items: ${props => props.theme.selectStyle.alignItems};
  }
  &.ant-cascader-menus {
    min-width: ${props => props.theme.selectStyle.minWidth};
    height: 100%;
  }
`;
