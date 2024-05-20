import React from "react";
import './index.css';
import { useContext } from 'react';
import { authContext } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { authState: {user} } = useContext(authContext);

  const role = user?.role;
  let link = '';
  let start = '';
  if(role === 'user') {
    link = '/mybookings';
    start = '/findalawyer';
  }
  else if(role === 'expert') {
    link = '/myappointments';
    start = '/myappointments';
  }
    return (
    <section id="hero" className="flex items-top">
      <div className="container mx-auto">

                      <h1> The legal hub </h1>
                      <h2>connect seekers & professionals</h2>
                      <h3> by a law firm </h3>
                      <p>Law and justice are crucial components of any society, whether it is developed or developing. Every country needs a fair and just system that upholds the rule of law. Lawyers play a significant role in delivering justice to the citizens.</p>
    
      <div className="flex justify-start gap-5">
      <Link to = {start} className="button">Start Appointment</Link>
      <Link to = {link} className="button">Track Appointment</Link>

      </div>
      </div>
    </section>
    )
}
export default HeroSection;