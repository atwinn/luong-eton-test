import { Table, Tag, Select } from 'antd'
import { data } from './employeesData';

const EmployeesTable = () => {

    const columns = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Mã nhân viên',
            dataIndex: 'mnv',
            key: 'mnv',
        },
        {
            title: 'Họ tên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'sdt',
            key: 'sdt',
        },
        {
            title: 'Loại nhân viên',
            dataIndex: 'loainv',
            key: 'loainv',
        },
        {
            title: 'Thuộc trạm',
            dataIndex: 'thuoctram',
            key: 'thuoctram',
        },
        {
            title: 'Là quản lý trạm',
            dataIndex: 'quanly',
            key: 'quanly',
        },
        {
            title: 'Dịch vụ giao hàng',
            dataIndex: 'dichvu',
            key: 'dichvu',
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: ((text) => <Tag color='green' >{text}</Tag>)
        },
        {
            title: 'Action',
            key: 'action',
            render: (() =>
                <Select
                    placeholder="Thao tác"
                    options={[
                        {
                            value: 0,
                            label: 'Sửa',
                        },
                        {
                            value: 1,
                            label: 'Xoá',
                        },
                    ]}
                />)
        },
    ];
    return (
        <Table columns={columns} dataSource={data} />
    )
}

export default EmployeesTable