import React from "react";
import './ServicesIndex.css';
import img1 from '../../../assets/images/icons8-prisoner-96.png';
import img2 from '../../../assets/images/icons8-buying-96.png';
import img3 from '../../../assets/images/icons8-copyright-96.png';
import img4 from '../../../assets/images/icons8-show-property-96.png';
import img5 from '../../../assets/images/icons8-wedding-rings-96.png';
import { FaCheckDouble } from "react-icons/fa";

const ServicesInfor = () => {
    return (
        <section className="section-specialities relative mx-auto">
			<div className="container mx-auto">
				<div className="tile mb-5 text-center">
					<h2>Legal Services</h2>
					<p className='m-0'>We have lawyers consulting in all legal fields.</p>
				</div>

				<div className="row flex justify-center">
					<div className="md: col-span-9">
						<div className="specialities-slider flex justify-start gap-10">
							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src={img1} className="max-w-full h-auto" alt="" />
									<span><i><FaCheckDouble/></i></span>
								</div>
								<p>Criminal Law</p>
							</div>
							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src={img2} className="max-w-full h-auto" alt="" />
									<span><i><FaCheckDouble/></i></span>
								</div>
								<p>Consumer Court Law</p>
							</div>
							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src={img3} className="max-w-full h-auto" alt="" />
									<span><i><FaCheckDouble/></i></span>
								</div>
								<p>Copyright Law</p>
							</div>
							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src={img4} className="max-w-full h-auto" alt="" />
									<span><i><FaCheckDouble/></i></span>
								</div>
								<p>Property Law</p>
							</div>
							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src={img5} className="max-w-full h-auto" alt="" />
									<span><i><FaCheckDouble/></i></span>
								</div>
								<p>Marriage Law</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

    )
}
export default ServicesInfor;