import React from 'react';
import Drawers from '../Drawers';
import styles from './Project.module.css';
import DifferentGrid from './DifferentGrid';
import DifferentTable from './DifferentTable';
import FixedMenu from '../FixedMenu/FixedMenu';
import BookConsultation from '../Forms/BookConsultation';

function ProjectManagement() {

    const [modalIsOpen, setIsOpenM] = React.useState(false);
    function openFromParent() {
        setIsOpenM(true);
    }
    function handleCloseModal() {
        setIsOpenM(false);
    }
    return (
        <>
            <div className="outer-div div-section-container relative bg-white">
                <FixedMenu />
                <Drawers />
                <div className="w-full mt-20 md:mt-28">
                    <span className="block text-[28.3721px] md:text-[54.2px]">Project Management</span>
                    <div className="w-full lg:w-6/12 my-4">
                        <span className="about-banner-1-text text-[13.5294px] md:text-[23.8px]">
                            Need professional help to design, plan, supervise and manage your home construction project?
                            Our project management consultancy service is ideal for you.<br></br> Book a free consultation to know more.
                        </span>
                    </div>
                    <div className="w-full block flex justify-end flex items-end">
                        <BookConsultation IsModalOpened={modalIsOpen} onCloseModal={handleCloseModal} />
                        <button className="button-circle-gray text-xs md:text-base" onClick={openFromParent}>BOOK CONSULTATION</button>
                    </div>
                </div>
            </div>
            {/* What You Get */}
            <div className="outer-div div-section-container bg-white">
                <div className="w-full md:w-7/12">
                    <span className="text-[25px] md:text-[35px] xl:text-[54.2px]">What You Get</span>
                </div>
                <div className="what-you-get-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 mt-8">
                    <div className="col-span-1">
                        <div className={styles.circle_div_bg}>
                            <img src="/images/project-management/unlimited-customization.png" alt="Logo" className={styles.what_you_get_grid_img}></img>
                        </div>
                        {/* <span className="">01</span> */}
                        <span className="block text-[13.8px] md:text-[23.8px] my-2">Unlimited Customization</span>
                        <span className="block text-[10px] md:text-[15.52px]">We give you complete choice in everything from core materials to finishes and fittings.</span>
                    </div>
                    <div className="col-span-1 w-full h-fit">
                        <div className={styles.circle_div_bg}>
                            <img src="/images/project-management/personalized-designs.png" alt="Logo" className={styles.what_you_get_grid_img}></img>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px] my-2">Personalized Designs</span>
                        <span className="block text-[10px] md:text-[15.52px]">You can get your own designs from other architects or let our experienced in-house architects design your dream house just the way you want it.</span>
                    </div>
                    <div className="col-span-1 w-full h-fit">
                        <div className={styles.circle_div_bg}>
                            <img src="/images/project-management/budget-planning.png" alt="Logo" className={styles.what_you_get_grid_img}></img>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px] my-2">Budget Planning</span>
                        <span className="block text-[10px] md:text-[15.52px]">We provide detailed costing with bills of quantities so that you can plan in advance.</span>
                    </div>
                    <div className="col-span-1 w-full h-fit">
                        <div className={styles.circle_div_bg}>
                            <img src="/images/project-management/project-scheduling-tracking.png" alt="Logo" className={styles.what_you_get_grid_img}></img>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px] my-2">Project Scheduling & Tracking</span>
                        <span className="block text-[10px] md:text-[15.52px]">You will get a detailed project schedule with timelines for every activity till completion. You will also receive regular updates from the site to help you track progress.</span>
                    </div>
                    <div className="col-span-1 w-full h-fit">
                        <div className={styles.circle_div_bg}>
                            <img src="/images/project-management/full-transparency.png" alt="Logo" className={styles.what_you_get_grid_img}></img>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px] my-2">Full Transparency</span>
                        <span className="block text-[10px] md:text-[15.52px]">You will know the exact cost for each selection and pay only for what you choose. We will submit bills for all material and labour expenses incurred.</span>
                    </div>
                    <div className="col-span-1 w-full h-fit">
                        <div className={styles.circle_div_bg}>
                            <img src="/images/project-management/quality-control.png" alt="Logo" className={styles.what_you_get_grid_img}></img>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px] my-2">Quality Control</span>
                        <span className="block text-[10px] md:text-[15.52px]">We follow QuaSet; a thorough 250+ point quality control checklist to ensure that your home gets the top most level of workmanship.</span>
                    </div>
                    <div className="col-span-1 w-full h-fit">
                        <div className={styles.circle_div_bg}>
                            <img src="/images/project-management/site-management.png" alt="Logo" className={styles.what_you_get_grid_img}></img>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px] my-2">Site Management</span>
                        <span className="block text-[10px] md:text-[15.52px]">Our experienced engineers will supervise the entire construction from start to finish. Everything from labour management to material sourcing will be handled by us.</span>
                    </div>
                </div>
            </div>
            {/* How Is It Different? */}
            <div className="outer-div div-section-container bg-white overflow-x-auto">
                <span className="w-full lg:w-6/12 col-span-full text-[25px] md:text-[35px] xl:text-[54.2px]">How Is It Different?</span>
                <div className='hidden md:block'>
                    <DifferentTable />
                </div>
                <div className='block md:hidden'>
                    <DifferentGrid />
                </div>
            </div>
            {/* How it works */}
            <div className="div-section-container outer-div bg-[#cda17c]">
                <span className="col-span-full w-full md:w-3/6 text-[25px] md:text-[35px] xl:text-[54.2px] leading-[34.2px] md:leading-[54.2px] ">How It Works</span>
                <div className="md:h-[250px] flex">
                    <div className={`${styles.animations_circle} flex-wrap lg:flex flex-nowrap items-center`}>
                        <svg>
                            <circle class="clock" cx="100" cy="100" r="75" />
                        </svg>
                        <div className={styles.test}></div>
                    </div>
                </div>
            </div>
            {/* Need help deciding?*/}
            <div className="div-section-container outer-div bg-[#323232] text-white">
                <div className="w-full">
                    <span className="block text-[28.3721px] md:text-[54.2px]">Need help deciding?</span>
                    <span className="block text-[15px] md:text-[20px] py-8">Book a free consultation and let our
                        experienced consultants <br></br>guide you towards your dream project.
                    </span>
                </div>
                <div className="w-full block flex justify-end flex items-end">
                    <BookConsultation IsModalOpened={modalIsOpen} onCloseModal={handleCloseModal} />
                    <button className="button-circle-gray text-xs md:text-base" onClick={openFromParent}>BOOK CONSULTATION</button>
                </div>
            </div>
        </>
    )
}
export default ProjectManagement;