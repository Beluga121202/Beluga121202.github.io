import React from 'react';
import { DatePickerCustom } from './styles';

// eslint-disable-next-line react/prop-types
const DatePickerModal = ({ props, ...children }) => (
  <DatePickerCustom {...props} {...children} />
);

export default DatePickerModal;
