import { Modal, Radio } from 'antd'
import { useNavigate } from 'react-router-dom'

const ModalChooseRole = ({ open, close }) => {
    const navigate = useNavigate();
    const onChange = (value) => {
        console.log(value);
    }

    const onOk = () => {
        navigate("/employees")
        close()
    }

    return (
        <>
            <Modal
                title="Chọn chức năng"
                open={open}
                onOk={onOk}
                onCancel={close}
                centered
                okText='Xác nhận'
                cancelText='Thoát'
                closable={false}
            >
                <Radio.Group
                    onChange={onChange}
                    defaultValue={1}
                    style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '20px', marginBottom: '20px' }}
                >
                    <Radio value={1}>Quản trị</Radio>
                    <Radio value={2}>Vận hành</Radio>
                </Radio.Group>
            </Modal>
        </>
    )
}

export default ModalChooseRole