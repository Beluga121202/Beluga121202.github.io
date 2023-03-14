import React from 'react';
import { ModalCustom } from './styles';
// eslint-disable-next-line react/prop-types,no-unused-vars
const ModalAddandEdit = ({ children, ...props }) => (
  <ModalCustom {...props}>{children}</ModalCustom>
);

export default ModalAddandEdit;
