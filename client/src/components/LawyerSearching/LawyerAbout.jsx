import React from "react";

const LawyerAbout = ({lawyer}) => {
    
    
    return (
        <div>
            <div>
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                    About of
                    <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                        {lawyer.fullname}
                    </span>
                </h3>
                <p className="text__para">
                    {lawyer.bio}
                </p>
            </div>

           
                
            
        </div>
    )
};

export default LawyerAbout;