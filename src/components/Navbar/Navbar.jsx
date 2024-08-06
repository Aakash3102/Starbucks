import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import logo from "../../assets/logo.webp"
import { motion } from "framer-motion"

const Navbar = ({sidebar, setSidebar}) => {
  return (
    <nav className='absolute top-0 left-0 w-full pt-10 text-white z-[999]'>
        <div className='container'>
            <div className='flex justify-between items-center '>
                {/*logo section */}
                <motion.img 
                 initial={{ opacity: 0, y: -100 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{
                     type: "spring",
                     stiffness: 100,
                     damping: 10,
                     delay: 0.2,
                 }}
                src={logo} alt="" className='h-24 w-24 -mt-8' />
                {/*Hamburger Menu section */}
                <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.2,
                }}
                onClick={()=>setSidebar(!sidebar)}
                >
                    <CiMenuBurger className='text-3xl cursor-pointer -mt-8'/>
                </motion.div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar