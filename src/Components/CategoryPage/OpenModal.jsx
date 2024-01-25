import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Select } from 'antd';
const { Option } = Select;

export default function OpenModal({ postCategory, categories, open, setOpen, setEdit, putCategory }) {

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  function handleValue(e) {
    postCategory(e)
    // putCategory(e)
  }

  return (
    <div className='openModal'>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Add Category
      </Button>
      <Drawer
        title="Create a new category"
        width={720}
        onClose={onClose}
        open={open}
        styles={{ body: { paddingBottom: 80 } }}
      >
        <Form layout="vertical" onFinish={handleValue}>
          <Row gutter={[12, 0]}>
            <Col lg={12}>
              <Form.Item label="Name uz" name="name_uz" rules={[{ required: true, message: 'Please enter Name uz' }]}>
                <Input placeholder="Type name uz" />
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item label="Name ru" name="name_ru" rules={[{ required: true, message: 'Please enter Name ru' }]}>
                <Input placeholder="Type name ru" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[12, 0]}>
            <Col lg={12}>
              <Form.Item label="Image url" name="catImage" rules={[{ type: 'url', message: 'Please enter a valid URL' }]}>
                <Input placeholder="Paste image url" />
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item label="Parent category" name="parent_id">
                <Select>
                  <Option value="0">Own</Option>
                  {categories?.map((item) => (
                    <Option value={item.id} key={item.id}>
                      {item.name_uz}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Button type="primary" htmlType="submit">
            Add category
          </Button>
        </Form>
      </Drawer>
    </div>
  );
}
