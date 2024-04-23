import React from "react";
import LawyerCard from "./Lawyercard";
import { lawyers } from './LawyersData'
import './LawyerUI.css';

const LawyerList = () => {
    return (
        <div className='grid-container' style={{ marginLeft: 50 }}>
            {lawyers.map(lawyer => (
            <LawyerCard key={lawyer.id} lawyer={lawyer} />
        ))}
            </div>
    )
}

export default LawyerList