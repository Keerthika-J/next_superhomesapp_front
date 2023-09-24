import React from 'react';
import Drawers from '../Drawers';
import FixedMenu from '../FixedMenu/FixedMenu';
import Link from 'next/link';

function Careers() {
    return (
        <>
            <div className="outer-div div-section-container relative bg-white">
                <FixedMenu />
                <Drawers />
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="w-full lg:w-3/5 block mt-12 md:mt-24 lg:mt-28">
                        <span className="text-[25px] md:text-[35px] xl:text-[54.2px]">Work With Us</span>
                    </div>
                    <div className="w-full lg:w-2/5 my-4 lg:mt-32">
                        <span className="block text-[13.8px] md:text-[23.8px] w-full md:w-9/11">We’re looking for the best people to join our innovative team. Submit your application today.</span>
                    </div>
                </div>
                <div className="mt-8">
                    <img src="/images/careers-1.png" alt="About banner" className="object-cover w-full rounded-xl"></img>
                </div>
            </div>
            <div className="outer-div div-section-container bg-[#baa082]">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="w-full lg:w-2/5 flex flex-col justify-between">
                        <span className="block text-[28.3721px] md:text-[54.2px]">Benefits</span>
                        <span className="block text-[16px] my-2">From top-tier medical insurance to a generous vacation policy, we take care of our employees' well-being.</span>
                    </div>
                    <div className="w-full lg:w-2/5">
                        <div className="border-t border-black my-2.5">
                            <span className="block text-[17.7712px] md:text-[27.12px] font-normal my-2.5">Group Life Insurance</span>
                        </div>
                        <div className="border-t border-black my-2.5">
                            <span className="block text-[17.7712px] md:text-[27.12px] font-normal my-2.5">Medical Coverage</span>
                        </div>
                        <div className="border-t border-black my-2.5">
                            <span className="block text-[17.7712px] md:text-[27.12px] font-normal my-2.5">Dental Coverage</span>
                        </div>
                        <div className="border-t border-black my-2.5">
                            <span className="block text-[17.7712px] md:text-[27.12px] font-normal my-2.5">Transportation Benefits</span>
                        </div>
                        <div className="border-t border-black my-2.5">
                            <span className="block text-[17.7712px] md:text-[27.12px] font-normal my-2.5">Employee Assistance Program</span>
                        </div>
                        <div className="border-t border-black my-2.5">
                            <span className="block text-[17.7712px] md:text-[27.12px] font-normal my-2.5">Legal Services Plan</span>
                        </div>
                        <div className="border-t border-black my-2.5">
                            <span className="block text-[17.7712px] md:text-[27.12px] font-normal my-2.5">Vacation, Sick & Holiday Pay</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-section-container outer-div grid grid-cols-6 flex items-center gap-4 bg-white">
                <span className="col-span-full text-[25px] md:text-[35px] xl:text-[54.2px]">Openings</span>
                {/* Grid row starts here. */}
                <div className="col-span-full border-b border-black my-1 w-full"></div>
                <div className="col-span-full md:col-span-1 text-[16px]">
                    <span className="block font-medium">Location:</span>
                    <span className="">San Francisco</span>
                </div>
                <div className="col-span-full md:col-span-1 text-lg lg:text-[23.12px]">
                    <spn className="">Sustainability Manager</spn>
                </div>
                <div className="col-span-full md:col-span-2">
                    <span className="">I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                        Just click “Edit Text” or double click me to add your own content and make changes to the font.
                    </span>
                </div>
                <div className="col-span-full md:col-span-1">
                    <span className="font-medium block text-left md:text-center">Type:</span>
                    <span className="block text-left md:text-center">Full time</span>
                </div>
                <div className="col-span-full md:col-span-1 md:flex justify-end">
                    <Link href="/about-us"><button className="button-circle-white">ABOUT US</button></Link>
                </div>
                {/*Ends here */}
                {/* Grid row starts here. */}
                <div className="col-span-full border-b border-black my-1 w-full"></div>
                <div className="col-span-full md:col-span-1 text-[16px]">
                    <span className="block font-medium">Location:</span>
                    <span className="">San Francisco</span>
                </div>
                <div className="col-span-full md:col-span-1 text-lg lg:text-[23.12px]">
                    <spn className="">Office Manager</spn>
                </div>
                <div className="col-span-full md:col-span-2">
                    <span className="">I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                        Just click “Edit Text” or double click me to add your own content and make changes to the font.
                    </span>
                </div>
                <div className="col-span-full md:col-span-1">
                    <span className="font-medium block text-left md:text-center">Type:</span>
                    <span className="block text-left md:text-center">Full time</span>
                </div>
                <div className="col-span-full md:col-span-1 md:flex justify-end">
                    <Link href="/about-us"><button className="button-circle-white">ABOUT US</button></Link>
                </div>
                {/*Ends here */}
                {/* Grid row starts here. */}
                <div className="col-span-full border-b border-black my-1 w-full"></div>
                <div className="col-span-full md:col-span-1 text-[16px]">
                    <span className="block font-medium">Location:</span>
                    <span className="">San Francisco</span>
                </div>
                <div className="col-span-full md:col-span-1 text-lg lg:text-[23.12px]">
                    <spn className="">Senior Project Manager</spn>
                </div>
                <div className="col-span-full md:col-span-2">
                    <span className="">I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                        Just click “Edit Text” or double click me to add your own content and make changes to the font.
                    </span>
                </div>
                <div className="col-span-full md:col-span-1">
                    <span className="font-medium block text-left md:text-center">Type:</span>
                    <span className="block text-left md:text-center">Full time</span>
                </div>
                <div className="col-span-full md:col-span-1 md:flex justify-end">
                    <Link href="/about-us"><button className="button-circle-white">ABOUT US</button></Link>
                </div>
                {/*Ends here */}
            </div>
            {/*Contact section */}
            {/* <div className="w-11/12 grid grid-cols-2 md:grid-cols-5 gap-4 place-content-center bg-[#323232] rounded-xl mx-auto mt-8 md:mt-14">
              <Social/>
            </div> */}
        </>
    );
}
export default Careers;