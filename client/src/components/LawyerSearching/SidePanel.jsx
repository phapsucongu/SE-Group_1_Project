import React from "react";
import { Link } from "react-router-dom";

const SidePanel = ({lawyer,id}) => {


    return (
        <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
            <div className="flex items-center justify-between">
               <p className="text__para mt-0 font-semibold"> Ticket Price
               </p>
               <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8
               text-headingColor font-bold">
                 {lawyer.price} $
               </span>
            </div>

            <div className="mt-[30px]">
                <p className="text__para mt-0 font-semibold text-headingColor">
                    Status: Active
                </p>

                <ul className="mt-3">
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            Online
                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            Google Meet
                        </p>
                    </li>

                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            Offline
                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            322 My Dinh Building
                        </p>
                    </li>
                </ul>
            </div>
            <Link to={`/appointment/${id}`}>
            <button className="btn px-2 w-full rounded-md">Book Appointment</button>
            </Link>
        </div>
    );
};

export default SidePanel;