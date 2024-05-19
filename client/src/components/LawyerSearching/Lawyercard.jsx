import React from "react";
import './LawyerUI.css';
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";


const LawyerCard = ({lawyer}) => {

    const {fullname, speciality, photo, price} = lawyer;
    return (
        <div  style={{ marginBottom: 50, marginLeft:20 }}>
            <div className="image-container">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="image" alt="" />
            </div>
            <h2 className="lawyer-name" style = {{ marginTop: 5}}>{fullname}</h2>
            <div className="mt-2 lg:mt-4 flex items-center justify-between">
                <span className=" bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semiabold rounded">
                    {speciality}
                </span>
            </div>
            <div className="mt-[9px] lg:mt-1 flex items-center justify-between">
                <div>
                   <div></div>
                    <div className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] text-headingColor">
                        Ticket Price: {price}$
                    </div>
                    
                </div>
                
                <Link to={`/lawyerInfo/${lawyer._id}`}
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto
                    flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                        <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
            </div>
        
        </div>
    )
}

export default LawyerCard