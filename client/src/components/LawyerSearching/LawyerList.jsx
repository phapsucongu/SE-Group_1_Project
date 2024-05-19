import React, { useEffect, useState } from "react";
import LawyerCard from "./Lawyercard";
import { lawyers } from './LawyersData'
import './LawyerUI.css';
import { getAllLawyer } from "../../service/Apointment";

const LawyerList = () => {
    const [ listLawyer, setListLawyer ] = useState([])
    function getAll() {
    getAllLawyer().then((res)=>{
      console.log("listLawyer", res);
      setListLawyer(res.data)
    }).catch(error =>{
      console.error(error);
    })
  }
  useEffect(() => { getAll(); }, []);
    return (
        <div className='grid-container' style={{ marginLeft: 50 }}>
            {listLawyer.map(lawyer => (
            <LawyerCard  lawyer={lawyer} />
        ))}
            </div>
    )
}

export default LawyerList