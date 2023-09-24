import styles from "./About.module.css";
import React from 'react';
import Drawers from '../Drawers';
import FixedMenu from '../FixedMenu/FixedMenu';

function About() {
    return (
        <>
            {/* About Us */}
            <div className="outer-div div-section-container relative bg-white">
                <FixedMenu />
                <Drawers />
                <div className="">
                    <div className="w-4/5 md:w-11/12 mt-20 md:mt-28">
                        <span className={`${styles.about_banner_1_title} text-[35px] md:text-[35px] xl:text-[54.2px]`}>About Us</span>
                    </div>
                    <div className="w-full lg:w-2/5 my-4">
                        <span className={`${styles.about_banner_1_text} text-[13.5294px] md:text-[23.8px]`}>An Architect, a Civil engineer and an Entrepreneur team up to build SuperHomes for you.</span>
                    </div>
                    <div className="w-full lg:w-9/12 my-4">
                        <span className={`${styles.about_para} text-[13.4186px] lg:text-[15.52px]`}>SuperHomes is a one stop solution for all your residential construction and interior needs. We specialize in providing end to end services, right from planning, architectural design and execution till key handover for anyone looking to build houses, villas and apartments.<br></br>
                            With a combined experience of 35+ years in the home construction and home interior industries in Chennai, we identified all the issues faced by people looking to build their dream homes. SuperHomes is the solution we bring forward to address all of them.<br></br>
                        </span>
                    </div>
                    <div className="">
                        <img src="/images/SH_About_Us_Banner.png" alt="SH_About_Us_Banner.png" className="object-cover w-full h-full rounded-xl"></img>
                    </div>
                </div>
            </div>

            <div className="outer-div div-section-container relative bg-white">
                <div className="w-full">
                    <span className={`${styles.about_banner_1_title} text-[35px] md:text-[35px] xl:text-[54.2px]`}>No Bad Designs, No Delays, No Quality Issues, No Cost Overruns.</span>
                </div>
                <div className="w-full lg:w-9/12 mb-4">
                    <span className="text-[13.5294px] md:text-[23.8px]">
                        <b></b>
                        <br></br>Customer Satisfaction is our top priority which is why we believe in providing <b>absolute transparency</b> in pricing, <b>highest quality</b> materials and workmanship, <b>complete flexibility</b> in customizing your Homes.<br></br>
                        If you are looking to build a new home, you can Trust us to make it a SuperHome.
                    </span>
                </div>
            </div>
            {/* Our Promise */}
            <div className="outer-div div-section-container relative bg-white">
                <div className="block lg:flex justify-between">
                    <div className="w-full lg:w-6/12">
                        <div className="w-11/12">
                            <span className="text-[28.3721px] md:text-[54.2px]">Our Promise</span>
                        </div>
                        <div className="w-full lg:w-3/4 mt-8">
                            <span className={`${styles.about_para} text-[13.4186px] lg:text-[15.52px]`}>We at SuperHomes promise to deliver the highest standard of construction using the best quality materials.
                                We promise to complete projects in the proposed time without any cost overruns. We promise to provide a stress free home building experience for you.
                            </span>
                        </div>
                        <div className="w-full mt-8 lg:mt-20">
                            <span className="text-[28.3721px] md:text-[54.2px]">Our Mission</span>
                        </div>
                        <div className="w-full lg:w-3/5 mt-8 my-4">
                            <span className={`${styles.about_para} text-[13.4186px] lg:text-[15.52px]`}>To provide best in class,  hassle – free experience in creating your dream home.
                            </span>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 flex justify-center">
                        <img src="/images/SH_-_Our_Promise.png" alt="SH_-_Our_Promise.png" className="object-cover w-full rounded-xl"></img>
                    </div>
                </div>
            </div>
            <div className="outer-div div-section-container relative bg-white">
                <div className="grid grid-cols-7">
                    {/* starts */}
                    <div className="order-1 col-span-full">
                        <span className="text-[28.3721px] md:text-[54.2px]">Meet The Team</span>
                        <div className="border-b border-black my-8"></div>
                    </div>
                    <div className="order-3 md:order-2 col-span-full md:col-span-4 my-4 md:my-8 flex flex-col flex justify-between">
                        <div className="">
                            <span className="block text-#3B3A3A text-[14.8372px] md:text-[17.04px]">Founder & Business Head</span>
                            <span className="text-[18.8372px] md:text-[42.32px]">Varun Reddy</span>
                        </div>
                        <div className="w-full md:w-3/5 my-4">
                            <span className={`${styles.about_para} text-[13.4186px] lg:text-[15.52px]`}>A second generation entrepreneur involved in the real estate and construction business.
                                His idea of starting SuperHomes is to provide the professionalism, quality and reliability of a branded corporate company together with
                                the ease of access and flexibility of a neighbourhood contractor.
                            </span>
                        </div>
                    </div>
                    <div className="order-2 md:order-3 col-span-full md:col-span-3 my-4 md:my-8">
                        <img src="/images/Team/Varun.jpg" alt="Varun Reddy.jpg" className="object-cover w-full h-full rounded-xl"></img>
                    </div>
                    {/* ends */}
                    {/* Lupamudra Baruah starts */}
                    <div className="order-4 md:order-5 md:order-4 col-span-full md:col-span-3 my-4 md:my-8">
                        <img src="/images/Team/Lupamudra.jpg" alt="Lupamudra Baruah.jpg" className="object-cover w-full h-full rounded-xl"></img>
                    </div>
                    <div className="order-5 md:order-4 md:order-5 col-span-full md:col-start-5 my-4 md:my-8 flex flex-col flex justify-between">
                        <div className="">
                            <span className="block text-#3B3A3A text-[14.8372px] md:text-[17.04px]">Founder & Design Head</span>
                            <span className="text-[18.8372px] md:text-[42.32px]">Lupamudra Baruah</span>
                        </div>
                        <div className="w-full md:w-9/12 my-4">
                            <span className={`${styles.about_para} text-[13.4186px] lg:text-[15.52px]`}>Having been an architect and interior designer for over 12+ years,
                                she is determined to give her best designs to all our clients. Attention to detail and experimenting with various themes is one of her many strengths.
                                Her vision for SuperHomes is to provide a holistic design and execution experience.
                            </span>
                        </div>
                    </div>
                    {/* Lupamudra Baruah ends */}
                    {/* starts */}
                    <div className="order-7 md:order-6 col-span-full md:col-span-4 my-4 md:my-8 flex flex-col flex justify-between">
                        <div className="">
                            <span className="block text-#3B3A3A text-[14.8372px] md:text-[17.04px]">Founder & Project Head</span>
                            <span className="text-[18.8372px] md:text-[42.32px]">Thanigaivel Rajan</span>
                        </div>
                        <div className="w-full md:w-3/5 my-4">
                            <span className={`${styles.about_para} text-[13.4186px] lg:text-[15.52px]`}>A civil engineer and a project manager from one of the top colleges in the country (NICMAR).
                                He has 12+ years of strong technical experience in construction and construction project management. His valuable insights are the driving force behind our superior quality and timeline adherence. His idea for SuperHomes is to ensure world class quality through set processes and practices.
                            </span>
                        </div>
                    </div>
                    <div className="order-6 md:order-7 col-span-full md:col-span-3">
                        <img src="/images/Team/Thanigai.jpg" alt="Thanigaivel Rajan.jpg" className="object-cover w-full h-full rounded-xl"></img>
                    </div>
                    {/* ends */}
                </div>
            </div>
            {/* Photo gallery grid */}
            <div className="outer-div div-section-container relative bg-white">
                <div className="grid grid-cols-4 gap-8">
                    <div className="col-span-full md:col-span-1">
                        <img src="/images/Team/Alex.jpg" alt="About banner" className="object-cover w-full rounded-2xl"></img>
                        <span className="block text-[10px] md:text-[17.04px] mt-2">Project Manager</span>
                        <span className="text-[19.2912px] md:text-[27.12px]">Alex Pandian</span>
                    </div>
                    <div className="col-span-full md:col-span-1">
                        <img src="/images/Team/Vasanth.jpg" alt="About banner" className="object-cover w-full rounded-2xl"></img>
                        <span className="block text-[10px] md:text-[17.04px] mt-2">Site Engineer</span>
                        <span className="text-[19.2912px] md:text-[27.12px]">Vasanth T</span>
                    </div>
                    <div className="col-span-full md:col-span-1">
                        <img src="/images/Team/Shanmugam.jpg" alt="About banner" className="object-cover w-full rounded-2xl"></img>
                        <span className="block text-[10px] md:text-[17.04px] mt-2">Site Engineer</span>
                        <span className="text-[19.2912px] md:text-[27.12px]">Shanmugam</span>
                    </div>
                    <div className="col-span-full md:col-span-1">
                        <img src="/images/Team/Vignesh.jpg" alt="About banner" className="object-cover w-full rounded-2xl"></img>
                        <span className="block text-[10px] md:text-[17.04px] mt-2">Site Engineer</span>
                        <span className="text-[19.2912px] md:text-[27.12px]">Vignesh</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;