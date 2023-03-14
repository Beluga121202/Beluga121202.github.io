import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonCustom = styled(Button)`
  width: ${props => props.theme.buttonStyle.width};
  color: ${props => props.theme.buttonStyle.color};
  background: ${props => props.theme.buttonStyle.background};
  border: ${props => props.theme.buttonStyle.border};

  :hover {
    color: ${props => props.theme.buttonStyle.hoverColor};
    background: ${props => props.theme.buttonStyle.hoverBackground};
    border: ${props => props.theme.buttonStyle.hoverBorder};
  }

  :focus {
    color: ${props => props.theme.buttonStyle.focusColor};
    background: ${props => props.theme.buttonStyle.focusBackground};
    border: ${props => props.theme.buttonStyle.focusBorder};
  }
`;
export const ButtonExit = styled(Button)`
  border-color: ${props => props.theme.buttonStyle.borderColor};
  border-radius: ${props => props.theme.buttonStyle.borderRadius};
  background: ${props => props.theme.buttonStyle.background};
  height: ${props => props.theme.buttonStyle.height};
  color: ${props => props.theme.buttonStyle.color};
  :hover {
    border-color: ${props => props.theme.buttonStyle.borderColor};
    background: ${props => props.theme.buttonStyle.background};
    color: ${props => props.theme.buttonStyle.color};
    filter: ${props => props.theme.buttonStyle.filter};
  }
`;
export const ButtonSave = styled(Button)`
  border-color: ${props => props.theme.buttonStyle.borderColor};
  border-radius: ${props => props.theme.buttonStyle.borderRadius};
  color: #f2994a;
  height: ${props => props.theme.buttonStyle.height};
  :hover {
    border-color: ${props => props.theme.buttonStyle.borderColor};
    color: #f2994a;
    filter: ${props => props.theme.buttonStyle.filter};
  }
`;
