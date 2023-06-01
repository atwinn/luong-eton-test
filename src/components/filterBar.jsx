import { Input, Select, DatePicker, Button, Space } from 'antd'

const FilterBar = () => {
    const { RangePicker } = DatePicker
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '5px', marginBottom: '50px' }}>
                <Input placeholder='Từ khoá' style={{ width: '100%' }} />
                <Select
                    style={{ width: '100%' }}
                    placeholder="Trạng thái"
                    options={[
                        {
                            value: 0,
                            label: 'Chưa kích hoạt',
                        },
                        {
                            value: 1,
                            label: 'Đã kích hoạt',
                        },
                    ]}
                />
                <Select
                    style={{ width: '100%' }}
                    placeholder="Loại nhân viên"
                    options={[
                        {
                            value: 0,
                            label: 'Tài xế',
                        },
                        {
                            value: 1,
                            label: 'Điều phối',
                        },
                    ]}
                />
                <RangePicker style={{ width: '100%' }} placeholder={['Ngày bắt đầu', 'Ngày kết thúc']} />
            </div>
            <Space>
                <Button type='primary'>Tìm kiếm</Button>
                <Button>Làm mới</Button>
            </Space>
        </>
    )
}

export default FilterBar