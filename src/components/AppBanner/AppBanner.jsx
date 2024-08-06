import React from 'react';
import bannerImg from '../../assets/App-banner.jpg';
import { motion } from "framer-motion"

const BannerStyle = {
    backgroundImage: `linear-gradient(359.89deg, #000000bd 19.45%, #00000062 55.07%, #00000000 73.63%), url(${bannerImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '90%',
};

const AppBanner = () => {
    return (
        <div className='bg-gradient-to-r  pt-12 pb-8 bg-lightcolor shadow-lg '>

            <div className='container'>
                {/* header section */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.2,
                    }}
                    className='pl-16 grid grid-flow-col justify-between pr-16'>
                    <h1 className='text-2xl font-bold text-green-900'>Learn more about the world of coffee!</h1>
                    <h1 className='text-xs font-bold text-green-600 cursor-pointer hidden lg:block'>Discover More</h1>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.4,
                    }}
                    style={BannerStyle}
                    className='sm:min-h-[350px] sm:flex sm:items-center mx-auto rounded-lg mt-8 relative overflow-hidden cursor-pointer '
                >
                    {/* Dark overlay on hover */}
                    <div className='absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300'></div>

                    <div className='py-6 px-8 '>
                        <div className='space-y-32 max-w-xl'>
                            <button className=' bg-white text-xs p-0.5 rounded-md text-green-600 '>
                                Coffee Culture
                            </button>
                            <div>
                                <h1 className='text-3xl font-bold text-white'>
                                    Art and Science of Coffee Brewing
                                </h1>
                                <p className='text-white mt-4'>
                                    Master the perfect brew with Starbucks! Learn and science of coffee brewing.
                                </p>
                                <button className=' mt-14 px-20 py-2 bg-white text-xs font-bold rounded-2xl'>
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className='flex mt-8 justify-center items-center sm:hidden'>
                <button className='justify-center items-center  px-14 py-2 rounded-full bg-black text-white cursor-pointer'>
                    Discover More
                </button>
            </div>

        </div>
    );
}

export default AppBanner;
