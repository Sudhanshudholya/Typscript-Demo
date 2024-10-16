import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (

    <div className='flex h-screen'>
      <Sidebar />
      <div className='flex-1 p-6 bg-gray-100 overflow-auto'>
        <Outlet />
      </div>
    </div>

  )
}

export default Layout

