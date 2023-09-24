import React, { useState } from 'react';
import Drawers from '../Drawers';
import styles from "./Faq.module.css";
import { faq_questions } from './FaqQuestions';
import FixedMenu from '../FixedMenu/FixedMenu';
import BookConsultation from '../Forms/BookConsultation';

export default function Faq() {
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
            <div className="faq relative outer-div div-section-container bg-white">
                <FixedMenu />
                <Drawers />
                <div className="mt-20 md:mt-28">
                    <span className="text-[28.3721px] md:text-[54.2px]">Frequently Asked Questions</span>
                </div>
                <div className=''>
                    {faq_questions.map((item, index) => (
                        <div className={styles.faq_accordion_div} key={index}>
                            <div className={`${styles.faq_question} text-sm md:text-[14px]`} onClick={() => handleImageClick(`faq_question_${index}`)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right inline float-right rotate-90 fill-black" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /> </svg>
                                {item.title}
                            </div>
                            <div className="-mx-4">
                                <div className={styles.faq_answer} style={{ display: isOpen === `faq_question_${index}` ? "block" : "none" }}>{item.content}</div>
                            </div>
                        </div>
                    ))}
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
