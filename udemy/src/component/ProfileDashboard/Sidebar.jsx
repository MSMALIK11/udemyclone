import React from 'react'
import { Outlet } from 'react-router-dom'

const Sidebar = () => {

  return (
    <div className="w-75  mt-4  d-flex">
    
      <div className='sidebar-container pt-3'>
        <h1>home</h1>
        <h1>courses</h1>
        <h1>my learning</h1>
       
      </div>
      <main>
        
        <Outlet />
      </main>
    </div>
  );
}

export default Sidebar