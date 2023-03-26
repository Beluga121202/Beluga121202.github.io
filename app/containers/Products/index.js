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
} from './stylesProducts';
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
import * as actions from './actionsProducts';
// import * as selectors from './selectorsHomePage';
import { COOKIES } from '../../utils/constants';
import { REDUX_KEY } from './constantsProducts';
import reducer from './reducerProducts';
import saga from './sagaProducts';
import { AddandEditModalProducts } from './AddandEditModalProducts';
const { Sider, Content } = Layout;
const key = REDUX_KEY;
const ProductsPage = () => {
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
  useEffect(() => {
    dispatch(
      actions.takeList( res => {
        setDataSource(res);
        setDataSearch(res);
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
    if (info.IsActive === true) {
      info.IsActive = 1;
      info.Expired = "Còn thời hạn"
    }
    else {
      info.IsActive = 0;
      info.Expired = "Hết hạn"
    }
    const data = {
      UserName: info.UserName,
      FullName: info.FullName,
      Phone: info.Phone,
      IDRegister: info.IDRegister,
      DayOfSale: moment(info.DayOfSale).format("MM/DD/YYYY"),
      Expired: info.Expired,
      isActive:info.IsActive,
      Email: info.Email,
      Address:info.Address,
    }
    dispatch(
          actions.addProducts(data, () => {
            dispatch(
              actions.takeList(res => {
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
  console.log(dataSearch);
  const handleUpdate = info => {
    if (info.IsActive === true) {
      info.IsActive = 1;
      info.Expired = "Còn thời hạn"
    }
    else {
      info.IsActive = 0;
      info.Expired = "Hết hạn"
    }
    const data = {
      UserName: info.UserName,
      FullName: info.FullName,
      Phone: info.Phone,
      IDRegister: info.IDRegister,
      DayOfSale: moment(info.DayOfSale).format("MM-DD-YYYY"),
      Expired: info.Expired,
      IsActive:info.IsActive,
      Email: info.Email,
      Address:info.Address,
    }
    dispatch(
      actions.editProducts(data, () => {
        dispatch(
          actions.takeList(res => {
            setDataSource(res);
            setDataSearch(res);
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
      DayOfSale: moment(record.DayOfSale).format(),
      Email: record.Email,
      Phone: record.Phone,
      UserName: record.UserName,
      FullName: record.FullName,
      IDRegister: record.IDRegister,
      Expired: record.Expired,
      IsActive: record.IsActive === 1,
    };
    console.log(data);
    setInfoUserEdit(data);
    setIsModalEditOpen(true);
  };
  const handleDelete = info => {
    const data = {
      UserName :info.UserName
    }
    dispatch(actions.deleteProducts(data,() => {
      dispatch(actions.takeList(res => {
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
    },
    {
      title: 'Mã khách hàng',
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
      title: 'Mã Đăng Ký',
      key: 'IDRegister',
      dataIndex: 'IDRegister',
    },
    {
      title: 'Ngày Bán',
      key: 'DayOfSale',
      dataIndex: 'DayOfSale',
      render: (_, record) => moment(record.DayOfSale).format("DD/MM/YYYY"),
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
          <img style={{cursor:"pointer"}} src={HistoryButton} onClick={() => handleDelete(record)} alt="" />
        </Space>
      ),
    },
    {
      title: 'Thời Hạn',
      key: 'Expired',
      dataIndex: 'Expired',
      render:(_,record) => (
        <div style={ record.Expired === "Còn thời hạn"?{color : "#08b7dd"}:{color : "red"}}>{record.Expired}</div>
      )
    },
  ];

  // const onChangePage = () => {
  //   <Redirect to='./Homepage'/>
  // }
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
                onClick = {({key}) => {
                  selectedKeys(key);
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
                    icon: <img src={Dashboard} alt="" />,
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
                <AddandEditModalProducts
                  onClickCancel={handleCancel}
                  onClickOk={handleOk}
                  tittleModal={t('homepage.AddNewAccount')}
                />
              )}
              {isModalEditOpen && (
                <AddandEditModalProducts
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

export default ProductsPage;
