import React from "react";
import './AdsIndex.css';
import { FaClock, FaHeadset, FaSearch } from "react-icons/fa";
 
const Ads = () => {
    return (
    <section className="why-us mt-5 md:mt-0">
    <div className="container mx-auto px-4">

        <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 flex items-stretch">
                <div className="content">
                    <h3>Why Choose Us?</h3>
                    <p>
                    Experience justice that you truly deserve with the help of our highly-reputed lawyers and attorneys. Our company is dedicated to protecting your rights and ensuring that you receive the justice you are entitled to. Choose us today to secure your future.
                    </p>  
                </div>
            </div>
            <div className="w-full lg:w-2/3 px-4 flex items-stretch">
                <div className="icon-boxes flex flex-col justify-center w-full">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/3 px-4 flex items-stretch">
                            <div className="icon-box mt-4 md:mt-0 flex flex-col items-center">
                                <FaHeadset className="icon"/>
                                <h4>Appointment</h4>
                                <h6>24 Hours Service</h6>
                                <p>You can schedule an appointment at any time with an lawyer on our website.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 flex items-stretch">
                            <div className="icon-box mt-4 md:mt-0 flex flex-col items-center">
                                <FaSearch className="icon"/>
                                <h4>Lawyer Searching</h4>
                                <h6>Convenience</h6>
                                <p>Easy to search for lawyers by specialty and connect to them conveniently.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 flex items-stretch">
                            <div className="icon-box mt-4 md:mt-0 flex flex-col items-center">
                                <FaClock className="icon"/>
                                <h4>Working Hours</h4>
                                <h6>Timing schedule</h6>
                                <ul className='list-none p-0'>
                                <li className="flex justify-between whitespace-nowrap" ><p>Sun - Wed : </p> <p>8:00 - 17: 00</p></li>
                                <li className="flex justify-between whitespace-nowrap" ><p>Thus - Fri : </p> <p>9:00 - 17: 00</p></li>
                                <li className="flex justify-between whitespace-nowrap" ><p>Sat - Sun : </p> <p>10:00 - 17: 00</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>

    )

}
export default Ads;
