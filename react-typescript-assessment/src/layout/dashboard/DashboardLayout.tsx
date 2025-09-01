import { Outlet } from 'react-router-dom'
import Header from '../../components/dashboard/header/Header'

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default DashboardLayout