import React from 'react';
import { TableTest } from './styles';

// eslint-disable-next-line react/prop-types
const TableCustom = ({ data, columns, isLoading, pagination }) => (
  <TableTest
    dataSource={data}
    columns={columns}
    loading={isLoading}
    pagination={pagination}
    scroll={{
      y: 600,
    }}
  />
);

export default TableCustom;
