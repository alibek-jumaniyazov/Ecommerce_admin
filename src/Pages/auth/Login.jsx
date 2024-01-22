import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';

export default function Login() {

    const navigate = useNavigate()

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const { setUserData } = useContext(UserContext)

    const handleCLick = async (event) => {
        try {
            const response = await axios.post('https://ecommerce.main-gate.appx.uz/dev/adminka/auth/login', { username: event.username, password: event.password })
            if (response.data.isOk) {
                setUserData({
                    isAuth: true,
                    tokens: {
                        access: response.data.accessToken,
                        refresh:  response.data.refreshToken,
                    },
                })
            }
            navigate('/')
            console.log(response.data);
            console.log(event);
        }
        catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='Login'>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={handleCLick}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>



                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
