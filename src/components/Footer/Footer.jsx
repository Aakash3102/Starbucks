import React from 'react'
import logo from "../../assets/logo.webp"
import appstoreiOS from "../../assets/appstoreiOS.png"
import appstoreAndroid from "../../assets/appstoreAndroid.png"

import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white mt-10 '>
            <div className='container mt-20'>
                <div className='pl-16 pr-16 grid'>
                    <div className='grid grid-cols-1 sm-grid-cols-2 md:grid-cols-6 gap-8 '>

                        {/* comapny logo */}
                        <div className='space-y-6'>
                            <img
                                initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.2,
                                }}
                                src={logo} alt="" className='h-24 w-24 -mt-8 ' />
                        </div>
                        {/* company details  */}
                        <div className='space-y-4'>
                            <div className='text-2xl font-semibold'>
                                About Us
                            </div>
                            <ul className='text-sm space-y-6'>
                                <li>Our Heritage</li>
                                <li>Coffeehouse</li>
                                <li>Our Company</li>
                            </ul>
                        </div>
                        <div className='space-y-4'>
                            <div className='text-2xl font-semibold'>
                                Responsibility
                            </div>
                            <ul className='text-sm space-y-6'>
                                <li>Diversity</li>
                                <li>Community</li>
                                <li>Ethical Sourcing</li>
                                <li>Environmental Stewardship</li>
                                <li>Learn More</li>
                            </ul>
                        </div>
                        <div className='space-y-4'>
                            <div className='text-2xl font-semibold'>
                                Quick Links
                            </div>
                            <ul className='text-sm space-y-6'>
                                <li>Privacy Policy</li>
                                <li>FAQs</li>
                                <li>Customer Service</li>
                                <li>Delivery</li>
                                <li>Season's Gifting</li>
                                <li>Beverage Subscription</li>
                                <li>Starbucks Rewards Day Offer</li>
                            </ul>
                        </div>
                        <div className='space-y-4'>
                            <div className='text-2xl font-semibold'>
                                SOCIAL MEDIA
                            </div>
                            <div className='flex space-x-8 text-2xl'>
                                <FaFacebookF />
                                <FaTwitter />
                                <FaInstagram />
                            </div>
                        </div>
                        {/* Social media icon */}
                        <div className='space-y-3'>
                            <img src={appstoreiOS} alt="" />
                            <img src={appstoreAndroid} alt="" />
                        </div>
                    </div>
                </div>
                <hr className='mt-16 h-hr-thick bg-white border-none' />
            </div>


            <div className='mt-6 pl-16 pr-16 text-xs flex justify-center text-center'>
            © 2024 Starbucks Coffee Company. All rights reserved.

            </div>
        </div>
    )
}

export default Footer