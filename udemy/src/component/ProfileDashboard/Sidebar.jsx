import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

import { BsSpeedometer } from "react-icons/bs";
import { AiOutlineLaptop } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineWechat } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { MdPowerSettingsNew } from "react-icons/md";

const Sidebar = () => {
  const [isOpen,setIsOpen]=React.useState(false)
  const routeData = [
    {
      path: "profile",
      name: "Dashboard",
      icon: <BsSpeedometer />,
    },
    {
      path: "courses",
      name: "courses",
      icon: <AiOutlineLaptop />,
    },
    {
      path: "notification",
      name: "notification",
      icon: <IoMdNotificationsOutline />,
    },
    {
      path: "chat",
      name: "chat",
      icon: <AiOutlineWechat />,
    },
    {
      path: "setting",
      name: "setting",
      icon: <AiOutlineSetting />,
    },
  ];
  const showAnimation={
    hidden:{
     width:0,
     opacity:0,
     transition:{
       duration:'0.5'
     }
    },
    show:{
     width:"auto",
     opacity:1,
     transition:{
       duration:'0.2'
     }
    }

  }

  return (
    <div className=" mt-4 d-flex">
      <motion.div
        animate={{ width: isOpen ? "250px" : "50px",transition:{
          duration:0.5,
          type:'spring',
          damping:8
        } }}
        className="sidebar-container pt-3"
      >
        <AiOutlineMenuUnfold
          className="toggle-menu"
          onClick={() => setIsOpen(!isOpen)}
        />
        <section className="route p-1 mt-3 ">
          {routeData.map((route, i) => (
            <NavLink
            activeClassName="active"
              to={route.path}
              key={route.path}
              className="nav-link-wraper gap-3"
            >
              <div className="icon  ">{route.icon}</div>
              <AnimatePresence>
                {isOpen && <motion.div initial="hidden" animate="show" exit="hidden" variant={showAnimation} className={`route-text`}>{route.name}</motion.div>}
              </AnimatePresence>
            </NavLink>
          ))}
        </section>
      </motion.div>

      <main style={{width:'100%'}}>
        <Outlet />
      </main>
    </div>
  );
}

export default Sidebar