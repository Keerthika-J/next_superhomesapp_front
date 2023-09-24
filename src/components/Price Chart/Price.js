import styles from "./Price.module.css";
import React, { useState } from 'react';
import DownloadForm from '../Forms/DownloadForm';
import questions1 from './questions1'
import questions2 from './questions2';
import questions3 from './questions3';
import questions4 from './questions4';
function Price() {
    const [data1] = useState(questions1);
    const [data2] = useState(questions2);
    const [data3] = useState(questions3);
    const [data4] = useState(questions4);
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
            <div className="div-section-container">
                <span className="col-span-full text-[25px] md:text-[35px] xl:text-[54.2px]">SuperHomes Pricing is Transparent, Flexible and Competitive</span>
                <div className="grid grid-cols-4 gap-x-4 gap-y-8 md:w-full mt-8">
                    {/* Col-1 */}
                    <div className="col-span-full md:col-span-2 lg:col-span-1 w-full">
                        <div className={`${styles.price_container_heading} sm:text-sm md:text-md lg:text-xl`}>
                            <span className="block">Budget  <br></br> Rs.1890/Sq.ft</span>
                        </div>
                        <div className='container w-full rounded-x-lg'>
                            {data1.map((item, index) => (
                                <div key={index} className={styles.data_accordion_div_price}>
                                    <div className={`${styles.question_title} text-sm md:text-[14px] p-2 lg:p-4`} onClick={() => handleImageClick(`data1_${index}`)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right inline fill-black" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /></svg>
                                        {item.title}
                                    </div>
                                    <div className="mx-4">
                                        <ol style={{ display: isOpen === `data1_${index}` ? "block" : "none" }}>
                                            {item.info.map((i, j) => React.createElement("li", { key: j }, i))}
                                        </ol>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* col-2 */}
                    <div className="col-span-full md:col-span-2 lg:col-span-1 w-full">
                        <div className={`${styles.price_container_heading} sm:text-sm md:text-md lg:text-xl`}>
                            <span className="block">Essential<br></br> Rs.1980/Sq.ft</span>
                        </div>
                        <div className='container w-full rounded-x-lg'>
                            {data2.map((item, index) => (
                                <div key={index} className={styles.data_accordion_div_price}>
                                    <div className={`${styles.question_title} text-sm md:text-[14px] p-2 lg:p-4`} onClick={() => handleImageClick(`data2_${index}`)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right inline fill-black" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /></svg>
                                        {item.title}
                                    </div>
                                    <div className="mx-4">
                                        <ol style={{ display: isOpen === `data2_${index}` ? "block" : "none" }}>
                                            {item.info.map((i, j) => React.createElement("li", { key: j }, i))}
                                        </ol>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* end of col-2 */}
                    {/* col-3 */}
                    <div className="col-span-full md:col-span-2 lg:col-span-1 w-full">
                        <div className={`${styles.price_container_heading} sm:text-sm md:text-md lg:text-xl`}>
                            <span className="block">Essential PLUS <br></br> Rs.2200/Sq.ft</span>
                            {/* <span className="block text-sm">(BEST VALUE)</span> */}
                        </div>
                        <div className='container w-full rounded-x-lg'>
                            {data3.map((item, index) => (
                                <div key={index} className={styles.data_accordion_div_price}>
                                    <div className={`${styles.question_title} text-sm md:text-[14px] p-2 lg:p-4`} onClick={() => handleImageClick(`data3_${index}`)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right inline fill-black" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /></svg>
                                        {item.title}
                                    </div>
                                    <div className="mx-4">
                                        <ol style={{ display: isOpen === `data3_${index}` ? "block" : "none" }}>
                                            {item.info.map((i, j) => React.createElement("li", { key: j }, i))}
                                        </ol>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* end of col-3 */}
                    {/* col-4 */}
                    <div className="col-span-full md:col-span-2 lg:col-span-1 w-full">
                        <div className={`${styles.price_container_heading} sm:text-sm md:text-md lg:text-xl`}>
                            <span className="block">Ultimate <br></br> Rs.2950/Sq.ft</span>
                        </div>
                        <div className='container w-full rounded-x-lg'>
                            {data4.map((item, index) => (
                                <div key={index} className={styles.data_accordion_div_price}>
                                    <div className={`${styles.question_title} text-sm md:text-[14px] p-2 lg:p-4`} onClick={() => handleImageClick(`data4_${index}`)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right inline fill-black" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /></svg>
                                        {item.title}
                                    </div>
                                    <div className="mx-4">
                                        <ol style={{ display: isOpen === `data4_${index}` ? "block" : "none" }}>
                                            {item.info.map((i, j) => React.createElement("li", { key: j }, i))}
                                        </ol>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* end of col-4 */}
                    {/* col-5 */}
                </div>
            </div>
            <div className="div-section-container flex justify-end ">
                {/* <Modal isOpen={modalIsOpen} ariaHideApp={false} onRequestClose={closeModal} style={customStyles} contentLabel="Book Consultation Pop-up">
                        <button className="block float-right" onClick={closeModal}><img className="w-8 h-8 cursor-pointer invert block" src={require("/images/close-icon.png")} alt="close" ></img></button>
                        <DownloadForm/>
                    </Modal> */}
                <DownloadForm IsModalOpened={modalIsOpen} onCloseModal={handleCloseModal} />
                <button className="button-circle-white" onClick={openFromParent}>DOWNLOAD</button>
            </div>
        </>
    )

}
export default Price;