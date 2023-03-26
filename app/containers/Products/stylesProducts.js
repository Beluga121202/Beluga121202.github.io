import styled from 'styled-components';
import { Button, Divider, Input, Layout, Menu, Modal, Popover } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
const { Search } = Input;
const { Header } = Layout;
const LayoutCustom = styled(Layout)`
  &.ant-layout {
    height: 100%;
  }
`;
const MenuCustom = styled(Menu)`
  &.ant-menu {
    background: #fff !important;
    height: 100%;
    border-right: 2px solid #dbd8d8;
  }
  .ant-menu-item {
    margin: 0 !important;
  }
`;
const HeaderCustom = styled(Header)`
  &.ant-layout-header {
    background-color: #fff;
    display: flex;
    align-items: center;
  }
`;
const MenuOutLinedCustom = styled(MenuOutlined)`
  &.anticon-menu {
    font-size: 20px;
    padding-left: 30px;
    margin-top: 3px;
  }
`;
const HeaderSeparate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const BkavImg = styled.img`
  padding-left: 30px;
`;
const SeparateImg = styled.img`
  padding: 0 5px;
`;
const DlImg = styled.img``;
const AvatarImg = styled.img`
  cursor: pointer;
`;
const HeaderRight = styled.div`
  margin-right: 10px;
`;
const HeaderLeft = styled.div``;
const DividerCustom = styled(Divider)`
  &.ant-divider-horizontal {
    margin: 0;
  }
`;
const PopOverCustom = styled(Popover)`
  .ant-popover-inner {
    width: 200px;
  }
`;
const ContentDiv = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;
const UserName = styled.b`
  text-align: center;
  margin: 10px 0;
`;
const CompanyName = styled.div`
  text-align: center;
  margin: 4px 0;
`;
const AccountCreatedBy = styled.div`
  text-align: center;
  margin: 2px 0 10px 0;
`;
const LogOutBtn = styled(Button)`
  width: 254px;
  height: 40px;
  background: #ffa13a;
  text-align: center;
  border-radius: 20px;
`;
const LogOutBtnDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const SeachCustom = styled(Search)`
  &.ant-input-search {
    padding: 20px 0 0 21px;
  }
  .ant-input-affix-wrapper {
    border-top-left-radius: 8px !important;
    border-bottom-left-radius: 8px !important;
  }
  .ant-btn {
    border-radius: 0 8px 8px 0 !important;
  }
`;
const LayOutContent = styled(Layout)`
  &.ant-layout {
    background-color: #fff;
    margin: 0;
  }
  .ant-layout-content {
    margin: 0 !important;
  }
`;

const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TextContentHeader = styled.div`
  font-weight: 600;
`;
const ButtonAdd = styled(Button)`
  &.ant-btn {
    display: flex;
    align-items: center;
    background-color: #ffa13d;
    border-radius: 10px;
    color: #fff;
  }
`;
const EditButtonImg = styled.img`
  cursor: pointer;
`;
export {
  LayoutCustom,
  MenuCustom,
  HeaderCustom,
  MenuOutLinedCustom,
  BkavImg,
  SeparateImg,
  DlImg,
  AvatarImg,
  HeaderSeparate,
  HeaderRight,
  HeaderLeft,
  DividerCustom,
  PopOverCustom,
  ContentDiv,
  SeachCustom,
  LayOutContent,
  ContentHeader,
  TextContentHeader,
  ButtonAdd,
  UserName,
  LogOutBtn,
  LogOutBtnDiv,
  CompanyName,
  AccountCreatedBy,
  EditButtonImg
};
