import { Table } from 'antd';
import styled from 'styled-components';

export const TableTest = styled(Table)`
  border: 1px solid #c1bbbb;
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;

  .ant-table {
    font-size: 1em;
    color: #000;
    font-weight: 400;
  }
  .ant-table-thead .ant-table-cell {
    font-weight: 600;
  }
  .ant-table-thead th {
    background-color: #c5ced9;
  }
  .ant-table-pagination {
    margin: 16px 6px;
  }
  .ant-table-row .ant-table-cell:last-child {
    color: #08b7dd;
    font-weight: 600;
  }
`;
