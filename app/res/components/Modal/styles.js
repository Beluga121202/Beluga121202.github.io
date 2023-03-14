import styled from 'styled-components';
import { Modal } from 'antd';

export const ModalCustom = styled(Modal)`
  .ant-modal-content {
    border-radius: ${props => props.theme.modalStyle.borderRadius};
    overflow: ${props => props.theme.modalStyle.overflow};
  }
  .ant-modal-header {
    background: ${props => props.theme.modalStyle.background};
    display: ${props => props.theme.modalStyle.display};
    justify-content: ${props => props.theme.modalStyle.justifyContent};
  }
  .ant-modal-title {
    font-weight: ${props => props.theme.modalStyle.fontWeight};
  }
  .ant-modal-footer {
    display: ${props => props.theme.modalStyle.display};
    justify-content: ${props => props.theme.modalStyle.justifyContent};
  }
`;
