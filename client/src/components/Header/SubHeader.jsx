import React from 'react';
import bgImage from '../../assets/images/background.jpg';

const SubHeader = ({title, subtitle}) => {
    const sectionStyle = {
        background: `url(${bgImage}) no-repeat 50% 50%`,
        backgroundSize: 'cover',
        position: 'relative',
        padding: '120px 0px 70px 0px',
    };
    
    const overlayStyle = {
        content: '""',
        position: 'absolute',
        left: '0',
        top: '0',
        bottom: '0',
        right: '0',
        width: '100%',
        height: '100%',
        opacity: '0.8',
        background: '#223a66',
    };

    return (
        <section style={sectionStyle} className="about-us">
            <div style={overlayStyle} className="overlay"></div>
            <div className="container position-relative">
                <div className="row">
                    <div className="col-md-12">
                        <div className='mb-4 section-title text-center'>
                            <h2 className="text-3xl font-bold text-white relative z-10">{title}</h2>
                            <p className='text-white m-0 relative z-10'>_____________</p>
                            <p className='text-white m-2 relative z-10'>{subtitle && subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SubHeader;
