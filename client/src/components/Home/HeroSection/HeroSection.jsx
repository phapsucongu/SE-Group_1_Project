import React from "react";
import './index.css';

const HeroSection = () => {
    return (
    <section id="hero" className="flex items-top">
      <div className="container mx-auto">

                      <h1> The legal hub </h1>
                      <h2>connect seekers & professionals</h2>
                      <h3> by a law firm </h3>
                      <p>Law and justice are crucial components of any society, whether it is developed or developing. Every country needs a fair and just system that upholds the rule of law. Lawyers play a significant role in delivering justice to the citizens.</p>
    
      <div className="flex justify-start gap-5">
      <a href="URL-cua-lien-ket" className="button">Get started</a>
      <a href="URL-cua-lien-ket" className="button">Track Appointment</a>

      </div>
      </div>
    </section>
    )
}
export default HeroSection;