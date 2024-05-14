import { Button } from "antd"
import { WrapperHeader } from "../AdminProduct/style"
import { PlusOutlined } from "@ant-design/icons"
import TableComponent from "../TableComponent/TableComponent"

const AdminUser = () => {
  return (
    <div>
      <WrapperHeader>Quản lý người dùng</WrapperHeader>
      <div style={{ marginTop: '20px' }}>
        <Button style={{ height: '150px', width: '150px', }}><PlusOutlined /></Button>
      </div>
      <div>
        <TableComponent />
      </div>
    </div>
  )
}

export default AdminUser