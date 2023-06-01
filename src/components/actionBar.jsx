import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const ActionBar = () => {
    const navigate = useNavigate()
    const returnToHome = () => {
        navigate("/")
        localStorage.removeItem("username")
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ fontWeight: 'bold', cursor: 'pointer' }} onClick={returnToHome}>← Quay lại</div>
            <Button type='primary' onClick={() => navigate("/addemployee")}>+ Thêm nhân viên</Button>
        </div >
    )
}

export default ActionBar