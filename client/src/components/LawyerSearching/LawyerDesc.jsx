import React, { useEffect } from "react";
import LuatSuHa from '../../assets/images/luatsuha.jpg'
import { useState } from "react";
import LawyerAbout from "./LawyerAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
import starIcon from "./LawyersImg/Star.png";
import { useParams } from "react-router-dom";
import { getLawyer } from "../../service/Apointment";
import LuatSuBinh from '../../assets/images/nguyenanbinh.png'
import LuatSu from '../../assets/images/luatsu.png'


const LawyerDesc = () => {
    
    const {id} = useParams();
    const [ Lawyer, setLawyer ] = useState([])
    const [tab, steTab] = useState('about');
    function getdetailLawyer() {
        getLawyer(id).then((res)=>{
          console.log("Lawyer", res);
          setLawyer(res.data)
        }).catch(error =>{
          console.error(error);
        })
      }
      useEffect(() => { getdetailLawyer(); }, []);
      let imgsrc = '';
      if(Lawyer.fullname === 'Trần Viết Hà'){
        imgsrc = LuatSuHa;
    }
    else if(Lawyer.fullname === 'Nguyễn An Bình'){
        imgsrc = LuatSuBinh;
    }
    else {
        imgsrc = LuatSu;
    }
    return (<section>
        <div className="max-w-[1170px] px-5 mx-auto">
            <div className="grid md:grid-cols-3 gap-[50px]">
                <div className="md:col-span-2">
                    <div className="flex items-center gap-5">
                        <figure className="max-w-[200px] max-h-[200px]">
                            
                            <img  src={imgsrc} alt="" />
                        </figure>
                        <div>
                            <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px]
                            leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded"> {Lawyer.speciality}
                            </span>
                            <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                            {Lawyer.fullname}
                            </h3>
                            {/* <h3 className="fle items-center gap-[6px]">
                                <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px]
                                lg:leading-7 font-semibold text-headingColor"></span>
                            </h3> */}
                            
                            <p className="text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]">
                            {Lawyer.email}
                            </p>
                        </div>
                    </div>

                    <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                        <button onClick={()=> steTab(`about`)}
                        className={`${tab==='about' && "border-b border-solid border-primaryColor"} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                            About
                        </button>
                    </div>

                    <div className="mt-[50px]">
                        {
                            tab==='about' && <LawyerAbout lawyer={Lawyer} />
                        }
                        {
                            tab==='feedback' && <Feedback />
                        }
                    </div>
                </div>

                <div>
                    <SidePanel lawyer={Lawyer} id={id} />
                </div>
            </div>
        </div>
        
    </section>)
}

export default LawyerDesc;