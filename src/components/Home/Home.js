import React from 'react';
import styles from './Home.module.css';
import BookConsultation from '../Forms/BookConsultation';
import HomeDrawer from '../HomeDrawer';
import Slider from "react-slick";
import FixedMenu from '../FixedMenu/FixedMenu';
import HomeLatestProjects from '../LatestProjects/HomeLatestProjects';
import TestimonialSlider from '../TestimonialSlider';
import BrandLogo from '../BrandLogos/BrandLogo';
import HomeBlogs from '../Blogs/HomeBlogs';
import Link from 'next/link';

function Home() {
    const [modalIsOpen, setIsOpenM] = React.useState(false);
    const lists =
        [
            {
                id: 1,
                content: "Your search for the best turnkey residential construction company in Chennai ends here."
            },
            {
                id: 2,
                content: "End to End, hassle free architectural design & construction."
            },
            {
                id: 3,
                content: "Architectural design that looks great and is practical too."
            },
            {
                id: 4,
                content: "Highest quality at the best price."
            },
            {
                id: 5,
                content: "Trust us to build your dream home."
            },
        ];
    const settings =
    {
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        accessibility: false
        // adaptiveHeight: true
    };
    function openFromParent() {
        setIsOpenM(true);
    }
    function handleCloseModal() {
        setIsOpenM(false);
    }
    return (
        <>
            <div className={`${styles.home_main_banner} relative`}>
                <div className="">
                    <FixedMenu />
                    <HomeDrawer />
                    <div className="absolute top-1/4 left-0 w-full px-8">
                        <Slider {...settings}>
                            {lists.map((slide) =>
                                <div key={slide.id}>
                                    <span className={`${styles.banner_1_text} leading-loose text-3xl md:text-6xl`}>{slide.content}</span>
                                </div>)}
                        </Slider>
                    </div>
                    <div className="absolute bottom-0 left-0 m-8">
                        <BookConsultation IsModalOpened={modalIsOpen} onCloseModal={handleCloseModal} />
                        <button className="button-circle-book-consulatation-white text-xs md:text-base cursor-pointer" onClick={openFromParent}>BOOK CONSULTATION</button>
                    </div>
                </div>
            </div>
            {/* We build every home like it is our own. */}
            <div id="we-build-section" className="flex justify-center overflow-hidden">
                <div className="div-section-container bg-white outer-div h-fit grid grid-cols-12">
                    <div className="col-span-full md:col-span-7 relative flex flex-col justify-between">
                        <span className="banner-2-text text-[25px] md:text-[35px] xl:text-[54.2px]">We build every home like it is our own.</span>
                        <div className="">
                            <a href="/about-us"><button className="button-circle-white my-8 md:my-0">ABOUT US</button></a>
                        </div>
                    </div>
                    <div className="col-span-full md:col-span-5">
                        <img src="/images/banner-2.png" alt="banner-2.png" className="w-full h-full object-cover rounded-xl"></img>
                    </div>
                </div>
            </div>
            {/* Sticky section */}
            <div>
                <div className="md:sticky top-0 outer-div relative">
                    <div className="slideshow-light">
                        <img src="/images/home-1.png" alt="home-1.png" className="w-full object-cover rounded-lg"></img>
                    </div>
                    <span className="m-8 absolute top-0 text-white text-3xl md:text-4xl xl:text-6xl ">Our Services</span>
                    <span className="slogan m-8 w-9/12 md:w-9/12 lg:w-2/5 absolute bottom-0 lg:top-2/3 text-white text-[10.5294px] md:text-[23.8px]">We offer a comprehensive array of
                        end-to-end services, from planning to post-construction maintenance. You can count on the utmost professionalism in all that we do.
                    </span>
                </div>
                <div className="div-section-container md:sticky top-36 bg-white w-11/12 rounded-xl flex flex-col md:flex-row justify-between mx-auto mt-8 md:mt-14 md:mt-0">
                    <div className="flex flex-col justify-between">
                        <div className="">
                            <span className="block ">01</span>
                            <span className="text-[22.3px] md:text-[42.32px]">Design & Construction</span>
                        </div>
                        <div className="w-full md:w-3/5">
                            <Link href="/design-and-construction"><button className="button-circle-white my-8 md:my-0">KNOW MORE</button></Link>
                        </div>
                    </div>
                    <div className="w-full md:w-2/6">
                        <img src="/images/SH_Home-Design_and_construction.png" alt="SH_Home-Design_and_construction.png" className="w-full object-cover rounded-xl"></img>
                    </div>
                </div>
                <div className="div-section-container md:sticky top-36 bg-white w-11/12 rounded-xl flex flex-col md:flex-row justify-between mx-auto mt-8 md:mt-14 md:mt-0">
                    <div className="flex flex-col justify-between">
                        <div className="">
                            <span className="block ">02</span>
                            <span className="text-[22.3px] md:text-[42.32px]">Interior Design</span>
                        </div>
                        <div className="w-full md:w-3/5">
                            <Link href="/interior"><button className="button-circle-white my-8 md:my-0">KNOW MORE</button></Link>
                        </div>
                    </div>
                    <div className="w-full md:w-2/6">
                        <img src="/images/SH_Home-Interiors.png" alt="SH_Home-Interiors.png" className="w-full object-cover rounded-xl"></img>
                    </div>
                </div>
                <div className="div-section-container md:sticky top-36 bg-white w-11/12 rounded-xl flex flex-col md:flex-row justify-between mx-auto mt-8 md:mt-14 md:mt-0">
                    <div className="flex flex-col justify-between">
                        <div className="">
                            <span className="block ">03</span>
                            <span className="text-[22.3px] md:text-[42.32px]">Project Management</span>
                        </div>
                        <div className="w-full md:w-3/5">
                            <Link href="/project-management"><button className="button-circle-white my-8 md:my-0">KNOW MORE</button></Link>
                        </div>
                    </div>
                    <div className="w-full md:w-2/6">
                        <img src="/images/SH_-_Project_Management.png" alt="SH_-_Project_Management.png" className="w-full object-cover rounded-xl"></img>
                    </div>
                </div>
            </div>
            {/* What Makes Us Different*/}
            <div className="outer-div div-section-container flex flex-col justify-between lg:flex-row bg-[#323232]">
                <div className="w-full">
                    <span className="block text-[28.3721px] md:text-[54.2px] text-white">What Makes Us Different</span>
                    <span className="w-full lg:w-2/5 block text-[15px] md:text-[20px] text-white py-8">Building a home is one of the biggest financial investments for anyone.
                        We understand this and have incorporated several practices to safeguard and futureproof this investment.
                        Click on know more to understand how we differentiate an ordinary construction from a SuperHome.</span>
                </div>
                <div className="block flex justify-end flex items-end">
                    <div className="">
                        <Link href="/design-and-construction#what-makes-us-different"><button className="button-circle-gray">KNOW MORE</button></Link>
                    </div>
                </div>
            </div>
            {/* Why choose us */}
            <div className="div-section-container  outer-div flex flex-col md:flex-row justify-evenly bg-white">
                <div className="grid grid-cols-3 gap-8">
                    <div className="col-span-full">
                        <span className="col-span-full text-[25px] md:text-[35px] xl:text-[54.2px]">Why Choose Us</span>
                    </div>
                    <div className="col-span-full md:col-span-1">
                        <span className="block text-[17.04px] my-2">01</span>
                        <span className="block text-[22.12px] md:text-[27.12px] my-2">End To End Service</span>
                        <span className="block text-[15.52px] leading-[24.832px] my-2">Building approvals, architectural design, structural design, site execution,
                            interiors and professional project management.</span>
                    </div>
                    <div className="col-span-full md:col-span-1">
                        <span className="block text-[17.04px] my-2">02</span>
                        <span className="block text-[22.12px] md:text-[27.12px] my-2">In-house architects & engineers</span>
                        <span className="block text-[15.52px] leading-[24.832px] my-2">We do not outsource any work. Our in house team of experienced architects
                            and engineers will ensure your custom home construction is completed as planned</span>
                    </div>
                    <div className="col-span-full md:col-span-1">
                        <span className="block text-[17.04px] my-2">03</span>
                        <span className="block text-[22.12px] md:text-[27.12px] my-2">Upfront Cost Transparency</span>
                        <span className="block text-[15.52px] leading-[24.832px] my-2">Our pricing is flexible, transparent and based on your budget.
                            You will receive detailed costing based on actual built up area calculations and specification selected.</span>
                    </div>
                    <div className="col-span-full md:col-span-1">
                        <span className="block text-[17.04px] my-2">04</span>
                        <span className="block text-[22.12px] md:text-[27.12px] my-2">On-time Completion</span>
                        <span className="block text-[15.52px] leading-[24.832px] my-2">You will receive a detailed project schedule at the very beginning and we
                            will ensure that the timelines are followed diligently till completion and handover. The timelines are documented in the agreements.</span>
                    </div>
                    <div className="col-span-full md:col-span-1">
                        <span className="block text-[17.04px] my-2">05</span>
                        <span className="block text-[22.12px] md:text-[27.12px] my-2">Project Tracking</span>
                        <span className="block text-[15.52px] leading-[24.832px] my-2">You will be given regular updates along with photographic evidence
                            from site so that you do not have to visit the site everyday. All the drawings, invoices and documents related to your
                            project will be made available in a single easy-to-access digital location.</span>
                    </div>
                    <div className="col-span-full md:col-span-1">
                        <span className="block text-[17.04px] my-2">06</span>
                        <span className="block text-[22.12px] md:text-[27.12px] my-2">Quality Control</span>
                        <span className="block text-[15.52px] leading-[24.832px] my-2">We follow QuaSet; a thorough 350+ point quality control checklist to
                            ensure that your home gets the top most level of workmanship using only branded material approved by you.</span>
                    </div>
                    <div className="col-span-full md:col-span-1">
                        <span className="block text-[17.04px] my-2">07</span>
                        <span className="block text-[22.12px] md:text-[27.12px] my-2">Warranties</span>
                        <span className="block text-[15.52px] leading-[24.832px] my-2">We will make sure you will never need to use these warranties.
                            Just to give you peace of mind, we provide warranties on the following: 10 year structural warranty and 1 year seepage
                            rectification from the time of completion.</span>
                    </div>
                </div>
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
                    <div className="iframe-div col-span-full md:col-span-1">
                        <iframe width="100%" height="250" title='Mr  Bharani - Mannivakkam' src={`https://www.youtube.com/embed/uMkzJ24XKXs?showing=0&modestbranding=0`} allowFullScreen />
                    </div>
                    <div className="iframe-div col-span-full md:col-span-1">
                        <iframe width="100%" height="250" title='Mr  Reuben - Anna nagar' src={`https://www.youtube.com/embed/TMjEIQJjuO4?showing=0&modestbranding=0`} allowFullScreen />
                    </div>
                    <div className="iframe-div col-span-full md:col-span-1">
                        <iframe width="100%" height="250" title='Mr  Sharath - Avadi' src={`https://www.youtube.com/embed/ltShZgk4k7k?showing=0&modestbranding=0`} allowFullScreen />
                    </div>
                    <div className="iframe-div col-span-full md:col-span-1">
                        <iframe width="100%" height="250" title='Mrs  Nalini - Anna nagar' src={`https://www.youtube.com/embed/mYSJHflBxOE?showing=0&modestbranding=0`} allowFullScreen />
                    </div>
                </div>
            </div>
            {/* Have More Questions? */}
            <div className="outer-div div-section-container flex flex-col justify-between md:flex-row bg-[#323232]">
                <div className="w-9/12">
                    <span className="block text-[28.3721px] md:text-[54.2px] text-white">Have More Questions?</span>
                    <span className="block text-[15px] md:text-[20px] text-white pt-4 md:pt-8">Check out our FAQ page for answers or get in touch with us to know more.</span>
                </div>
                <div className="w-1/4 flex flex-col items-end mt-8 ml-8 md:m-0">
                    <div className="">
                        <Link href="/faq"><button className="button-circle-gray">FAQ PAGE</button></Link>
                    </div>
                    <div className="mt-8">
                        <Link href="/contact-us"><button className="button-circle-gray">GET IN TOUCH</button></Link>
                    </div>
                </div>
            </div>
            {/* Blogs */}
            <div className="outer-div div-section-container justify-between md:flex-row bg-white">
                <div className="col-span-full">
                    <span className="block text-[28.3721px] md:text-[54.2px]">Blogs</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    <HomeBlogs />
                    <div className="pt-4 md:pt-8 col-span-full mx-auto">
                        <Link href="/blogs"><button className="button-circle-white">READ ALL</button></Link>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Home;
