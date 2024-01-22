import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Select, Space } from 'antd';
const { Option } = Select;

export default function OpenModal() {

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className='openModal'>
            <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                Add Category
            </Button>
            <Drawer
                title="Create a new account"
                width={720}
                onClose={onClose}
                open={open}
                styles={{
                    body: {
                        paddingBottom: 80,
                    },
                }}

            >
                <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="name_uz"
                                label="Name uz"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter name uz',
                                    },
                                ]}
                            >
                                <Input placeholder="Please enter name uz" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="name_ru"
                                label="Name ru"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter name ru',
                                    },
                                ]}
                            >
                                <Input placeholder="Please enter name ru" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="catImage"
                                label="Image url"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter Image url',
                                    },
                                ]}
                            >
                                <Input placeholder="Please enter Image url" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="slug"
                                label="Category select"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select category',
                                    },
                                ]}
                            >
                                <Select placeholder="Please select an owner">
                                    <Option value="xiao">Xiaoxiao Fu</Option>
                                    <Option value="mao">Maomao Zhou</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                <Space>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={onClose} type="primary">
                        Submit
                    </Button>
                </Space>
            </Drawer>
        </div>
    )
}
