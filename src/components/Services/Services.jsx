import React from 'react';
import { motion } from "framer-motion";
import Bestseller from "../../assets/coffee/Bestseller.jpg";
import CoffeeAtHome from "../../assets/coffee/CoffeeAtHome.jpg";
import Drinks from "../../assets/coffee/Drinks.jpg";
import Food from "../../assets/coffee/Food.jpg";
import Merchandise from "../../assets/coffee/Merchandise.jpg";
import ReadyToEat from "../../assets/coffee/ReadyToEat.jpg";

const servicesData = [
    {
        id: 1,
        image: Bestseller,
        title: "Bestseller",
    },
    {
        id: 2,
        image: CoffeeAtHome,
        title: "Coffee At Home",
    },
    {
        id: 3,
        image: Drinks,
        title: "Drinks",
    },
    {
        id: 4,
        image: Food,
        title: "Food",
    },
    {
        id: 5,
        image: Merchandise,
        title: "Merchandise",
    },
    {
        id: 6,
        image: ReadyToEat,
        title: "Ready to Eat",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            stiffness: 150,
            damping: 10,
            ease: "easeInOut",
        },
    },
};
const containerVariants = {
    hidden:{opacity: 1},
    visible:{
        opacity:1,
        transition:{
            delay:0.6,
            staggerChildren:0.4,
        },
    },
};

const Services = () => {
    return (
        <div className='service container mt-16 space-y-4 '>
            {/* header section */}
            <div>
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.2,
                    }}
                    className='text-2xl font-bold text-green-900 pl-16 '
                >
                    Handcrafted Curations
                </motion.h1>
            </div>
            {/* card section */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                }}
                className='grid grid-cols-3 md:grid-cols-6 sm:grid-cols-3'>
                {servicesData.map((service) => (
                    <motion.div 
                    variants={cardVariants}
                    key={service.id} className='text-center p-4 space-y-2'>

                        <img src={service.image} alt={service.title} className='w-28 mx-auto rounded-full object-cover hover:border-2 hover:border-green-800 cursor-pointer' />

                        <h2 className='font-bold'>{service.title}</h2>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Services;
