import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../../routes/router';
const { Header, Sider, Content } = Layout;

const Category = () => {


    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{
            width: '100%',
            height: "100%"
        }}>
            <Sider trigger={null} collapsible collapsed={collapsed} >
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    items={routes}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content>
                    <Routes>
                        {
                            routes.map((item) => (
                                <Route path={item.label} element={item.component} key={item.key} />
                            ))
                        }
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
};
export default Category;