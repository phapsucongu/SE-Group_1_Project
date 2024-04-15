import React from 'react';
import lawyerImage from '../assets/images/ladki.png';

function HomePage() {
  return (
    <section className="hero__section pt-[60px] 2xl:h-[800px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
          {/* hero content */}
          <div className="lg:w-[450px]">
            <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
              A law firm with a passion for success
            </h1>
            <p className="text-[16px] leading-[24px] text-textColor mt-4 text-justify">
  Law and justice are very important parts of any society. Be it developed or developing, every country has a need for justice, fairness, and rule of law. A large part of that institution is Lawyers who help provide justice to the citizens.
</p>

            <button className=" bg-gradient-to-tr from-[#ff5842] to-[#CBACD8] text-white py-2 px-4 rounded-[20px] mt-6">
              Get started Now!
            </button>
          </div>

          {/* hero image */}
          <div className="flex lg:w-1/2 max-w-lg lg:max-w-1/2-xl">
            {/* Adjust the width classes as necessary */}
            <img src={lawyerImage} alt="Lawyer" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;