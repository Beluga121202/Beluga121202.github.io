import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Layout, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { Redirect, useLocation } from "react-router-dom";
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import dayjs from 'dayjs';
import moment from 'moment';
import {
  HeaderCustom,
  LayoutCustom,
  MenuCustom,
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
  EditButtonImg,
} from './stylesHomePage';
import TableCustom from '../../res/components/Table';
import Vector from '../../images/Vector.svg';
import Separate from '../../images/separate.svg';
import DLText from '../../images/DL.svg';
import Avatar from '../../images/AvatarUser.svg';
import User from '../../images/user.svg';
import Dashboard from '../../images/dashboard.svg';
import EditButton from '../../images/edit.svg';
import DeleteButton from '../../images/delete.jpg';
import * as actions from './actionsHomePage';
// import * as selectors from './selectorsHomePage';
import { COOKIES } from '../../utils/constants';
import { REDUX_KEY } from './constantsHomePage';
import reducer from './reducerHomePAge';
import saga from './sagaHomePage';
import { AddandEditModalHomePage } from './AddandEditModalHomePage';
import { takeListHome } from "./actionsHomePage";
const { Sider, Content } = Layout;
const key = REDUX_KEY;
const HomePage = (props) => {
  console.log(props);
  const { menyKey, setMenuKey } = props;
  console.log(props.menuKey);
  const location = useLocation();
  console.log(location.pathname);
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [collapsed, setCollapsed] = useState(false);
  const [isNotCookie, SetIsNotCookie] = useState(
    Cookies.get(COOKIES.access_token),
  );
  const [search, setSearch] = useState('');
  const [dataSource, setDataSource] = useState([]);
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [dataSearch, setDataSearch] = useState([]);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [infoUserEdit, setInfoUserEdit] = useState([]);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      actions.takeListHome( res => {
        setDataSource(res);
        setDataSearch(res);
      }),
    );
  }, []);
  console.log(dataSource);
  const handleLogOut = () => {
    SetIsNotCookie(Cookies.remove(COOKIES.access_token));
  };
  const showModal = () => {
    setIsModalAddOpen(true);
    setInfoUserEdit([]);
  };
  const handleOk = info => {
    if (info.IsActive === true) {
      info.IsActive = 1;
      info.Status = "Đang hoạt động"
    }
    else {
      info.IsActive = 0;
      info.Status = "Không hoạt động"
    }
    if (info.RoleID == 2) {
      info.RoleGroup ="Nhóm Đại Lý"
    }
    else {
      info.RoleGroup ="Nhóm Kỹ Thuật Viên"
    }
    const data = {
      UserName: info.UserName,
      FullName: info.FullName,
      Phone: info.Phone,
      Email: info.Email,
      Birthday: moment(info.Birthday).format("MM/DD/YYYY"),
      Address:info.Address,
      Status: info.Status,
      RoleID: info.RoleID,
      RoleGroup: info.RoleGroup,
      IsActive:info.IsActive
    }
    dispatch(
      actions.addAccount(data, () => {
        dispatch(
          actions.takeListHome(res => {
            setDataSource(res);
            setDataSearch(res);
          }),
        );
      }),
    );
    setIsModalAddOpen(false);
  };
  const handleCancel = () => {
    setIsModalAddOpen(false);
    setIsModalEditOpen(false);
  };
  const handleUpdate = info => {
    if (info.IsActive === true) {
      info.IsActive = 1;
      info.Status = "Đang hoạt động"
    }
    else {
      info.IsActive = 0;
      info.Status = "Không hoạt động"
    }
    if (info.RoleID == 2) {
      info.RoleGroup ="Nhóm Đại Lý"
    }
    else {
      info.RoleGroup ="Nhóm Kỹ Thuật Viên"
    }
    const data = {
      UserName: info.UserName,
      FullName: info.FullName,
      Phone: info.Phone,
      Email: info.Email,
      Birthday: moment(info.Birthday).format("MM-DD-YYYY"),
      Address:info.Address,
      Status: info.Status,
      RoleID: info.RoleID,
      RoleGroup: info.RoleGroup,
      IsActive:info.IsActive
    }
    console.log(data);
    dispatch(
      actions.editAccount(data, () => {
        dispatch(
          actions.takeListHome(res => {
            setDataSource(res);
            setDataSearch(res);
          }),
        );
      }),
    );
    setIsModalEditOpen(false);
  };
  const handleEdit = record => {
    const info = {
      Address: record.Address,
      Birthday: moment(record.Birthday).format(),
      Email: record.Email,
      Phone: record.Phone,
      UserName: record.UserName,
      FullName: record.FullName,
      RoleID: record.RoleID,
      IsActive: record.IsActive === 1,
    };
    console.log(info);
    setInfoUserEdit(info);
    setIsModalEditOpen(true);
  };
  const handleDelete = info => {
      const data = {
        UserName :info.UserName
      }
      dispatch(actions.deleteAccount(data,() => {
        dispatch(actions.takeListHome(res => {
          setDataSource(res);
          setDataSearch(res);
        }))
      }))
  }
  const content = (
    <ContentDiv>
      <AvatarImg src={Avatar} />
      <UserName>{t('homepage.UserName')}</UserName>
      <CompanyName>{t('homepage.CompanyName')}</CompanyName>
      <AccountCreatedBy>{t('homepage.AccountCreatedBy')}</AccountCreatedBy>
      <LogOutBtnDiv>
        <LogOutBtn onClick={handleLogOut}>{t('homepage.LogOut')}</LogOutBtn>
      </LogOutBtnDiv>
    </ContentDiv>
  );
  const columns = [
    {
      title: 'STT',
      dataIndex: 'STT',
      key: 'STT',
      render: (value, item, index) => (page - 1) * 10 + index + 1,
      width : '5%',
    },
    {
      title: 'Tên đăng nhập',
      dataIndex: 'UserName',
      key: 'UserName',
    },
    {
      title: 'Tên đầy đủ',
      dataIndex: 'FullName',
      key: 'FullName',
    },
    {
      title: 'Số Điện Thoại',
      key: 'Phone',
      dataIndex: 'Phone',
    },
    {
      title: 'Email',
      key: 'Email',
      dataIndex: 'Email',
      width : '15%',
    },
    {
      title: 'Ngày Sinh',
      key: 'Birthday',
      dataIndex: 'Birthday',
      render: (_, record) => moment(record.Birthday).format('DD/MM/YYYY'),
    },
    {
      title: 'Nhóm Quyền',
      key: 'RoleGroup',
      dataIndex: 'RoleGroup',
    },
    {
      title: 'Chức năng',
      key: 'Actions',
      dataIndex: 'Actions',
      render: (_, record) => (
        <Space size="middle">
          <EditButtonImg
            src={EditButton}
            onClick={() => handleEdit(record)}
            alt=""
          />
          <img style={{cursor:"pointer"}} src={DeleteButton} onClick={() => handleDelete(record)} alt="" />
        </Space>
      ),
    },
    {
      title: 'Trạng thái',
      key: 'Status',
      dataIndex: 'Status',
      render:(_,record) => (
        <div style={ record.Status === "Đang hoạt động"?{color : "#08b7dd"}:{color : "red"}}>{record.Status}</div>
      )
    },
  ];
  return (
    <>
      {!isNotCookie ? (
        <Redirect to="./Login" />
      ) : (
        <>
          {props.menuKey === 2 ? <Redirect to="/products"/> : null}
          <HeaderCustom
            style={{
              padding: 0,
            }}
          >
            {React.createElement(MenuOutLinedCustom, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
            <HeaderSeparate>
              <HeaderLeft>
                <BkavImg src={Vector} />
                <SeparateImg src={Separate} />
                <DlImg src={DLText} />
              </HeaderLeft>
              <HeaderRight>
                <PopOverCustom
                  placement="bottomRight"
                  content={content}
                  trigger="click"
                >
                  <AvatarImg src={Avatar} />
                </PopOverCustom>
              </HeaderRight>
            </HeaderSeparate>
          </HeaderCustom>
          <DividerCustom />
          <LayoutCustom>
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <MenuCustom
                mode="inline"
                defaultSelectedKeys={['1']}
                onClick = {(e) => {
                  if (e.key ==='2')
                    setMenuKey(2)
                }
                }
                items={[
                  {
                    key: '1',
                    icon: <img src={User} alt="" />,
                    label: 'Quản lý tài khoản',
                  },
                  {
                    key: '2',
                    icon: <img src={Dashboard} alt=""  />,
                    label: 'Quản lý sản phẩm',
                  },
                ]}
              />
            </Sider>
            <LayOutContent>
              <SeachCustom
                placeholder={t('homepage.InputSeachText')}
                allowClear
                style={{
                  width: 600,
                }}
                value={search}
                onChange={e => {
                  const currValue = e.target.value;
                  setSearch(currValue);
                  const FilterdData = dataSearch.filter(item =>
                    item.FullName.includes(currValue),
                  );
                  setDataSource(FilterdData);
                }}
              />
              <Content
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                }}
              >
                <ContentHeader>
                  <TextContentHeader>
                    {t('homepage.ManageAcoount')} {dataSource.length}
                  </TextContentHeader>
                  <ButtonAdd onClick={showModal}>
                    <PlusOutlined />
                    {t('homepage.AddNew')}
                  </ButtonAdd>
                </ContentHeader>
                <TableCustom
                  columns={columns}
                  data={dataSource}
                  pagination={{
                    onChange(current) {
                      setPage(current);
                    },
                  }}
                />
              </Content>
              {isModalAddOpen && (
                <AddandEditModalHomePage
                  onClickCancel={handleCancel}
                  onClickOk={handleOk}
                  tittleModal={t('homepage.AddNewAccount')}
                />
              )}
              {isModalEditOpen && (
                <AddandEditModalHomePage
                  onClickCancel={handleCancel}
                  onClickOk={handleUpdate}
                  tittleModal={t('homepage.EditAccount')}
                  infoEdit={infoUserEdit}
                />
              )}
            </LayOutContent>
          </LayoutCustom>
        </>
      )}
    </>
  );
};

export default HomePage;
