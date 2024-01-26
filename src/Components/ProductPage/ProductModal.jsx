import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Select } from 'antd';

export default function ProductModal({ postProduct, open, setOpen }) {
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    function handleValue(e) {
        postProduct(e)
    }



    return (
        <div className='openModal'>
            <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                Create Product
            </Button>
            <Drawer
                title="Create a new Banner"
                width={720}
                onClose={onClose}
                open={open}
                styles={{ body: { paddingBottom: 80 } }}
            >
                <Form layout="vertical" onFinish={handleValue}>
                    <Row gutter={[12, 0]}>
                        <Col lg={12}>
                            <Form.Item label="Telefon Raqam" name="phone" rules={[{ required: "phone", message: 'Please enter phone number' }]}>
                                <Input placeholder="Type phone number" />
                            </Form.Item>
                        </Col>
                        <Col lg={12}>
                            <Form.Item label="Full name" name="full_name" rules={[{ required: true, message: 'Please enter Full name' }]}>
                                <Input placeholder="Type full name" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[12, 0]}>
                        <Col lg={12}>
                            <Form.Item label="Telefon Raqam" name="phone" rules={[{ required: "phone", message: 'Please enter phone number' }]}>
                                <Input placeholder="Type phone number" />
                            </Form.Item>
                        </Col>
                        <Col lg={12}>
                            <Form.Item label="Full name" name="full_name" rules={[{ required: true, message: 'Please enter Full name' }]}>
                                <Input placeholder="Type full name" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[12, 0]}>
                        <Col lg={12}>
                            <Form.Item label="Telefon Raqam" name="phone" rules={[{ required: "phone", message: 'Please enter phone number' }]}>
                                <Input placeholder="Type phone number" />
                            </Form.Item>
                        </Col>
                        <Col lg={12}>
                            <Form.Item label="Full name" name="full_name" rules={[{ required: true, message: 'Please enter Full name' }]}>
                                <Input placeholder="Type full name" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[12, 0]}>
                        <Col lg={12}>
                            <Form.Item label="Telefon Raqam" name="phone" rules={[{ required: "phone", message: 'Please enter phone number' }]}>
                                <Input placeholder="Type phone number" />
                            </Form.Item>
                        </Col>
                        <Col lg={12}>
                            <Form.Item label="Full name" name="full_name" rules={[{ required: true, message: 'Please enter Full name' }]}>
                                <Input placeholder="Type full name" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[12, 0]}>
                        <Col lg={12}>
                            <Form.Item label="Telefon Raqam" name="phone" rules={[{ required: "phone", message: 'Please enter phone number' }]}>
                                <Input placeholder="Type phone number" />
                            </Form.Item>
                        </Col>
                        <Col lg={12}>
                            <Form.Item label="Full name" name="full_name" rules={[{ required: true, message: 'Please enter Full name' }]}>
                                <Input placeholder="Type full name" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[12, 0]}>
                        <Col lg={12}>
                            <Form.Item label="Telefon Raqam" name="phone" rules={[{ required: "phone", message: 'Please enter phone number' }]}>
                                <Input placeholder="Type phone number" />
                            </Form.Item>
                        </Col>
                        <Col lg={12}>
                            <Form.Item label="Full name" name="full_name" rules={[{ required: true, message: 'Please enter Full name' }]}>
                                <Input placeholder="Type full name" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[12, 0]}>
                        <Col lg={12}>
                            <Form.Item label="Telefon Raqam" name="phone" rules={[{ required: "phone", message: 'Please enter phone number' }]}>
                                <Input placeholder="Type phone number" />
                            </Form.Item>
                        </Col>
                        <Col lg={12}>
                            <Form.Item label="Full name" name="full_name" rules={[{ required: true, message: 'Please enter Full name' }]}>
                                <Input placeholder="Type full name" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Button type="primary" htmlType="submit">
                        Create Product
                    </Button>
                </Form>
            </Drawer>
        </div>
    )
}
