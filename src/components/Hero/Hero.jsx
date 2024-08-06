import React, { useState } from 'react'
import BgImage from "../../assets/hero-bg.png";
import CoffeeMain from "../../assets/hero-1.png";
import Navbar from '../Navbar/Navbar';
import { motion } from "framer-motion"
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}

const Hero = () => {

    const [sidebar, setSidebar] = React.useState(false)

    return (
        <main style={bgImage}>
            <section className=' relative min-h-[750px] w-full'>
                <div className='container'>
                    {/* Navbar section */}
                    <Navbar sidebar={sidebar} setSidebar={setSidebar} />
                    {/* Hero section */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[800px]'>

                        {/* text content section */}
                        <div className='text-lightorange mt-[100px] md:mt-0 p-4 space-y-28'>
                            <motion.h1
                                initial={{ opacity: 0, y: -100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 1,
                                }}
                                className='text-7xl font-bold leading-tight ml-14'>
                                Blvck Tumbler
                            </motion.h1>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 1.2,
                                }}
                                className='relative' >
                                <div className='relative z-10 space-y-4'>
                                    <h1 className='text-2xl'>Black Lifestyle Lovers,</h1>
                                    <h1>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quidem similique assumenda modi magnam labore dolor, deleniti doloremque
                                    </h1>
                                </div>
                                <div className='absolute -top-6 -left-10 w-[250px] h-[180px] bg-green-950/25'>
                                </div>
                            </motion.div>

                        </div>
                        {/* Hero Image section */}
                        <div className='relative'>
                            <motion.img
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.4,
                                }}
                                src={CoffeeMain} alt="" className='relative z-40 h-[400px] md:h-[500px] img-shadow ' />

                            {/* green circle ring*/}
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.8,
                                }}
                                className='h-[180px] w-[180px] absolute -top-12 -right-8 border-primary rounded-full border-[20px] z-10 sm:-right-100 '>
                            </motion.div>

                            {/* big text section */}
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.8,
                                }}
                                className='absolute -top-20 left-[300px] z-[1]'>
                                <h1 className='text-[130px] scale-150 font-bold text-darkgray/30 leading-none'>
                                    Blvck Tumbler
                                </h1>
                            </motion.div>
                        </div>
                        {/* third div section */}
                        <div className='hidden lg:block'>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 1.2,
                                }}
                                className='text-lightorange mt-[100px] md:mt-0 p-4 space-y-28'>
                                <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14'>Blvck Tumbler</h1>
                                <div className='relative' >
                                    <div className='relative z-10 space-y-4'>
                                        <h1 className='text-2xl'>Black Tumbler</h1>
                                        <h1>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quidem similique assumenda modi magnam
                                        </h1>
                                    </div>
                                    <div className='absolute -top-6 -right-10 w-[250px] h-[180px] bg-primary'>
                                    </div>
                                </div>

                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* sidebar Menu Section */}
                {sidebar && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                        }}
                        className='absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primaryDark/80 to-primaryDark/80 backdrop-blur-sm z-10'>
                        <div className='w-full h-full flex justify-center items-center'>
                            <div className='flex flex-col justify-center items-center gap-6 text-white'>
                                <div className='w-[1px] h-[70px] bg-white'>
                                </div>
                                {/* social Icons */}

                                <div className='inline-block p-2 rounded-full cursor-pointer border border-white text-2xl'>
                                    <FaFacebookF />
                                </div>
                                <div className='inline-block p-2 rounded-full cursor-pointer border border-white text-2xl' >
                                    <FaTwitter />
                                </div>
                                <div className='inline-block p-2 rounded-full cursor-pointer border border-white text-2xl'>
                                    <FaInstagram />
                                </div>
                                <div className='w-[1px] h-[70px] bg-white'>

                                </div>
                            </div>
                        </div>
                    </motion.div>
                )
                }

            </section>
        </main>
    )
}

export default Hero;