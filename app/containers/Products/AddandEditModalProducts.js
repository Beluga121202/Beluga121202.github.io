import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Space } from 'antd';
import dayjs from 'dayjs';
import moment from 'moment';
import { RadioModal, RadioModalGroup } from '../../res/components/Radio';
import ModalAddandEdit from '../../res/components/Modal';
import Input from '../../res/components/Input';
import DatePickerModal from '../../res/components/DatePicker';
import SelectModal from '../../res/components/Select';
import { ButtonSaveModal, ButtonCloseModal } from '../../res/components/Button';
export function AddandEditModalProducts({
  onClickCancel,
  onClickOk,
  infoEdit,
  tittleModal,
}) {
  const { t } = useTranslation();
  const dateFormat = 'MM/DD/YYYY';
  const [form] = Form.useForm();
  const handleCancel = () => {
    onClickCancel();
  };
  const onFinish = () => {
    const info = form.getFieldsValue();
    onClickOk(info);
  };
  form.setFieldsValue(infoEdit);
  return (
    <>
      <ModalAddandEdit
        title={tittleModal}
        visible
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} autoComplete="off" onFinish={onFinish}>
          <Form.Item
            name="UserName"
            rules={[
              {
                required: true,
                message: 'Please input your UserAccount',
              },
              { type: 'string' },
            ]}
          >
            <Input placeholder="Mã khách hàng" />
          </Form.Item>

          <Form.Item
            name="IDRegister"
            rules={[
              {
                required: true,
                message: 'Please input your IDRegister',
              },
              { type: 'string' },
            ]}
          >
            <Input placeholder="Mã đăng ký" />
          </Form.Item>
          <Form.Item
            name="FullName"
            rules={[
              {
                required: true,
                message: 'Please input your FullName',
              },
              { type: 'string' },
            ]}
          >
            <Input placeholder="Tên khách hàng" />
          </Form.Item>
          <Form.Item
            name="Phone"
            rules={[
              {
                required: true,
                message: 'Please input your Phone',
              },
              { type: 'string', min: 10, max: 11 },
            ]}
          >
            <Input placeholder={t('products.Phone')} />
          </Form.Item>

          <Form.Item
            name="Email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
            ]}
          >
            <Input placeholder={t('products.Email')} />
          </Form.Item>

          <Form.Item name="Address">
            <Input placeholder={t('products.Address')} />
          </Form.Item>

          <Form.Item
            name="DayOfSale"
            valuePropName="date"
            rules={[
              {
                required: true,
                message: 'Please input your Birthday!',
              },
              { type: 'date' },
            ]}
          >
            <DatePickerModal
              format={dateFormat}
              defaultValue={
                infoEdit ? dayjs(infoEdit.DayOfSale, dateFormat) : ''
              }
            />
          </Form.Item>

          <Form.Item name="IsActive" label="Trạng thái">
            <RadioModalGroup>
              <RadioModal value>Còn thời hạn</RadioModal>
              <RadioModal value={false} style={{fontFamily:"sans-serif"}}>Hết hạn</RadioModal>
            </RadioModalGroup>
          </Form.Item>
          <Form.Item style={{ textAlign: 'center' }}>
            <Space size={20}>
              <ButtonSaveModal onClick={handleCancel}>
                Đóng(ESC)
              </ButtonSaveModal>
              <ButtonCloseModal key="submit" htmlType="submit">
                Ghi Lại(Ctrl+S)
              </ButtonCloseModal>
            </Space>
          </Form.Item>
        </Form>
      </ModalAddandEdit>
    </>
  );
}
