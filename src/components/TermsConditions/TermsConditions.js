import React from 'react';
import Drawers from '../Drawers';
import FixedMenu from '../FixedMenu/FixedMenu';
import BookConsultation from '../Forms/BookConsultation';

function TermsConditions() {
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
                <div className="mt-20 md:mt-28">
                    <div className="">
                        <span className="text-[28.3721px] md:text-[54.2px]">Terms & Conditions</span>
                    </div>
                    <div className="border-b-2 border-black my-4"></div>
                    <div className="my-4">
                        <span className="text-[22.3px] lg:text-[23.8px]">Payment</span>
                    </div>
                    <div className="w-full text-[13.4186px] md:text-[15.936px] leading-loose">
                        <ul className="text-black list-disc pl-4">
                            <li>Project cost: When a customer makes a booking with SuperHomes, a tentative project cost will be given. This is to give the customer an approximate estimate. The final project cost might vary based on the finalized architect designs and site conditions.</li>
                            <li>Booking amount: This amount is paid to confirm the booking which will be utilized for the survey, soil test, architectural designs, finalizing and blocking the materials.</li>
                            <li>Package cost: Our standard package rates are also subjected to variations based on the rate of tiles, marble granite, plywood, laminates, plumbing fixtures for interiors etc.</li>
                            <li>Refund policy: Booking amount is nonrefundable as the amount would have already been utilized for designing, soil test, survey, freezing vendor and handling charges. Any decision on further refunds will be provided based on the company's discretion.</li>
                            <li>Advance payment: 15% advance payment will be collected before execution which will be utilized for site mobilization activities i.e., site cleaning, site marking for excavation and shed material procurements.</li>
                            <li>Running account: In case of a project management contract, weekly bills will be raised for all labour and material needed at site during execution. It is the client’s responsibility to settle these bills immediately as per pre agreed terms. Continuation of work at site depends on payment of all bills.</li>
                            <li>Full & final payment: SuperHomes shall collect full and final payment as per the contract at the time of handover of your home.</li>
                            <li>Exclusions: Electricity, water & water tank charges will be charged extra and the customer is accountable for all related payments and for ensuring timely supply of water and electricity at the site</li>
                            <li>Exclusions: Concealed beams, projections, pergola, sky lights, elevations and any other item not mentioned in the package specifications or customized specifications will be charged extra as per customer requirements.</li>
                        </ul>
                    </div>
                    <div className="my-4 w-full md:w-10/12">
                        <span className="text-[22.3px] lg:text-[23.8px]">Design</span>
                    </div>
                    <div className="w-full text-[13.4186px] md:text-[15.936px] leading-loose">
                        <ul className="text-black list-disc pl-4">
                            <li>Architect will provide 3-4 design iterations; further changes in requirements by the client will be at our design head’s discretion.</li>
                            <li>Architects will only suggest possible vaastu options, but it will be at the discretion of the client.</li>
                            <li>The architects will provide options for 3D design, 3D rendering design and walkthrough videos only as per package specifications.</li>
                            <li>Car parking area will be calculated as 80% of the built-up area (i.e., excluding staircase, lift & lobby area)</li>
                            <li>Client can make changes in the concept phase of design but once the designs are finalized, further changes will not be entertained and will be under the design head’s discretion.</li>
                            <li>The in-house design team will consult with external architects in case the client wishes to do so, however, any drawings that the in-house team is required to provide will be chargeable.</li>
                            <li>Any violation of the architectural drawings will be at the customer's risk. Customer will hold complete responsibility and the in-house design team from SuperHomes will not advocate any violations on structure.</li>
                        </ul>
                    </div>
                    <div className="my-4 w-full md:w-10/12">
                        <span className="text-[22.3px] lg:text-[23.8px]">Materials</span>
                    </div>
                    <div className="w-full text-[13.4186px] md:text-[15.936px] leading-loose">
                        <ul className="text-black list-disc pl-4">
                            <li>Types of material may vary as per the final drawings and availability at the time of construction. SuperHomes will ensure that all quality standards are met in case of any changes and the customer gets value for the money invested for the same.</li>
                            <li>The engineer will check the quality of the materials at site and the material samples will be sent to the site before procuring. If required, a laboratory test will be done on the procured materials.</li>
                            <span className="font-bold">Execution</span>
                            <li>SuperHomes will not entertain third party interactions like outside vendors, consultants or contractors for materials used at the site or structural/design related discussions as per the contract signed with us.</li>
                            <span className="font-bold">Warranty</span>
                            <li>SuperHomes provides a ten-year warranty on structure and underground sump, one- year warranty on seepage on all construction services and six-month general (i.e., for plumbing, electrical and carpentry) warranty.</li>
                            <li>Fixtures, fittings and equipment will be replaced or repaired depending on the terms of the warranties provided by the respective manufacturer or vendor.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="div-section-container outer-div bg-[#cda17c]">
                <div className="w-full">
                    <span className="block text-[28.3721px] md:text-[54.2px]">Create your dream home.</span>
                    <span className="block text-[15px] md:text-[20px] py-8">Tell us about your project today.</span>
                </div>
                <div className="w-full block flex justify-end flex items-end">
                    <BookConsultation IsModalOpened={modalIsOpen} onCloseModal={handleCloseModal} />
                    <button className="button-circle-gray-no-border text-xs md:text-base" onClick={openFromParent}>BOOK CONSULTATION</button>
                </div>
            </div>
        </>
    )
};
export default TermsConditions;