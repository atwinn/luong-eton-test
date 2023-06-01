import { useEffect } from 'react'
import ActionBar from '../../components/actionBar'
import { useNavigate } from 'react-router-dom'
import FilterBar from '../../components/filterBar'
import { Space } from 'antd'
import EmployeesTable from './employeesTable'

const EmployeesManage = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const user_auth = localStorage.getItem("username")
    if (!user_auth) navigate("/") // Không có user nào login sẽ bị đẩy về trang login
  }, [navigate])

  return (
    <div style={{ padding: '20px', minHeight: '100vh' }}>
      <Space direction='vertical' style={{ width: '100%' }} size='large' >
        <ActionBar />
        <FilterBar />
        <EmployeesTable />
      </Space>
    </div>
  )
}

export default EmployeesManage