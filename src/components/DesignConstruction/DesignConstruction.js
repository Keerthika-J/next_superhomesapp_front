import React, { useState } from 'react';
import Drawers from '../Drawers';
import Price from '../Price Chart/Price';
import styles from './Design.module.css';
import { super_practises_data } from './super_practises_data';
import { super_detail_data } from './super_detailing_data';
import BookConsultation from '../Forms/BookConsultation';
import FixedMenu from '../FixedMenu/FixedMenu';
import HomeLatestProjects from '../LatestProjects/HomeLatestProjects';
import TestimonialSlider from '../TestimonialSlider';
import BrandLogo from '../BrandLogos/BrandLogo';
import Link from 'next/link';

function DesignConstruction() {
    const data1 = super_practises_data;
    const data2 = super_detail_data;
    const [modalIsOpen, setIsOpenM] = React.useState(false);
    function openFromParent() {
        setIsOpenM(true);
    }
    function handleCloseModal() {
        setIsOpenM(false);
    }
    const [isOpen, setIsOpen] = useState(null);
    const handleImageClick = (ids) => {
        if (isOpen === ids) {
            setIsOpen(null);
        }
        else {
            setIsOpen(ids);
        }
    }
    return (
        <>
            <div className="outer-div div-section-container relative bg-white">
                <FixedMenu />
                <Drawers />
                <div className="w-full mt-20 md:mt-28">
                    <span className="text-[25px] md:text-[35px] xl:text-[54.2px]">Design & Build</span>
                    <div className="w-full lg:w-4/6 my-4">
                        <span className="about-banner-1-text text-[13.5294px] md:text-[23.8px]">
                            End to end, hassle-free architectural design & construction.
                        </span>
                    </div>
                    <div className="w-full block flex justify-end flex items-end">
                        <BookConsultation IsModalOpened={modalIsOpen} onCloseModal={handleCloseModal} />
                        <button className="button-circle-gray text-xs md:text-base" onClick={openFromParent}>BOOK CONSULTATION</button>
                    </div>
                </div>

            </div>
            {/* We help land owners looking to Build */}
            <div className="outer-div div-section-container bg-white">
                <div className="w-full">
                    <span className="text-[25px] md:text-[35px] xl:text-[54.2px] ">We help land owners looking to Build</span>
                </div>
                <div className="grid grid-cols-5 gap-x-8 gap-y-4 md:gap-y-12 mt-8">
                    <div className="col-span-full md:col-span-1 w-full">
                        <img src="/images/SH Design and construction-Individual homes.png" alt="Logo" className="rounded-lg"></img>
                        <span className="block text-[13.8px] md:text-[23.8px] my-3">Individual Homes</span>
                    </div>
                    <div className="col-span-full md:col-span-1 w-full">
                        <img src="/images/SH Design and construction-Duplex Houses.png" alt="Logo" className="rounded-lg"></img>
                        <span className="block text-[13.8px] md:text-[23.8px] my-3">Duplex Houses</span>
                    </div>
                    <div className="col-span-full md:col-span-1 w-full">
                        <img src="/images/SH Design and construction-Villas.png" alt="Logo" className="rounded-lg"></img>
                        <span className="block text-[13.8px] md:text-[23.8px] my-3">Villas</span>
                    </div>
                    <div className="col-span-full md:col-span-1 w-full">
                        <img src="/images/SH Design and construction-Apartments.png" alt="Logo" className="rounded-lg"></img>
                        <span className="block text-[13.8px] md:text-[23.8px] my-3">Apartments</span>
                    </div>
                    <div className="col-span-full md:col-span-1 w-full">
                        <img src="/images/SH Design and construction-beach- farm houses.png" alt="Logo" className="rounded-lg"></img>
                        <span className="block text-[13.8px] md:text-[23.8px] my-3">Beach/Farm Houses</span>
                    </div>
                </div>
            </div>
            {/* We take care of everything*/}
            <div className="outer-div div-section-container bg-white">
                <div className="w-full">
                    <span className="text-[25px] md:text-[35px] xl:text-[54.2px]">We take care of everything</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
                    <div className="col-span-1">
                        <div className={styles.circle_div_bg}>
                            <img src="/images/design-construction/we-take-care/Architectural-Design.png" alt="Logo" className={styles.we_take_care_grid_image}></img>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px] my-2">Architectural Design</span>
                    </div>
                    <div className="col-span-1 w-full h-fit">
                        <div className={styles.circle_div_bg}>
                            <img src="/images/design-construction/we-take-care/Structural-Planning.png" alt="Logo" className={styles.we_take_care_grid_image}></img>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px] my-2">Structural Planning</span>
                    </div>
                    <div className="col-span-1 w-full h-fit">
                        <div className={styles.circle_div_bg}>
                            <img src="/images/design-construction/we-take-care/Approvals.png" alt="Logo" className={styles.we_take_care_grid_image}></img>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px] my-2">Approvals</span>
                    </div>
                    <div className="col-span-1 w-full h-fit">
                        <div className={styles.circle_div_bg}>
                            <img src="/images/design-construction/we-take-care/Construction.png" alt="Logo" className={styles.we_take_care_grid_image}></img>
                        </div>

                        <span className="block text-[13.8px] md:text-[23.8px] my-2">Construction</span>
                    </div>
                    <div className="col-span-1 w-full h-fit">
                        <div className={styles.circle_div_bg}>
                            <img src="/images/design-construction/we-take-care/Interiors.png" alt="Logo" className={styles.we_take_care_grid_image}></img>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px] my-2">Interiors</span>
                    </div>
                </div>
            </div>
            {/* How it Works */}
            <div className="outer-div div-section-container bg-white">
                <span className="col-span-full w-full md:w-3/6 text-[25px] md:text-[35px] xl:text-[54.2px] leading-[34.2px] md:leading-[54.2px] ">How it Works</span>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 mt-8">
                    <div className="col-span-1 w-full h-fit">
                        <div className={styles.number_text}>
                            <span>01</span>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px] my-2">Book Consultation</span>
                        <span className="block text-[10px] md:text-[15.52px]">
                            <button onClick={openFromParent} className="">Fill the form</button>
                            <BookConsultation IsModalOpened={modalIsOpen} onCloseModal={handleCloseModal} />
                            <span> or </span>
                            WhatsApp us at <a href='https://api.whatsapp.com/send?phone=919360397461' target="_blank">  +91-9360397461</a> and book a free consultation
                        </span>
                    </div>
                    <div className="col-span-1 w-full h-fit">
                        <div className={styles.number_text}>
                            <span>02</span>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px] my-2">Receive Estimate</span>
                        <span className="block text-[10px] md:text-[15.52px]">Our expert will get in touch with you to understand your requirements and clear all your doubts before providing a detailed initial estimate for your construction plans</span>
                    </div>
                    <div className="col-span-1 w-full h-fit">
                        <div className={styles.number_text}>
                            <span>03</span>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px] my-2"> Commence Design</span>
                        <span className="block text-[10px] md:text-[15.52px]">Once the booking agreement is signed; land survey will be done and our architects will design the floor plans till your satisfaction followed by elevation design as per your taste. Soil testing will be done at site simultaneously to initiate structural design.</span>
                    </div>
                    <div className="col-span-1 w-full h-fit">
                        <div className={styles.number_text}>
                            <span>04</span>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px] my-2"> Sign Main Agreement </span>
                        <span className="block text-[10px] md:text-[15.52px]">Transparent final costing is provided once all the drawings and material specifications are finalized by you, following which the main agreement containing all agreed terms will be signed. Project schedule and payment schedule will also be provided to help you track progress and plan your finances accordingly</span>
                    </div>
                    <div className="col-span-1 w-full h-fit">
                        <div className={styles.number_text}>
                            <span>05</span>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px] my-2">Start Site Execution</span>
                        <span className="block text-[10px] md:text-[15.52px]">Work begins on site. Regular progress updates with photographs will be shared from site and quality will be monitored continuously till completion. You can sit back and relax even after handover since we provide warranties for the works done.</span>
                    </div>
                    <div className="col-span-1 w-full h-fit flex place-self-end justify-end">
                        <BookConsultation IsModalOpened={modalIsOpen} onCloseModal={handleCloseModal} />
                        <button className="button-circle-gray text-xs md:text-base" onClick={openFromParent}>BOOK CONSULTATION</button>
                    </div>
                </div>
            </div>
            {/* Why choose us */}
            <div className="div-section-container  outer-div flex flex-col md:flex-row justify-evenly bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
                    <div className="col-span-full">
                        <span className="col-span-full text-[25px] md:text-[35px] xl:text-[54.2px]">Why Choose Us</span>
                    </div>
                    <div className="col-span-1">
                        <span className="block text-[22.12px] md:text-[27.12px] my-2">End To End Service</span>
                        <span className="block text-[15.52px] leading-[24.832px] my-2">Building approvals, architectural design, structural design, site execution,
                            Interiors and professional project management.</span>
                    </div>
                    <div className="col-span-1">
                        <span className="block text-[22.12px] md:text-[27.12px] my-2">In-house Architects & Engineers</span>
                        <span className="block text-[15.52px] leading-[24.832px] my-2">We do not outsource any work. Our in house team of experienced architects
                            and engineers will ensure your custom home construction is completed as planned</span>
                    </div>
                    <div className="col-span-1">
                        <span className="block text-[22.12px] md:text-[27.12px] my-2">Upfront Cost Transparency</span>
                        <span className="block text-[15.52px] leading-[24.832px] my-2">Our Pricing is flexible, transparent and based on your budget.
                            You will receive detailed costing based on actual built up area calculations and specification selected.</span>
                    </div>
                    <div className="col-span-1">
                        <span className="block text-[22.12px] md:text-[27.12px] my-2">On-time Completion</span>
                        <span className="block text-[15.52px] leading-[24.832px] my-2">You will receive a detailed project schedule at the very beginning and we
                            will ensure that the timelines are followed diligently till completion and handover. The timelines are documented in the agreements.</span>
                    </div>
                    <div className="col-span-1">
                        <span className="block text-[22.12px] md:text-[27.12px] my-2">Project Tracking</span>
                        <span className="block text-[15.52px] leading-[24.832px] my-2">You will be given regular updates along with photographic evidence
                            from site so that you do not have to visit the site everyday. All the drawings, invoices and documents related to your
                            project will be made available in a single easy-to-access digital location.</span>
                    </div>
                    <div className="col-span-1">
                        <span className="block text-[22.12px] md:text-[27.12px] my-2">Quality Control</span>
                        <span className="block text-[15.52px] leading-[24.832px] my-2">We follow QuaSet; a thorough 350+ point Quality control checklist to
                            ensure that your home gets the top most level of workmanship using only branded material approved by you.</span>
                    </div>
                    <div className="col-span-1">
                        <span className="block text-[22.12px] md:text-[27.12px] my-2">Warranties</span>
                        <span className="block text-[15.52px] leading-[24.832px] my-2">We will make sure you will never need to use these warranties.
                            Just to give you peace of mind, we provide warranties on the following: 10 year structural warranty and 1 year seepage
                            rectification from the time of completion.</span>
                    </div>
                </div>
            </div>
            {/* What makes us different */}
            <div>
                <div className="outer-div div-section-container md:sticky top-0 text-white bg-[#323232] flex flex-col justify-between">
                    <div id="what-makes-us-different">
                        <span className="text-[25px] md:text-[35px] xl:text-[54.2px]">What Makes Us Different</span>
                    </div>
                    <div className="w-full md:w-9/12 lg:w-2/5 mt-8">
                        <span className="block text-[10px] md:text-[15.52px]">
                            Building a home is one of the biggest financial investments for anyone.
                            We understand this and have incorporated several practices to safeguard and futureproof this investment.
                            Click on know more to understand how we differentiate an ordinary construction from a SuperHome.
                        </span>
                    </div>
                </div>
                <div className="div-section-container outer-div md:sticky top-0 bg-white flex flex-col lg:flex-row justify-between">
                    <div className="w-full lg:w-6/12 flex flex-col justify-between">
                        <span className="block text-[28.3721px] md:text-[54.2px]">Super Detailing</span>
                    </div>
                    <div className="w-full lg:w-6/12 mt-8 lg:mt-0">
                        {data2.map((item, index) => (
                            <div key={index} className={styles.data1_accordion_div}>
                                <div className={`${styles.data_question} text-sm md:text-[14px] p-2`} onClick={() => handleImageClick(`data2_${index}`)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-chevron-right inline float-right rotate-90 fill-black" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /> </svg>
                                    {item.title}
                                </div>
                                <div className="-mx-4" style={{ display: isOpen === `data2_${index}` ? "block" : "none" }}>
                                    <p className={styles.data_answer}>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="div-section-container outer-div md:sticky top-0 bg-[#baa082] flex flex-col lg:flex-row justify-between">
                    <div className="w-full lg:w-6/12 flex flex-col justify-between">
                        <span className="block text-[28.3721px] md:text-[54.2px]">Super Practices</span>
                    </div>
                    <div className="w-full lg:w-6/12 mt-8 lg:mt-0">
                        {data1.map((item, index) => (
                            <div key={index} className={styles.data2_accordion_div}>
                                <div className={`${styles.data_question} text-sm md:text-[14px] p-2`} onClick={() => handleImageClick(`data1_${index}`)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-chevron-right inline float-right rotate-90 fill-black" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /> </svg>
                                    {item.title}
                                </div>
                                <div className="-mx-4" style={{ display: isOpen === `data1_${index}` ? "block" : "none" }}>
                                    <p className={styles.data_answer}>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            {/* Price Chart */}
            <div className="outer-div bg-white">
                <Price />

            </div>
            {/* Latest Projects */}
            <div className="outer-div div-section-container flex flex-col md:flex-row bg-[#323232]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-stretch">
                    <span className="col-span-full text-[25px] md:text-[35px] xl:text-[54.2px] text-white mb-4">Latest Projects</span>
                    <HomeLatestProjects />
                    <div className="pt-8 col-span-full mx-auto">
                        <Link href="/latest-projects">
                            <button className="button-circle-gray">VIEW ALL</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Brands we use */}
            <div className="div-section-container outer-div bg-white overflow-x-auto">
                <span className="block text-[28.3721px] md:text-[54.2px] pb-8">Brands we use</span>
                <BrandLogo />
            </div>
            {/* Satisfied Customers */}
            <div className="outer-div px-8 pt-8 pb-16 bg-white">
                <span className="block text-[28.3721px] md:text-[54.2px]">Satisfied Customers</span>
                <TestimonialSlider />
            </div>
            {/* Project Videos */}
            <div className="outer-div div-section-container bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="col-span-full">
                        <span className="block text-[28.3721px] md:text-[54.2px]">Walkthrough Videos</span>
                    </div>
                    <div className={`${styles.iframe_div} col-span-full md:col-span-1`} >
                        <iframe width="100%" height="250" title='Mr  Bharani - Mannivakkam' src={`https://www.youtube.com/embed/uMkzJ24XKXs?showing=0&modestbranding=0`} allowFullScreen />
                    </div>
                    <div className={`${styles.iframe_div} col-span-full md:col-span-1`} >
                        <iframe width="100%" height="250" title='Mr  Reuben - Anna nagar' src={`https://www.youtube.com/embed/TMjEIQJjuO4?showing=0&modestbranding=0`} allowFullScreen />
                    </div>
                    <div className={`${styles.iframe_div} col-span-full md:col-span-1`} >
                        <iframe width="100%" height="250" title='Mr  Sharath - Avadi' src={`https://www.youtube.com/embed/ltShZgk4k7k?showing=0&modestbranding=0`} allowFullScreen />
                    </div>
                    <div className={`${styles.iframe_div} col-span-full md:col-span-1`} >
                        <iframe width="100%" height="250" title='Mrs  Nalini - Anna nagar' src={`https://www.youtube.com/embed/mYSJHflBxOE?showing=0&modestbranding=0`} allowFullScreen />
                    </div>
                </div>
            </div>
        </>
    );
}
export default DesignConstruction;