import React, { useContext, useState } from "react";
import userImg from "../../../assets/images/ladki.png";
import { authContext } from "../../../context/AuthContext";

import Profile from "../client-account/Profile";
import ChangePassword from "./ChangePassword";
import Loading from "../../Loader/Loading"

import userGetProfile from "../../../hooks/useFecthData";
import { BASE_URL } from "../../../utils/config";
const ClientAccount = () => {

    const {dispatch}  = useContext(authContext);

    const [tab, setTab] = useState("")
    const handleLogout = () => {
        dispatch({type: 'LOGOUT'})
    }
// const {data:userData, loading, error} = userGetProfile(`${BASE_URL}/user/profile/me`);
// console.log(userData, "userData");

    return (
        <section>
    <div className="max-w-[1170px] px-5 mx-auto">

     {/*loading && <Loading/>*/}

    {/*!loading && !error &&*/ (
            <div className="grid md:grid-cols-3 gap-10">
                <div className="pb-[50px] px-[30px] rounded-md border-r pl-3">
                    <div className="flex items-center justify-center">
                        <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                            <img 
                            src={userImg}
                             alt="" 
                             className="w-full h-full rounded-full" />
                        </figure>
                    </div>
                    <div className = "text-center mt-4">  
                    <div className="text-center mt-4">
                        <h3 className="text-headingColor text-[18px] leading-[30px] font-bold">
                            Hoang Duc Duong
                        </h3>
                        <p className ="text-textColor text-[15px] leading-6 font-medium">
                            comehere.hdd@gmail.com
                        </p>
                    </div>

                        <div className="mt-[50px] md:mt-[20px] ">
                            <button 
                            onClick={handleLogout}
                            className = "w-full bg-[#181A1E] p-3 text-[16px] font-bold leading-7 rounded-md text-white"> Logout </button>
                            
                        </div>

                    </div>
                </div>

            <div className = "md:col-span-2 md:px-[30px]">
                <div>
                    <button onClick={()=> setTab("profile")} 
                    className = {` ${
                        tab === "profile" && "bg-primaryColor text-while font-semibold"
                    } p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`} 
                    >
                    Profile    
                    </button>
                    <button onClick={()=> setTab("changepassword")} 
                    className = {` ${
                        tab === "changepassword" && "bg-primaryColor text-while font-semibold"
                    } p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`} 
                    > 
                    Change Password   
                    </button>
                </div>


                {
                    tab === "profile" && <Profile/>

                }
                {
                    tab === "changepassword" && <ChangePassword/>  
                }
            </div>

            </div>
        )}
        </div>
        </section>
    )
}
export default ClientAccount;