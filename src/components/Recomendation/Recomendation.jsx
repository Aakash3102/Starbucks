import React from 'react'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import var1 from "../../assets/var1.webp"
import var2 from "../../assets/var2.webp"
import var3 from "../../assets/var3.webp"
import var4 from "../../assets/var4.webp"
import veg from "../../assets/veg.svg"

const Recommendation = () => {
    return (
        <div className='bg-gradient-to-r pb-16 bg-lightcolor mb-10 shadow-lg'>
            <div className='container mt-20'>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.2,
                    }}
                    className='pl-4 sm:pl-6 lg:pl-16 grid grid-flow-col justify-between pr-4 sm:pr-6 lg:pr-16'>
                    <h1 className='text-2xl font-bold text-green-900 mt-10'>Barista Recommends</h1>
                    <h1 className='text-xs font-bold text-green-600 cursor-pointer hidden lg:block mt-10'>View Menu</h1>
                </motion.div>

                <div className='px-4 sm:px-6 lg:px-20 mt-7'>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className='bg-white py-4 px-6 rounded-xl'>
                                <div className='flex space-x-5'>
                                    <img src={var1} alt="" className='w-20 h-20 rounded-xl object-cover' />
                                    <div className='space-y-1'>
                                        <img src={veg} alt="" />
                                        <h1 className='font-bold text-sm tracking-wider'>Cappuccino</h1>
                                        <h1 className='text-xxs'>SHORT()</h1>
                                    </div>
                                </div>
                                <div className='flex justify-between mt-2'>
                                    <h1 className='font-bold text-sm p-2'>₹ 283<span className='text-xs'>.50</span></h1>
                                    <button className='w-24 h-6 p-4 flex justify-center items-center bg-green-700 text-xs font-semibold rounded-full text-white tracking-wider'>Add item</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-white py-4 px-6 rounded-xl'>
                                <div className='flex space-x-5'>
                                    <img src={var2} alt="" className='w-20 h-20 rounded-xl object-cover' />
                                    <div className='space-y-1'>
                                        <img src={veg} alt="" />
                                        <h1 className='font-bold text-sm tracking-wider'>Signature Hot Chocolate</h1>
                                        <h1 className='text-xxs'>SHORT(237 ML).284 kcal</h1>
                                    </div>
                                </div>
                                <div className='flex justify-between mt-2'>
                                    <h1 className='font-bold text-sm p-2'>₹ 309<span className='text-xs'>.75</span></h1>
                                    <button className='w-24 h-6 p-4 flex justify-center items-center bg-green-700 text-xs font-semibold rounded-full text-white tracking-wider'>Add item</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-white py-4 px-6 rounded-xl'>
                                <div className='flex space-x-5'>
                                    <img src={var3} alt="" className='w-20 h-20 rounded-xl object-cover' />
                                    <div className='space-y-1'>
                                        <img src={veg} alt="" />
                                        <h1 className='font-bold text-sm tracking-wider'>Vanilla Milkshake</h1>
                                        <h1 className='text-xxs'>TALL (354 ML) .PER SERVE(354ml)-531 Kcal</h1>
                                    </div>
                                </div>
                                <div className='flex justify-between mt-2'>
                                    <h1 className='font-bold text-sm p-2'>₹ 378 <span className='text-xs'>.00</span></h1>
                                    <button className='w-24 h-6 p-4 flex justify-center items-center bg-green-700 text-xs font-semibold rounded-full text-white tracking-wider'>Add item</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-white py-4 px-6 rounded-xl'>
                                <div className='flex space-x-5'>
                                    <img src={var4} alt="" className='w-20 h-20 rounded-xl object-cover' />
                                    <div className='space-y-1'>
                                        <img src={veg} alt="" />
                                        <h1 className='font-bold text-sm tracking-wider'>Cold Brew Black</h1>
                                        <h1 className='text-xxs'>SHORT(Short Cold Black)</h1>
                                    </div>
                                </div>
                                <div className='flex justify-between mt-2'>
                                    <h1 className='font-bold text-sm p-2'>₹ 299 <span className='text-xs'>.25</span></h1>
                                    <button className='w-24 h-6 p-4 flex justify-center items-center bg-green-700 text-xs font-semibold rounded-full text-white tracking-wider'>Add item</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-white py-4 px-6 rounded-xl'>
                                <div className='flex space-x-5'>
                                    <img src={var1} alt="" className='w-20 h-20 rounded-xl object-cover' />
                                    <div className='space-y-1'>
                                        <img src={veg} alt="" />
                                        <h1 className='font-bold text-sm tracking-wider'>Tall Java Chip Frappuccino</h1>
                                        <h1 className='text-xxs'>TALL()</h1>
                                    </div>
                                </div>
                                <div className='flex justify-between mt-2'>
                                    <h1 className='font-bold text-sm p-2'>₹ 388 <span className='text-xs'>.50</span></h1>
                                    <button className='w-24 h-6 p-4 flex justify-center items-center bg-green-700 text-xs font-semibold rounded-full text-white tracking-wider'>Add item</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className='flex mt-8 justify-center items-center sm:hidden'>
                    <button className='px-14 py-2 rounded-full bg-black text-white cursor-pointer'>
                        View Menu
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Recommendation;
