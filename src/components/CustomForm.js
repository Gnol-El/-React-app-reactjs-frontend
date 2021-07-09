import React from "react";
import { Button, Input, Form, Typography } from "antd";
const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function CustomForm(props) {
  const { onFinish, onFinishFailed } = props;
  // props.onFinish
  // props.onFinishFailed

  //   City = request.form['City']
  //   PostalCode = request.form['PostalCode']
  //   Country = request.form['Country']
  return (
    <>
      <Title level={2}>Add Product</Title>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ maxWidth: 500 }}
      >
        <Form.Item
          label="Product Name"
          name="ProductName"
          rules={[{ required: true, message: "Please input product's name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="SupplierID"
          name="SupplierID"
          rules={[{ required: true, message: "Please input supplier id!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="CategoryID"
          name="CategoryID"
          rules={[{ required: true, message: "Please input category id!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Amount"
          name="Amount"
          rules={[{ required: true, message: "Please input amount!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name="Price"
          rules={[{ required: true, message: "Please input price!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default CustomForm;
