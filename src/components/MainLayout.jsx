import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div
      className="relative min-h-screen w-full"
      style={{
        background: `
          radial-gradient(circle at 15% 20%, rgba(255, 183, 155, 0.55) 0%, rgba(255, 183, 155, 0) 45%),
          radial-gradient(circle at 25% 60%, rgba(255, 140, 105, 0.35) 0%, rgba(255, 140, 105, 0) 40%),
          radial-gradient(circle at 80% 30%, rgba(168, 213, 186, 0.5) 0%, rgba(168, 213, 186, 0) 45%),
          radial-gradient(circle at 70% 75%, rgba(150, 200, 170, 0.45) 0%, rgba(150, 200, 170, 0) 50%),
          #faf6f1
        `,
      }}
    >
      <Navbar />
      <Outlet />
    </div>
  )
}

export default MainLayout