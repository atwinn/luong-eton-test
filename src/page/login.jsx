
import { Form, Input, Button, message } from 'antd'

const Login = () => {
    const onFinish = (value) => {
        const username = value.username //Lấy tài khoản của người dùng nhập từ Form
        const password = value.password //Lấy mật khẩu của người dùng nhập từ Form
        if (username === "admin" && password === "admin") {
            message.success("Chào mừng admin")
        } else message.warning("Tài khoản hoặc mật khẩu không chính xác")
    }

    return (
        <div className='login-container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Form
                name="loginForm"
                labelCol={{
                    span: 7,
                }}
                wrapperCol={{
                    span: 17,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <h2 style={{ marginBottom: '40px', textAlign: 'center' }}>Đăng Nhập</h2>
                <Form.Item
                    label="Tài khoản"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Tài khoản là bắt buộc',
                        },
                    ]}
                >
                    <Input allowClear />
                </Form.Item>

                <Form.Item
                    label="Mật khẩu"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Mật khẩu là bắt buộc',
                        },
                    ]}
                >
                    <Input.Password allowClear />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 24 }} style={{ display: 'flex', justifyContent: 'end' }}>
                    <a href="">
                        Quên mật khẩu?
                    </a>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login