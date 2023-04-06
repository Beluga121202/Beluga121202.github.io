import React, { useState } from 'react';
import { Checkbox, Form } from 'antd';
import Input from 'antd/lib/input/Input';
import { useTranslation } from 'react-i18next';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import {
  Container,
  FormLogin,
  TitleFormLogin,
  AgreeCheckBoxFormLogin,
  ButtonLoginForm,
  ButtonCustom,
  NavigationFormLogin, Flex
} from "./stylesLogin";
import * as actions from './actionsLogin';
import reducer from './reducerLogin';
import saga from './sagaLogin';
import { REDUX_KEY } from './constantsLogin';
import { COOKIES } from '../../utils/constants';
const key = REDUX_KEY;

const Login = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [isCookie, SetIsCookie] = useState('');
  const [form] = Form.useForm();

  const onFinish = () => {
    const body = form.getFieldsValue();
    dispatch(
      actions.login(body, res => {
        SetIsCookie(Cookies.set(COOKIES.access_token, res.access_token));
      }),
    );
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      {isCookie ? (
        <Redirect to="/homepage" />
      ) : (
        <Container>
          <FormLogin
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={form}
          >
            <TitleFormLogin level={3}>{t('login.Title')}</TitleFormLogin>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập tên đăng nhập!',
                },
              ]}
            >
              <Input placeholder="Email hoặc Số Điện Thoại" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  validator(_, value) {
                    const regExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
                    if (regExp.test(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error('Mật khẩu không đúng định dạng'),
                    );
                  },
                },
              ]}
            >
              <Input.Password placeholder="Mật khẩu" />
            </Form.Item>

            <AgreeCheckBoxFormLogin
              name="remember"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                        new Error('Vui lòng đồng ý với điều khoản sử dụng!'),
                      ),
                },
              ]}
            >
                <Checkbox style={{marginTop: "20px",fontFamily:"sans-serif"}}>{t('login.Agree')} <a href="#">{t('login.TermOfUse')}</a></Checkbox>
            </AgreeCheckBoxFormLogin>
            <ButtonLoginForm
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <ButtonCustom type="primary" htmlType="submit">
                {t('login.LogIn')}
              </ButtonCustom>
            </ButtonLoginForm>
            <NavigationFormLogin>
              <a>{t('login.Regeister')}</a>
              <a>{t('login.ForgotPassword')}</a>
            </NavigationFormLogin>
          </FormLogin>
        </Container>
      )}
    </>
  );
};
export default Login;
