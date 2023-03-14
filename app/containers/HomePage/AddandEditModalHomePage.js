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
export function AddandEditModalHomePage({
  onClickCancel,
  onClickOk,
  infoEdit,
  tittleModal,
}) {
  const { t } = useTranslation();
  const dateFormat = 'DD/MM/YYYY';
  const options = [
    {
      value: 2,
      label: 'Nhóm Đại Lý',
    },
    {
      value: 3,
      label: 'Nhóm Kỹ Thụât Viên',
    },
  ];
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
            <Input placeholder={t('homepage.UserAccount')} />
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
            <Input placeholder={t('homepage.FullName')} />
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
            <Input placeholder={t('homepage.Phone')} />
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
            <Input placeholder={t('homepage.Email')} />
          </Form.Item>

          <Form.Item name="Address">
            <Input placeholder={t('homepage.Address')} />
          </Form.Item>

          <Form.Item
            name="Birthday"
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
                infoEdit ? dayjs(infoEdit.Birthday, dateFormat) : ''
              }
            />
          </Form.Item>

          <Form.Item name="RoleID">
            <SelectModal options={options} placeholder="Select" />
          </Form.Item>

          <Form.Item name="IsActive" label="Trạng thái">
            <RadioModalGroup>
              <RadioModal value>{t('homepage.Active')}</RadioModal>
              <RadioModal value={false}>{t('homepage.InActive')}</RadioModal>
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
