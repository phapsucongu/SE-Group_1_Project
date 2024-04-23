import React from "react";

const LawyerAbout = () => {
    
    
    return (
        <div>
            <div>
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                    About of
                    <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                        Chloe Scott
                    </span>
                </h3>
                <p className="text__para">
                My name is Chloe Scott, and I am an experienced criminal defense attorney. I am dedicated to protecting my clients' rights and providing them with strong legal representation. With a focus on criminal law, I have successfully handled cases involving a wide range of offenses, including white-collar crimes and drug offenses.

As a passionate advocate for justice, I am committed to fighting for the best possible outcomes for my clients. I approach each case with meticulous attention to detail, carefully analyzing evidence and developing compelling strategies. I understand the complexities of the legal system and strive to navigate it effectively on behalf of my clients.

If you are facing legal challenges, I am here to help. I will listen to your concerns, provide personalized advice, and work tirelessly to protect your rights. With my expertise in criminal law, I am confident in my ability to provide you with the strong legal representation you deserve.

Please feel free to reach out to me at chloe.scott@example.com. I look forward to assisting you in your legal matters.
                </p>
            </div>

            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Education
                </h3>

                <ul className="pt-4 md:p-5">
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
                        <div>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                                23 June, 2008
                            </span>
                            <p className="text-[16px] leading-6 font-medium text-textColor">
                                PHD in Criminal Defense
                            </p>
                        </div>
                        <p className="text-[14px] leading-5 font-medium text-textColor">
                        Harvard University, Cambridge.
                        </p>


                    </li>
                </ul>
            </div>

            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Exprerience
                </h3>

                <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                    <li className="p-4 rounded bg-[#fff9ea]">
                        <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                            07-04-2010
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">
                                PHD in Criminal Defense
                        </p>
                        <p className="text-[14px] leading-5 font-medium text-textColor">
                            Harvard University, Cambridge, Massachusetts.
                        </p>
                    </li>
                </ul>
                
            </div>
        </div>
    )
};

export default LawyerAbout;