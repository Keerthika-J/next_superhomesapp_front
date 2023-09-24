import React from 'react';
import Drawers from '../Drawers';
import FixedMenu from '../FixedMenu/FixedMenu';

function Responsibility() {
  // title="Responsibility | SuperHomes";
  return (
    <>
      <div className="outer-div div-section-container relative bg-white">
        <FixedMenu />
        <Drawers />
        {/* Our Promise */}
        <div className="flex flex-col lg:flex-row justify-between mt-16 md:mt-24">
          <div className="w-full md:w-3/5">
            <span className="text-[25px] md:text-[35px] xl:text-[54.2px]">Our Promise</span>
          </div>
          <div className="w-full lg:w-2/5 md:my-4">
            <span className="block text-[13.8px] md:text-[23.8px]">
              We pledge to always put the community first. That means being leaders in environmental, social and economic sustainability.
            </span>
            <span className="block text-[10px] md:text-[15.52px] mt-4 w-full">
              I'm a paragraph. Click here to add your own text and edit me.It’s easy. Just click “Edit Text” or double click me to add your
              own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for
              you to tell a story and let your users know a little more about you.
            </span>
          </div>
        </div>
        <div className="mt-8">
          <img src="/images/about-banner-1.png" alt="About banner" className="object-cover w-full rounded-xl"></img>
        </div>
      </div>
      {/* Sticky section */}
      <div className="">
        <div className="outer-div div-section-container md:sticky top-0 bg-[#cda17c] flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-3/5">
            <span className="text-[25px] md:text-[35px] xl:text-[54.2px]">Metrics and Goals</span>
          </div>
          <div className="w-full md:w-2/5 mt-8 md:mt-0">
            <span className="block text-[10px] md:text-[15.52px] pb-4">
              I'm a paragraph. Click here to add your own text and edit me.It’s easy. Just click “Edit Text” or double click me to add your
              own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for
              you to tell a story and let your users know a little more about you.
            </span>
            <span className="block text-[10px] md:text-[15.52px] pt-8">
              This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company.
              Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for
              your business and what makes you different from your competitors. Make your company stand out and show your visitors
              who you are.
            </span>
          </div>
        </div>
        <div className="div-section-container md:sticky top-36 bg-white w-11/12 rounded-lg flex flex-col md:flex-row justify-between mx-auto mt-8 md:mt-0">
          <div className=" flex flex-col justify-between">
            <div className="">
              <span className="block ">01</span>
              <span className="text-[42.32px]">Sustainability</span>
            </div>
            <span className="w-full md:w-3/5 my-2">I'm a paragraph. Click here to add your own text and edit me. It’s easy.
              Just click “Edit Text” or double click me to add your own content and make changes to the font.
              I’m a great place for you to tell a story and let your users know a little more about you.</span>
          </div>
          <div className="w-full md:w-3/4">
            <img src="/images/sustainability-1.png" alt="Logo" className="w-full object-cover rounded-lg"></img>
          </div>
        </div>
        <div className="div-section-container md:sticky top-36 bg-white w-11/12 rounded-lg flex flex-col md:flex-row justify-between mx-auto mt-8 md:mt-0">
          <div className="flex flex-col justify-between">
            <div className="">
              <span className="block ">02</span>
              <span className="text-[42.32px]">Climate Change</span>
            </div>
            <span className="w-full md:w-3/5 my-2">I'm a paragraph. Click here to add your own text and edit me. It’s easy.
              Just click “Edit Text” or double click me to add your own content and make changes to the font.
              I’m a great place for you to tell a story and let your users know a little more about you.</span>
          </div>
          <div className="w-full md:w-3/4">
            <img src="/images/sustainability-1.png" alt="Logo" className="w-full object-cover rounded-lg"></img>
          </div>
        </div>
        <div className="div-section-container md:sticky top-36 bg-white w-11/12 rounded-lg flex flex-col md:flex-row justify-between mx-auto mt-8 md:mt-0">
          <div className="flex flex-col justify-between">
            <div className="">
              <span className="block ">03</span>
              <span className="text-[42.32px]">Carbon Emissions</span>
            </div>
            <span className="w-full md:w-3/5 my-2">I'm a paragraph. Click here to add your own text and edit me. It’s easy.
              Just click “Edit Text” or double click me to add your own content and make changes to the font.
              I’m a great place for you to tell a story and let your users know a little more about you.</span>
          </div>
          <div className="w-full md:w-3/4">
            <img src="/images/sustainability-1.png" alt="Logo" className="w-full object-cover rounded-lg"></img>
          </div>
        </div>
        <div className="div-section-container md:sticky top-36 bg-white w-11/12 rounded-lg flex flex-col md:flex-row justify-between mx-auto mt-8 md:mt-0">
          <div className="flex flex-col justify-between">
            <div className="">
              <span className="block ">04</span>
              <span className="text-[42.32px]">Waste Management</span>
            </div>
            <span className="w-full md:w-3/5 my-2">I'm a paragraph. Click here to add your own text and edit me. It’s easy.
              Just click “Edit Text” or double click me to add your own content and make changes to the font.
              I’m a great place for you to tell a story and let your users know a little more about you.</span>
          </div>
          <div className="w-full md:w-3/4">
            <img src="/images/sustainability-1.png" alt="Logo" className="w-full object-cover rounded-lg"></img>
          </div>
        </div>
        <div className="div-section-container md:sticky top-36 bg-white w-11/12 rounded-lg flex flex-col md:flex-row justify-between mx-auto mt-8 md:mt-0">
          <div className="flex flex-col justify-between">
            <div className="">
              <span className="block ">05</span>
              <span className="text-[42.32px]">Community Impact</span>
            </div>
            <span className="w-full md:w-3/5 my-2">I'm a paragraph. Click here to add your own text and edit me. It’s easy.
              Just click “Edit Text” or double click me to add your own content and make changes to the font.
              I’m a great place for you to tell a story and let your users know a little more about you.</span>
          </div>
          <div className="w-full md:w-3/4">
            <img src="/images/sustainability-1.png" alt="Logo" className="w-full object-cover rounded-lg"></img>
          </div>
        </div>
      </div>
      {/* Socials section */}
      {/* <div className="w-11/12 grid grid-cols-2 md:grid-cols-5 gap-4 place-content-center bg-[#323232] rounded-xl mx-auto mt-14">
          <Social/>
        </div> */}
    </>
  );
}
export default Responsibility;