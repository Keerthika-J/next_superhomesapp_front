import React from 'react';
import Drawers from '../Drawers';
import styles from "./Privacy.module.css";
import FixedMenu from '../FixedMenu/FixedMenu';
import BookConsultation from '../Forms/BookConsultation';

export default function Privacy() {
    const [modalIsOpen, setIsOpenM] = React.useState(false);
    function openFromParent() {
        setIsOpenM(true);
    }
    function handleCloseModal() {
        setIsOpenM(false);
    }
    return (
        <>
            <div className="privacy-policy relative outer-div div-section-container bg-white">
                <FixedMenu />
                <Drawers />
                <div className="mt-20 md:mt-28">
                    <span className="text-[28.3721px] md:text-[54.2px]">Privacy Policy</span>
                </div>
                <div className="border-b-2 border-black my-4"></div>
                <div className={styles.para}>
                    <span className="text-[13.4186px] md:[27.936px]">
                        SuperHomes takes your privacy very seriously. This privacy policy (“Privacy Policy”) is intended to inform you about the information
                        that is collected from you when you visit the website and applications owned and operated by RAELN Buildtech LLP; how this information
                        may be used and disclosed; and how your information is protected.<br></br><br></br>
                        Superhomes.co is a property of and is hosted and operated by RAELN Buildtech LLP., a company incorporated under the Limited Liability
                        Partnership Act, 2008 and having its registered office at 2/515A, 2nd main road, Sandeep avenue, Neelankarai – 600115.
                    </span>
                </div>
                <div className='acceptance-of-tems'>
                    <div className={styles.privacy_heading_text}>
                        <span>Acceptance of terms</span>
                    </div>
                    <div className={styles.para}>
                        <span className="text-[13.4186px] md:[27.936px]">
                            PLEASE READ THE PRIVACY POLICY THOROUGHLY AND CAREFULLY. The terms and conditions set forth below through the privacy policy constitute a
                            legally-binding agreement between RAELN Buildtech LLP., ("SuperHomes"), and you. This policy contains provisions that define your limits,
                            legal rights and obligations with respect to your use of and participation on the platform, including the classified advertisements, forums,
                            various email functions and internet links, and all content and SuperHomes services available on the platform. The privacy policy is applicable to
                            all users of the platform, including users who have access and/or register on the platform, and users who are also contributors of content,
                            information, private and public messages, advertisements, and other materials or services on the platform.
                        </span>
                    </div>
                </div>
                {/* Information we collect */}
                <div className='information-we-collect'>
                    <div className={styles.privacy_heading_text}>
                        <span >Information we collect</span>
                    </div>
                    <div className='personal-information'>
                        <div className={styles.privacy_sub_heading}>
                            <span>Personal information</span>
                        </div>
                        <div className={styles.para}>
                            <span className="text-[13.4186px] md:[27.936px]">
                                “Personal information” is defined to include information that may be used to readily identify or contact you such as: name, address, PIN code,
                                email address, phone number, order details, user records etc. that is otherwise not publicly available.<br></br><br></br>
                                When you sign up on the platform, we collect personal information from users who are interested in availing our services.<br></br><br></br>
                                All information disclosed by you shall be deemed to be disclosed willingly and without any coercion. No liability pertaining to the authenticity/ genuineness/ misrepresentation/ fraud/ negligence, etc. of the information disclosed shall lie on SuperHomes nor will SuperHomes in any way be responsible to verify any information obtained from you.
                            </span>
                        </div>
                    </div>
                    <div className='calls-text'>
                        <div className={styles.privacy_sub_heading}>
                            <span>Calls and text messages</span>
                        </div>
                        <div className={styles.para}>
                            <span className=" text-[13.4186px] md:[27.936px]">
                                SuperHomes enables users to call and chat with the designers and other members of SuperHomes through the platform. Regarding the calls or chats, we collect information including the date and time of the call/chat message(s), and the content of the calls and chat messages in order to improve our customer service and quality of services. SuperHomes may also use this information for resolving disputes between or for safety and security purposes, and for analytics.
                            </span>
                        </div>
                    </div>
                    <div className='age'>
                        <div className={styles.privacy_sub_heading}>
                            <span className="font-bold text-[13.4186px] md:text-[15.936px] ">Age</span>
                        </div>
                        <div className={styles.para}>
                            <span className=" text-[13.4186px] md:[27.936px]">
                                We respect children's privacy. We do not knowingly or intentionally collect personal information from children under age 13. By accessing and/or registering on the platform, you have represented and warranted that you are either 18 years of age or using the platform with the supervision of a parent or guardian. If you are under the age of 13, please do not submit any personal information to us, and rely on a parent or guardian to assist you.
                            </span>
                        </div>
                    </div>
                    <div className='refer-a-friend'>
                        <div className={styles.privacy_sub_heading}>
                            <span className="font-bold text-[13.4186px] md:text-[15.936px] ">Refer a friend</span>
                        </div>
                        <div className={styles.para}>
                            <span className=" text-[13.4186px] md:[27.936px]">
                                SuperHomes offers the opportunity to any user to share details of anyone who they think may be interested in SuperHomes or our services. This information is recorded and used only to communicate with the referee using mediums including phone calls and email, based on the details provided to SuperHomes. We believe that it is within the purview of the referrer to seek authorization to share the personal information of the referee. When the information is shared with SuperHomes, it is deemed that the authorization has already been obtained by the referrer.
                            </span>
                        </div>
                    </div>
                    <div className='communications'>
                        <div className={styles.privacy_sub_heading}>
                            <span className="font-bold text-[13.4186px] md:text-[15.936px] ">Communications</span>
                        </div>
                        <div className={styles.para}>
                            <span className=" text-[13.4186px] md:[27.936px]">
                                During your interaction with SuperHomes, you may also participate in polls, surveys and feedback and personal information including call logs during such interactions will be collected. Further, when you communicate with us (via email, phone, texts, through the platform or otherwise), we may maintain a record of your communication, in accordance with applicable law. Such information obtained from a user is gathered and utilized to ensure a greater experience for users.
                            </span>
                        </div>
                    </div>
                    <div className='payment-billing-information'>
                        <div className={styles.privacy_sub_heading}>
                            <span className="font-bold text-[13.4186px] md:text-[15.936px] ">Payment, billing and financial information</span>
                        </div>
                        <div className={styles.para}>
                            <span className=" text-[13.4186px] md:[27.936px]">
                                When you create an account with SuperHomes and start availing services from us, you may be required to disclose information such as bank details, PAN card, Aadhaar card, credit card details, etc. in order for us to process your request.<br></br><br></br>
                                Additionally, SuperHomes may also collect information related to the manner and mode of payments usually adopted by you on the platform, including details of your bank account, credit card and debit card. The financial information collected may vary in accordance to your interaction with the platform.
                            </span>
                        </div>
                    </div>
                </div>
                {/* How do we use this information? */}
                <div className='how-do-we-use-this-information?'>
                    <div className={styles.privacy_heading_text}>
                        <span >How do we use this information?</span>
                    </div>
                    <div className='personal-information'>
                        <div className={styles.privacy_sub_heading}>
                            <span>Internal use</span>
                        </div>
                        <div className={styles.para}>
                            <span className="text-[13.4186px] md:[27.936px]">
                                SuperHomes uses the information we collect to provide, personalize, maintain and improve our products and services, including processing your
                                order and providing you with end-to-end construction, interior design, architectural design, project management and execution services.
                                Additionally, the information may be used to improve our platform s content and layout, to improve our outreach and for our own marketing
                                efforts (including marketing our services and products to you), and to determine general marketplace information about visitors to this platform.
                                The information may be used for product development, testing and improvement of existing services and products. This allows us to develop new
                                product features to better serve you. We confirm that the information that we collect from you may be used in aggregate form in various ways to
                                optimize and improve SuperHomes services, understand usage trends, analyze behavioral patterns, determine the effectiveness and usefulness of
                                services and/or communications shared with you. While such information may be based on information about you, it will not identify you personally.
                            </span>
                        </div>
                    </div>
                    <div className='customer-support'>
                        <div className={styles.privacy_sub_heading}>
                            <span>Customer support</span>
                        </div>
                        <div className={styles.para}>
                            <span className=" text-[13.4186px] md:[27.936px]">
                                SuperHomes uses information collected about you (including recordings of customer support calls after notice to you and with your consent) to
                                assist you when you contact our customer support services, including to:
                                <ul className={styles.privacy_lists}>
                                    <li>Direct your questions to the appropriate customer support person</li>
                                    <li>Investigate and address your concerns</li>
                                    <li>Monitor and improve our customer support response</li>
                                </ul>
                            </span>
                        </div>
                    </div>
                    <div className='communications-with-you'>
                        <div className={styles.privacy_sub_heading}>
                            <span className="font-bold text-[13.4186px] md:text-[15.936px] ">Communications with You</span>
                        </div>
                        <div className={styles.para}>
                            <span className=" text-[13.4186px] md:[27.936px]">
                                SuperHomes uses the information shared by you to communicate with you, including for the purpose of project updates, customer experience surveys,
                                promotional offers and account information. The mode of communication includes calls, SMS, emails, electronic newsletters, invitations, polls
                                and surveys.</span>
                        </div>
                    </div>
                    <div className='how-we-share-this-information'>
                        <div className={styles.privacy_sub_heading}>
                            <span className="font-bold text-[13.4186px] md:text-[15.936px] ">How we share this information</span>
                        </div>
                        <div className={styles.para}>
                            <span className=" text-[13.4186px] md:[27.936px]">
                                SuperHomes does not sell or transfer your Personal information (including your phone number, email address) to third-parties for the use of their own marketing.
                            </span>
                        </div>
                    </div>
                    <div className='third-party-ad-networks'>
                        <div className={styles.privacy_sub_heading}>
                            <span className="font-bold text-[13.4186px] md:text-[15.936px] ">Third party ad networks</span>
                        </div>
                        <div className={styles.para}>
                            <span className=" text-[13.4186px] md:[27.936px]">
                                Third party ad networks display advertisements on other websites based on your visits to the platform as well as other websites. These ad
                                networks, sponsors, advertisers and traffic measurement services, employ technologies such as cookies, JavaScript, web beacons, and others to
                                capture information governed by their own specific privacy policy(ies). We participate in these networks to enable us and the third parties to
                                display advertisement for products and services that might interest you.
                            </span>
                        </div>
                    </div>
                    <div className='analytics-and-reports'>
                        <div className={styles.privacy_sub_heading}>
                            <span className="font-bold text-[13.4186px] md:text-[15.936px] ">Analytics and reports</span>
                        </div>
                        <div className={styles.para}>
                            <span className=" text-[13.4186px] md:[27.936px]">
                                The information collected is used to create analytic reports for both internal and external partners, including business partners and the
                                public regarding the use of and trends within our services and ads. For the purpose of studying and sharing trends, we may share aggregated or
                                pseudonymous information (including demographic information), that is limited to non-personally identifiable information, with partners,
                                measurement analytics, apps, third party ad networks, or media.
                            </span>
                        </div>
                    </div>
                    <div className='public-posts'>
                        <div className={styles.privacy_sub_heading}>
                            <span className="font-bold text-[13.4186px] md:text-[15.936px] ">Public Posts</span>
                        </div>
                        <div className={styles.para}>
                            <span className=" text-[13.4186px] md:[27.936px]">
                                You may provide your feedback, reviews, comments, content, other information etc. on the platform (“Posts”). Your Posts shall have to comply
                                with the conditions relating to Posts as mentioned in the Terms of Use. SuperHomes retains an unconditional right to remove and delete any
                                Post or such part of the Post that, in the opinion of SuperHomes, does not comply with the conditions in the Terms of Use.
                                [All Posts shall be publicly accessible and visible to all Users of the platform.] SuperHomes reserves the right to use, reproduce and share
                                Your Posts for any purpose. If you delete your posts from the platform, copies of such Posts may remain viewable in archived pages, or such
                                posts may have been copied or stored by other users.
                            </span>
                        </div>
                    </div>
                    <div className='legal-investigations'>
                        <div className={styles.privacy_sub_heading}>
                            <span className="font-bold text-[13.4186px] md:text-[15.936px] ">Legal investigations</span>
                        </div>
                        <div className={styles.para}>
                            <span className=" text-[13.4186px] md:[27.936px]">
                                We may investigate and disclose information from or about you, as permitted by applicable law, if we believe that such investigation or
                                disclosure is (a) necessary to comply with legal process and law enforcement instructions and orders, such as a search warrant, order,
                                statute, judicial proceeding, or other legal process served on us; (b) helpful to prevent, investigate, or identify possible wrongdoing in
                                connection with the platform; or (c) helpful to protect our rights, reputation, property, or that of our users, subsidiaries, or the public.
                                In such an event SuperHomes shall be under no obligation to inform you or seek your approval or consent.
                            </span>
                        </div>
                    </div>
                </div>
                {/* Data security */}
                <div className='data-security'>
                    <div className={styles.privacy_heading_text}>
                        <span >Data security</span>
                    </div>
                    <div className='online-and-during-your-interactions-with-superHomes'>
                        <div className={styles.privacy_sub_heading}>
                            <span>Online and during your interactions with SuperHomes</span>
                        </div>
                        <div className={styles.para}>
                            <span className="text-[13.4186px] md:[27.936px]">
                                SuperHomes shall take reasonable steps to help protect your rights of privacy and your information (personal or otherwise) in an effort to
                                prevent loss, misuse, unauthorized access, disclosure, alteration, or destruction of such information, in compliance with the applicable laws.
                                This platform uses physical, electronic, and administrative procedures to safeguard the confidentiality of your information. SSL encryption is
                                used to protect your personal information online, and we also take several steps to protect your personal information in our facilities.
                                Access to your personal information is restricted. Only employees who need access to your personal information to perform a specific job or
                                provide a service are granted access to your personal information. SuperHomes assumes no liability or responsibility for disclosure of your
                                information due to errors in transmission, unauthorized third-party access, or other causes beyond its control.<br></br><br></br>
                                At times we may retain third parties to analyze data we collect on our platform, and to administer the services provided
                                (such as shipping, web hosting, etc. as described above), solely to help us provide and improve our products, services and platform.
                                These suppliers and other third parties are not authorized by us to use your personal information in any other way. We may have to use personal
                                information to investigate complaints and protect SuperHomes and its members, in compliance with the law, and SuperHomes policies.<br></br><br></br>
                                While we use industry-standard precautions to safeguard your personal information, we cannot guarantee complete security. 100% complete
                                security does not presently exist anywhere online or offline.<br></br><br></br>
                                In the unlikely event that we believe that the security of your personal information in our possession or control may have been
                                compromised, we may seek to notify you of that development. If a notification is appropriate, we would endeavor to do so as promptly as
                                possible under the circumstances, and, to the extent we have your email address, we may notify you by email.
                            </span>
                        </div>
                    </div>
                </div>
                {/* Links to external websites*/}
                <div className='Links-to-external-websites'>
                    <div className={styles.privacy_heading_text}>
                        <span >Links to external websites</span>
                    </div>
                    <div className='Information-not-controlled-by-SuperHomes'>
                        <div className={styles.privacy_sub_heading}>
                            <span>Information not controlled by SuperHomes</span>
                        </div>
                        <div className={styles.para}>
                            <span className="text-[13.4186px] md:[27.936px]">
                                This platform may contain links to other websites or resources over which SuperHomes does not have any control. Such links do not
                                constitute an endorsement by SuperHomes of those external websites. You acknowledge that SuperHomes is providing these links to you
                                only as a convenience, and further agree that SuperHomes is not responsible for the content of such external websites. We are not
                                responsible for the protection and privacy of any information which you provide while visiting such external websites and such sites are
                                not governed by this Policy. Your use of any external website is subject to the terms of use and privacy policy located on the linked to
                                external website.
                            </span>
                        </div>
                    </div>
                </div>
                {/* Choice and transparency*/}
                <div className='Choice-and-transparency'>
                    <div className={styles.privacy_heading_text}>
                        <span >Choice and transparency</span>
                    </div>
                    <div className='Marketing Opt-Outs'>
                        <div className={styles.privacy_sub_heading}>
                            <span>Marketing Opt-Outs</span>
                        </div>
                        <div className={styles.para}>
                            <span className="text-[13.4186px] md:[27.936px]">
                                We may send promotional or informational emails to you. You may opt out of receiving promotional emails from SuperHomes by using the opt-out
                                instructions contained in the email. Please note that if you opt out, we may still send you non-promotional messages, such as meeting invites,
                                project progress, etc.
                            </span>
                        </div>
                    </div>
                    <div className='Marketing Opt-Outs'>
                        <div className={styles.privacy_sub_heading}>
                            <span>Cookie choices</span>
                        </div>
                        <div className={styles.para}>
                            <span className="text-[13.4186px] md:[27.936px]">
                                Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject cookies.
                                If you choose to remove or reject cookies, this could affect certain features of the platform and/or services.
                            </span>
                        </div>
                    </div>
                    <div className='Marketing Opt-Outs'>
                        <div className={styles.privacy_sub_heading}>
                            <span>Amendments</span>
                        </div>
                        <div className={styles.para}>
                            <span className="text-[13.4186px] md:[27.936px]">
                                SuperHomes retains an unconditional right to modify or amend this privacy policy without any requirement to notify you of the same.
                                You can determine when this privacy policy was last modified by referring to the “Last Updated” legend above. It shall be your responsibility
                                to check this privacy policy periodically for changes. Your continued use of the platform following the posting of changes to this privacy
                                policy on the platform, will constitute your consent and acceptance of those changes.
                            </span>
                        </div>
                    </div>
                </div>
                {/* Grievances and Disputes*/}
                <div className='Grievances and Disputes'>
                    <div className={styles.privacy_heading_text}>
                        <span >Grievances and Disputes</span>
                    </div>
                    <div className='Grievances'>
                        <div className={styles.privacy_sub_heading}>
                            <span>Grievances</span>
                        </div>
                        <div className={styles.para}>
                            <span className="text-[13.4186px] md:[27.936px]">
                                In the event You have any grievances relating to the privacy policy, please inform SuperHomes within 24 hours of occurrence of the instance
                                from which the grievance has arisen, by writing an email to varun@superhomes.co.
                            </span>
                        </div>
                    </div>
                    <div className='Dispute resolution'>
                        <div className={styles.privacy_sub_heading}>
                            <span>Dispute resolution</span>
                        </div>
                        <div className={styles.para}>
                            <span className="text-[13.4186px] md:[27.936px]">
                                Any dispute, controversy or claim directly or indirectly caused by, arising out of or relating to this privacy policy will be governed by the
                                laws of India and will be referred to confidential, mandatory and binding arbitration in Chennai, India. The arbitration will be conducted on an
                                expedited basis before a single arbitrator appointed by SuperHomes in accordance with the provisions of the Indian Arbitration and Conciliation Act, 1996.
                                The arbitrator's award shall be substantiated in writing and will be final and binding on you and SuperHomes. Subject to the above, you agree to submit yourself
                                to the exclusive jurisdiction of the courts in Chennai, India.
                            </span>
                        </div>
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
}
