import styled from 'styled-components';
import { Form, Typography, Button } from 'antd';
const { Title } = Typography;
const Container = styled.div`
  background-image: linear-gradient(to bottom right, #f79f9f, #f7f765);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const FormLogin = styled(Form)`
  &.ant-form {
    background-color: #fff;
    padding: 80px;
    border-radius: 21px;
  }
`;
const TitleFormLogin = styled(Title)`
  &.ant-typography {
    margin-bottom: 30px;
  }
`;
const AgreeCheckBoxFormLogin = styled(Form.Item)`
  .ant-form-item-control {
    margin-left: 0;
    max-width: 300px;
  }
`;
const ButtonLoginForm = styled(Form.Item)`
  .ant-form-item-control {
    margin-left: 0;
    max-width: 400px;
  }
`;
const ButtonCustom = styled(Button)`
  &.ant-btn {
    width: 100%;
    height: 44px;
    border-radius: 6px;
  }
`;
const NavigationFormLogin = styled.div`
   {
    display: flex;
    justify-content: space-between;
  }
`;
export {
  Container,
  FormLogin,
  TitleFormLogin,
  AgreeCheckBoxFormLogin,
  ButtonLoginForm,
  ButtonCustom,
  NavigationFormLogin,
};
