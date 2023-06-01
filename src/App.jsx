import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'antd/dist/reset.css';
import Login from './page/login';
import EmployeesManage from "./page/employees/employees-manage";
import AddAndUpdate from "./page/employees/addAndUpdate";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/employees" element={<EmployeesManage />} />
        <Route path="/addemployee" element={<AddAndUpdate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
