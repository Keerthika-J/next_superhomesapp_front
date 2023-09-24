import React from 'react';
import Drawers from '../Drawers';
import FixedMenu from '../FixedMenu/FixedMenu';
function Solutions() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    // title="Solutions | SuperHomes";
    return (
        <>
            <div className="outer-div div-section-container relative bg-white">
                <FixedMenu />
                <Drawers />
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="w-3/4 md:w-3/6 mt-20 md:mt-28">
                        <span className="block text-[25px] md:text-[35px] xl:text-[54.2px]">Comprehensive Construction Services</span>
                    </div>
                    <div className="w-full md:w-2/5 mt-20 md:mt-28">
                        <span className="block text-[13.8px] md:text-[23.8px] w-11/12">
                            We develop innovative, sustainable solutions to answer our client's most complicated challenges.
                        </span>
                        <span className="block text-[10px] md:text-[15.52px] mt-4 w-11/12 md:w-full">
                            I'm a paragraph. Click here to add your own text and edit me.It’s easy. Just click “Edit Text” or double click me to add your
                            own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for
                            you to tell a story and let your users know a little more about you.
                        </span>
                    </div>
                </div>
                <div className="">
                    <img src="/images/solutions-1.png" alt="About banner" className="object-cover w-full rounded-xl"></img>
                </div>
            </div>
            {/* Grid section */}
            <div className="bg-white outer-div ">
                <div className="div-section-container grid grid-cols-4 gap-x-8 gap-y-12">
                    <span className="col-span-full text-[25px] md:text-[35px] xl:text-[54.2px]">Why Choose SuperHomes Interiors</span>
                    <div className="col-span-full md:col-span-1 w-full">
                        <img src="/images/interior-grid-1.png" alt="Logo" className="rounded-3xl"></img>
                    </div>
                    <div className="col-span-full md:col-span-1 w-full">
                        <span className="">01</span>
                        <span className="block text-[13.8px] md:text-[23.8px] my-4">Project Design</span>
                        <span className="block text-[10px] md:text-[15.52px]">I'm a paragraph. Click here to add your own text and edit me.
                            It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                            I’m a great place for you to tell a story and let your users know a little more about you.
                        </span>
                    </div>
                    <div className="col-span-full md:col-span-1 w-full">
                        <img src="/images/interior-grid-1.png" alt="Logo" className="rounded-3xl"></img>
                    </div>
                    <div className="col-span-full md:col-span-1 w-full">
                        <span className="">02</span>
                        <span className="block text-[13.8px] md:text-[23.8px] my-4">Construction Management</span>
                        <span className="block text-[10px] md:text-[15.52px]">I'm a paragraph. Click here to add your own text and edit me.
                            It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                            I’m a great place for you to tell a story and let your users know a little more about you.</span>
                    </div>
                    <div className="col-span-full md:col-span-1 w-full">
                        <img src="/images/interior-grid-1.png" alt="Logo" className="rounded-3xl"></img>
                    </div>
                    <div className="col-span-full md:col-span-1 w-full">
                        <span className="">03</span>
                        <span className="block text-[13.8px] md:text-[23.8px] my-4">Site Evaluation</span>
                        <span className="block text-[10px] md:text-[15.52px]">I'm a paragraph. Click here to add your own text and edit me.
                            It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                            I’m a great place for you to tell a story and let your users know a little more about you.</span>
                    </div>
                    <div className="col-span-full md:col-span-1 w-full">
                        <img src="/images/interior-grid-1.png" alt="Logo" className="rounded-3xl"></img>
                    </div>
                    <div className="col-span-full md:col-span-1 w-full">
                        <span className="">04</span>
                        <span className="block text-[13.8px] md:text-[23.8px] my-4">Engineering Consulting</span>
                        <span className="block text-[10px] md:text-[15.52px]">I'm a paragraph. Click here to add your own text and edit me.
                            It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                            I’m a great place for you to tell a story and let your users know a little more about you.</span>
                    </div>
                    <div className="col-span-full md:col-span-1 w-full">
                        <img src="/images/interior-grid-1.png" alt="Logo" className="rounded-3xl"></img>
                    </div>
                    <div className="col-span-full md:col-span-1 w-full">
                        <span className="">05</span>
                        <span className="block text-[13.8px] md:text-[23.8px] my-4">Cost Modeling</span>
                        <span className="block text-[10px] md:text-[15.52px]">I'm a paragraph. Click here to add your own text and edit me.
                            It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                            I’m a great place for you to tell a story and let your users know a little more about you.</span>
                    </div>
                    <div className="col-span-full md:col-span-1 w-full">
                        <img src="/images/interior-grid-1.png" alt="Logo" className="rounded-3xl"></img>
                    </div>
                    <div className="col-span-full md:col-span-1 w-full">
                        <span className="">06</span>
                        <span className="block text-[13.8px] md:text-[23.8px] my-4">Construction</span>
                        <span className="block text-[10px] md:text-[15.52px]">I'm a paragraph. Click here to add your own text and edit me.
                            It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                            I’m a great place for you to tell a story and let your users know a little more about you.</span>
                    </div>
                </div>
            </div>
            {/* <div className="w-11/12 grid grid-cols-2 md:grid-cols-5 gap-4 place-content-center bg-[#323232] rounded-xl mx-auto mt-14">
              <Social/>
            </div> */}
        </>
    )
}
export default Solutions;