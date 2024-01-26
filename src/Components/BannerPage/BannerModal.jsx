import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Select } from 'antd';

export default function BannerModal({ postBanner, open, setOpen }) {
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    function handleValue(e) {
        postBanner(e)
    }



    return (
        <div className='openModal'>
            <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                Add Banner
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
                            <Form.Item label="Name uz" name="title_uz" rules={[{ required: true, message: 'Please enter Name uz' }]}>
                                <Input placeholder="Type name uz" />
                            </Form.Item>
                        </Col>
                        <Col lg={12}>
                            <Form.Item label="Name ru" name="title_ru" rules={[{ required: true, message: 'Please enter Name ru' }]}>
                                <Input placeholder="Type name ru" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[12, 0]}>
                        <Col lg={12}>
                            <Form.Item label="Slug" name="slug" rules={[{ required: true, message: 'Please enter Name ru' }]}>
                                <Input placeholder="Type name ru" />
                            </Form.Item>
                        </Col>
                        <Col lg={12}>
                            <Form.Item label="Url" name="url" rules={[{ type: "", message: 'Please enter a valid URL' }]}>
                                <Input placeholder="Paste url" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[12, 0]}>
                        <Col lg={12}>
                            <Form.Item label="Image url" name="image" rules={[{ type: 'url', message: 'Please enter a valid URL' }]}>
                                <Input placeholder="Paste image url" />
                            </Form.Item>
                        </Col>
                        <Col lg={12}>
                            <Form.Item label="Position" name="position" rules={[{ required: true, message: 'Please enter Name ru' }]}>
                                <Input placeholder="Type position" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Button type="primary" htmlType="submit">
                        Add Banner
                    </Button>
                </Form>
            </Drawer>
        </div>
    )
}
