import { Form, Input } from 'antd'

const AddAndUpdate = () => {
    return (
        <div style={{ padding: '20px' }}>
            <Form layout='vertical'>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                    <Form.Item label="Số điện thoại" style={{ flex: '1' }}>
                        <Input placeholder='Số điện thoại' />
                    </Form.Item>
                    <Form.Item label="Họ tên" style={{ flex: '1' }}>
                        <Input placeholder='Họ tên' />
                    </Form.Item>
                    <Form.Item label="Email" style={{ flex: '1' }}>
                        <Input placeholder='Email' type='email' />
                    </Form.Item>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                    <Form.Item label="Mật khẩu" style={{ flex: '1' }}>
                        <Input placeholder='Mật khẩu' />
                    </Form.Item>
                    <Form.Item label="CMND/CCCD" style={{ flex: '1' }}>
                        <Input placeholder='CMND/CCCD' />
                    </Form.Item>
                    <Form.Item label="Dịch vụ giao hàng" style={{ flex: '1' }}>
                        <Input placeholder='Dịch vụ giao hàng' />
                    </Form.Item>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                    <Form.Item label="Địa chỉ" style={{ flex: '2' }}>
                        <Input placeholder='Địa chỉ' />
                    </Form.Item>
                    <Form.Item label="Trạng thái" style={{ flex: '1' }}>
                        <Input placeholder='Trạng thái' />
                    </Form.Item>
                </div>
                <Form.Item label="Thuộc trạm">
                    <Input defaultValue="Kho quận 7" disabled={true} />
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddAndUpdate