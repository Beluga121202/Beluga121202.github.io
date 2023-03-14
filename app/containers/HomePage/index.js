import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Layout, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';
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
import UserGroup from '../../images/people_alt.svg';
import Chart from '../../images/poll.svg';
import Card from '../../images/payment.svg';
import User from '../../images/perm_identity.svg';
import Notification from '../../images/web.svg';
import Receipt from '../../images/receipt_long.svg';
import Book from '../../images/menu_book.svg';
import Gift from '../../images/card_giftcard.svg';
import HealthCheck from '../../images/insights.svg';
import Dashboard from '../../images/dashboard.svg';
import EditButton from '../../images/edit.svg';
import HistoryButton from '../../images/history.svg';
import * as actions from './actionsHomePage';
// import * as selectors from './selectorsHomePage';
import { COOKIES } from '../../utils/constants';
import { REDUX_KEY } from './constantsHomePage';
import reducer from './reducerHomePAge';
import saga from './sagaHomePage';
import { AddandEditModalHomePage } from './AddandEditModalHomePage';
const { Sider, Content } = Layout;
const key = REDUX_KEY;
const HomePage = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  // const infoUser = useSelector(selectors.selectInfoUser());
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
  const body = {
    CurrentPage: 1,
    HierachyID: 0,
    IsDesc: false,
    KeySearch: '',
    ListUserID: ['0'],
    PageSize: 120,
    Phone: '',
    RoleGroupID: 0,
    SortCol: 'UserName',
  };
  useEffect(() => {
    dispatch(
      actions.takeList(body, res => {
        setDataSource(res.Users);
        setDataSearch(res.Users);
      }),
    );
  }, []);
  const handleLogOut = () => {
    SetIsNotCookie(Cookies.remove(COOKIES.access_token));
  };
  const showModal = () => {
    setIsModalAddOpen(true);
    setInfoUserEdit([]);
  };
  const handleOk = info => {
    dispatch(
      actions.addAccount(info, () => {
        dispatch(
          actions.takeList(body, res => {
            setDataSource(res.Users);
            setDataSearch(res.Users);
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
    console.log(infoUserEdit);
    console.log(info);
    const data = {
      UserGUID: infoUserEdit.UserGUID,
      Birthday: moment(info.Birthday),
      ...info,
    };
    dispatch(
      actions.editAccount(data, () => {
        dispatch(
          actions.takeList(body, res => {
            setDataSource(res.Users);
            setDataSearch(res.Users);
          }),
        );
      }),
    );
    setIsModalEditOpen(false);
  };
  const handleEdit = record => {
    console.log(record);
    const data = {
      Address: record.Address,
      Birthday: moment(record.Birthday).format(),
      Email: record.Email,
      Phone: record.Phone,
      UserName: record.UserName,
      FullName: record.FullName,
      RoleID: record.RoleID,
      UserGUID: record.UserGUID,
      IsActive: record.IsActive,
    };
    console.log(data);
    setInfoUserEdit(data);
    setIsModalEditOpen(true);
  };
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
    },
    {
      title: 'Ngày Sinh',
      key: 'Birthday',
      dataIndex: 'Birthday',
      render: (_, record) => moment(record.Birthday).format('DD/MM/YYYY'),
    },
    {
      title: 'Nhóm Quyền',
      key: 'RoleGroupName',
      dataIndex: 'RoleGroupName',
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
          <img src={HistoryButton} alt="" />
        </Space>
      ),
    },
    {
      title: 'Trạng thái',
      key: 'Status',
      dataIndex: 'Status',
    },
  ];
  return (
    <>
      {!isNotCookie ? (
        <Redirect to="./Login" />
      ) : (
        <>
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
                items={[
                  {
                    key: '1',
                    icon: <img src={User} alt="" />,
                    label: 'Quản lý tài khoản',
                  },
                  {
                    key: '2',
                    icon: <img src={Dashboard} alt="" />,
                    label: 'Quản lý sản phẩm',
                  },
                  {
                    key: '3',
                    icon: <img src={Gift} alt="" />,
                    label: 'Quản lý quà',
                  },
                  {
                    key: '4',
                    icon: <img src={UserGroup} alt="" />,
                    label: 'Quản lý nhóm quyền',
                  },
                  {
                    key: '5',
                    icon: <img src={Chart} alt="" />,
                    label: 'Thống kê',
                  },
                  {
                    key: '6',
                    icon: <img src={Card} alt="" />,
                    label: 'Quản lý loại thẻ',
                  },
                  {
                    key: '7',
                    icon: <img src={Notification} alt="" />,
                    label: 'Quản lý thông báo',
                  },
                  {
                    key: '8',
                    icon: <img src={Receipt} alt="" />,
                    label: 'Quản lý đơn đặt hàng',
                  },
                  {
                    key: '9',
                    icon: <img src={HealthCheck} alt="" />,
                    label: 'Quản lý Health Check',
                  },
                  {
                    key: '10',
                    icon: <img src={Book} alt="" />,
                    label: 'Hướng dẫn sử dụng',
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
