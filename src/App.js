import { useState } from 'react'
import Sidebar from './components/sidebar/sidebar'
import Main from './components/main/main'
import Navbar from './components/navbar/navbar'
import './App.css'

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const openSidebar = () => {
    setSidebarOpen(true)
  }
  const closeSidebar = () => {
    setSidebarOpen(false)
  }
  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main/>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  )
}

export default App
