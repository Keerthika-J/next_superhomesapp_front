import React from 'react';
import Modal from 'react-modal';
import styles from "./Forms.module.css";
// import SuperHomes_Basic_Package from "./images/packagePDF/SuperHomes_Basic_Package.pdf";
// import SuperHomes_Essential_Package from "./images/packagePDF/SuperHomes_Essential_Package.pdf";
// import SuperHomes_Essential_PLUS_Package from "./images/packagePDF/SuperHomes_Essential_PLUS_Package.pdf";
// import SuperHomes_Ultimate_Package from "./images/packagePDF/SuperHomes_Ultimate_Package.pdf";
function DownloadFiles(props) 
{
    const customStyles = 
    {
        content: 
        {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          borderRadius:'12px'
        },
    };
    function onModalClose() 
    {
        props.FilesClosed();
    }
    return(
        <Modal isOpen={props.FilesOpened} style={customStyles} ariaHideApp={false}>
            <div className="mb-8 text-end">
                <button className="" onClick={e => onModalClose()}>
                    <img className="w-8 h-8 cursor-pointer invert" src="/images/close-icon.png" alt="close" ></img>
                </button>
            </div>
            {/* <div className="downloadFileModal block">
                <div className="budgetPackage m-8">
                    <button><a href={SuperHomes_Basic_Package} download="SuperHomes_Basic_Package.pdf">Budget Package - Download</a></button>
                </div>
                <div className="budgetPackage m-8">
                    <button><a href={SuperHomes_Essential_Package} download="SuperHomes_Essential_Package.pdf">Essential Package - Download</a></button>
                </div>
                <div className="budgetPackage m-8">
                    <button><a href={SuperHomes_Essential_PLUS_Package} download="SuperHomes_Essential_PLUS_Package.pdf">Essential PLUS Package - Download</a></button>
                </div>
                <div className="budgetPackage m-8">
                    <button><a href={SuperHomes_Ultimate_Package} download="SuperHomes_Ultimate_Package.pdf">Ultimate  Package - Download</a></button>
                </div>
            </div> */}
        </Modal>
  )
};
export default DownloadFiles;
