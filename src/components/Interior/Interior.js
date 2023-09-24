import React from "react";
import styles from "./Interior.module.css";
import Drawers from '../Drawers';
import TestimonialSlider from "../TestimonialSlider";
import Table from "./Table";
import AdvantagesGrid from "./AdvantagesGrid";
import FixedMenu from "../FixedMenu/FixedMenu";
import BookConsultation from "../Forms/BookConsultation";
import Gallery from "./Gallery";

function Interior() {
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
                <div className="grid grid-cols-1 md:grid-cols-12 w-full mt-20 md:mt-28">
                    <div className="col-span-full md:col-span-7 flex flex-col justify-between">
                        <div className="">
                            <span className="block text-[28.3721px] md:text-[54.2px]">Interior Designing</span>
                            <span className="block text-[15px] md:text-[20px] py-8">One stop solution for fully personalized home interiors that look great and function better
                            </span>

                        </div>
                        <div className="w-full block mb-8 md:m-0">
                            <BookConsultation IsModalOpened={modalIsOpen} onCloseModal={handleCloseModal} />
                            <button className="button-circle-gray text-xs md:text-base" onClick={openFromParent}>BOOK CONSULTATION</button>
                        </div>
                    </div>
                    <div className="col-span-full md:col-span-5">
                        <img src="/images/SH_Interior-banner.png" alt="Banner 1" className="w-full h-full object-cover rounded-xl"></img>
                    </div>
                </div>
            </div>
            {/* Why Choose SuperHomes Interiors */}
            <div className="outer-div div-section-container bg-white">
                <span className="w-full lg:w-6/12 col-span-full text-[25px] md:text-[35px] xl:text-[54.2px]">Why Choose SuperHomes Interiors</span>
                <div className={`${styles.why_choose_us_grid} grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8`}>
                    <div className="col-span-1 w-full">
                        <div className={styles.circle_div_bg}>
                            <img src="/images/interiors/Why_Choose_Us/45 Day Completion.png" alt="45 Day Completion.png" className={styles.we_choose_grid_image}></img>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px] my-3">45 Day Completion*</span>
                    </div>
                    <div className="col-span-1 w-full">
                        <div className={styles.circle_div_bg}>
                            <img src="/images/interiors/Why_Choose_Us/Fully Customized Designs.png" alt="Fully Customized Designs.png" className={styles.we_choose_grid_image}></img>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px] my-3">Fully Customized Designs</span>
                    </div>
                    <div className="col-span-1 w-full">
                        <div className={styles.circle_div_bg}>
                            <img src="/images/interiors/Why_Choose_Us/Experienced Designers.png" alt="Experienced Designers.png" className={styles.we_choose_grid_image}></img>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px] my-3">Experienced Designers</span>
                    </div>
                    <div className="col-span-1 w-full">
                        <div className={styles.circle_div_bg}>
                            <img src="/images/interiors/Why_Choose_Us/10 Years Warranty.png" alt="10 Years Warranty.png" className={styles.we_choose_grid_image}></img>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px] my-3">10 Years Warranty*</span>
                    </div>
                    <div className="col-span-1 w-full">
                        <div className={styles.circle_div_bg}>
                            <img src="/images/interiors/Why_Choose_Us/After Sales Service.png" alt="After Sales Service.png" className={styles.we_choose_grid_image}></img>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px] my-3">After Sales Service</span>
                    </div>
                </div>
            </div>
            {/* Table */}
            <div className="outer-div div-section-container bg-white">
                <span className="w-full lg:w-6/12 col-span-full text-[25px] md:text-[35px] xl:text-[54.2px]">The SuperHomes Advantage</span>
                <div className="hidden md:block">
                    <Table />
                </div>
                <div className="block md:hidden">
                    <AdvantagesGrid />
                </div>
            </div>
            {/* Home Interiors In 5 Easy Steps */}
            <div className="outer-div div-section-container bg-white">
                <span className="col-span-full w-full md:w-3/6 text-[25px] md:text-[35px] xl:text-[54.2px] leading-[34.2px] md:leading-[54.2px] ">Home Interiors In 5 Easy Steps</span>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-16 mt-8">
                    <div className="col-span-1 w-full h-fit">
                        <div className={styles.number_text}>
                            <span>01</span>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px]">Meet designer</span>
                    </div>
                    <div className="col-span-1 w-full h-fit">
                        <div className={styles.number_text}>
                            <span>02</span>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px]">Get quote</span>
                    </div>
                    <div className="col-span-1 w-full h-fit">
                        <div className={styles.number_text}>
                            <span>03</span>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px]">Finalize designs</span>
                    </div>
                    <div className="col-span-1 w-full h-fit">
                        <div className={styles.number_text}>
                            <span>04</span>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px]">Place orders</span>
                    </div>
                    <div className="col-span-1 w-full h-fit">
                        <div className={styles.number_text}>
                            <span>05</span>
                        </div>
                        <span className="block text-[13.8px] md:text-[23.8px]">Enjoy your beautiful <br></br>home interiors</span>
                    </div>
                </div>
            </div>
            {/* Or you can fully Customize from our end-to-end services. */}
            <div className="outer-div div-section-container bg-white">
                <div className="w-full">
                    <span className="col-span-full text-[25px] md:text-[35px] xl:text-[54.2px]">Or you can fully Customize from our end-to-end services.</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-8">
                    <div className="text-center">
                        <img className="w-28 h-28 mx-auto" src="/images/interiors/SuperHomes_Interiors_Modular Kitchens.png" alt="SuperHomes_Interiors_Modular Kitchens" ></img>
                        <span className="block text-[13.8px] md:text-[23.8px]">Modular kitchen</span>
                    </div>
                    <div className="text-center">
                        <img className="w-28 h-28 mx-auto" src="/images/interiors/SuperHomes_Interiors_Wardrobes.png" alt="SuperHomes_Interiors_Wardrobes" ></img>
                        <span className="block text-[13.8px] md:text-[23.8px]">Wardrobes</span>
                    </div>
                    <div className="text-center">
                        <img className="w-28 h-28 mx-auto" src="/images/interiors/SuperHomes_Interiors_TV Units.png" alt="SuperHomes_Interiors_TV Units" ></img>
                        <span className="block text-[13.8px] md:text-[23.8px]">TV units</span>
                    </div>
                    <div className="text-center">
                        <img className="w-28 h-28 mx-auto" src="/images/interiors/SuperHomes_Interiors_Crockery Units.png" alt="SuperHomes_Interiors_Crockery Units" ></img>
                        <span className="block text-[13.8px] md:text-[23.8px]">Crockery units</span>
                    </div>
                    <div className="text-center">
                        <img className="w-28 h-28 mx-auto" src="/images/interiors/SuperHomes_Interiors_Storage.png" alt="SuperHomes_Interiors_Storage" ></img>
                        <span className="block text-[13.8px] md:text-[23.8px]">Storage</span>
                    </div>
                    <div className="text-center">
                        <img className="w-28 h-28 mx-auto" src="/images/interiors/SuperHomes_Interiors_Study Tables.png" alt="SuperHomes_Interiors_Study Tables" ></img>
                        <span className="block text-[13.8px] md:text-[23.8px]">Study tables</span>
                    </div>
                    <div className="text-center">
                        <img className="w-28 h-28 mx-auto" src="/images/interiors/SuperHomes_Interiors_Foyer.png" alt="SuperHomes_Interiors_Foyer" ></img>
                        <span className="block text-[13.8px] md:text-[23.8px]">Foyer</span>
                    </div>
                    <div className="text-center">
                        <img className="w-28 h-28 mx-auto" src="/images/interiors/SuperHomes_Interiors_Bathroom.png" alt="SuperHomes_Interiors_Bathroom" ></img>
                        <span className="block text-[13.8px] md:text-[23.8px]">Bathroom</span>
                    </div>
                    <div className="text-center">
                        <img className="w-28 h-28 mx-auto" src="/images/interiors/SuperHomes_Interiors_False Ceiling.png" alt="SuperHomes_Interiors_False Ceiling" ></img>
                        <span className="block text-[13.8px] md:text-[23.8px]">False ceiling</span>
                    </div>
                    <div className="text-center">
                        <img className="w-28 h-28 mx-auto" src="/images/interiors/SuperHomes_Interiors_Wall Painting.png" alt="SuperHomes_Interiors_Wall Painting" ></img>
                        <span className="block text-[13.8px] md:text-[23.8px]">Wall painting</span>
                    </div>
                    <div className="text-center">
                        <img className="w-28 h-28 mx-auto" src="/images/interiors/SuperHomes_Interiors_wallpaper.png" alt="SuperHomes_Interiors_wallpaper" ></img>
                        <span className="block text-[13.8px] md:text-[23.8px]">Wallpaper</span>
                    </div>
                    <div className="text-center">
                        <img className="w-28 h-28 mx-auto" src="/images/interiors/SuperHomes_Interiors_Lighting.png" alt="SuperHomes_Interiors_Lighting" ></img>
                        <span className="block text-[13.8px] md:text-[23.8px]">Lighting</span>
                    </div>
                    <div className="text-center">
                        <img className="w-28 h-28 mx-auto" src="/images/interiors/SuperHomes_Interiors_Pooja Units.png" alt="SuperHomes_Interiors_Pooja Units" ></img>
                        <span className="block text-[13.8px] md:text-[23.8px]">Pooja units</span>
                    </div>
                    <div className="text-center">
                        <img className="w-28 h-28 mx-auto" src="/images/interiors/SuperHomes_Interiors_Furniture.png" alt="SuperHomes_Interiors_Furniture" ></img>
                        <span className="block text-[13.8px] md:text-[23.8px]">Furniture</span>
                    </div>
                    <div className="text-center">
                        <img className="w-28 h-28 mx-auto" src="/images/interiors/SuperHomes_Interiors_Space Planning.png" alt="SuperHomes_Interiors_Space Planning" ></img>
                        <span className="block text-[13.8px] md:text-[23.8px]">Space planning</span>
                    </div>
                    <div className="text-center">
                        <img className="w-28 h-28 mx-auto" src="/images/interiors/SuperHomes_Interiors_Renovation.png" alt="SuperHomes_Interiors_Renovation" ></img>
                        <span className="block text-[13.8px] md:text-[23.8px]">Renovation</span>
                    </div>
                </div>
            </div>
            {/* Need help deciding? */}
            <div className="outer-div div-section-container text-white bg-[#323232] flex flex-col justify-between">
                <div className="w-full">
                    <span className="block text-[28.3721px] md:text-[54.2px]">Need help deciding?</span>
                    <span className="block text-[15px] md:text-[20px] pt-4 pb-8">Book a free consultation and let our experienced designers <br></br>guide you towards your dream interiors
                    </span>
                </div>
                <div className="w-full block flex justify-end flex items-end">
                    <BookConsultation IsModalOpened={modalIsOpen} onCloseModal={handleCloseModal} />
                    <button className="button-circle-gray text-xs md:text-base" onClick={openFromParent}>BOOK CONSULTATION</button>
                </div>
            </div>
            {/* Satisfied Customers */}
            <div className="outer-div px-8 pt-8 pb-16 bg-white">
                <span className="block text-[28.3721px] md:text-[54.2px]">Satisfied Customers</span>
                <TestimonialSlider />
            </div>
            <div className="outer-div px-8 py-8 bg-white">
                <span className="block text-[28.3721px] md:text-[54.2px]">Interior Projects</span>
                <Gallery />
            </div>
        </>
    );
}
export default Interior;