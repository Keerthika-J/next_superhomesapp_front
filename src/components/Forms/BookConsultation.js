import React, { useState } from 'react';
// import 'reactjs-popup/dist/index.css';
import Modal from 'react-modal';
import { useRouter } from 'next/router';

function BookConsultation(props) {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('Construction');
    const currentPathName = useRouter();
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
            borderRadius: '12px'
        },
    };
    function onModalClose() {
        props.onCloseModal();
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        var formData =
        {
            firstName: fname,
            lastName: lname,
            email: email,
            mobile: phone,
            location: "Chennai",
            service: service,
            source: currentPathName === "/" ? "Home" : currentPathName.pathname,
            messages: null
        }
        fetch("https://www.superhomes.co/admin/public/api/sendmail", {
            method: "post",
            body: JSON.stringify(formData),
            mode: "no-cors",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                console.log(response);
                fetch("https://www.superhomes.co/admin/public/api/update-gallabox", {
                    method: "post",
                    body: JSON.stringify(formData),
                })
                    .then(response => {
                        console.log(response);
                        alert("Thank you for submitting! We will get back to you soon.");
                        window.location.reload(false);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });
    }
    return (
        <Modal isOpen={props.IsModalOpened} style={customStyles} ariaHideApp={false}>
            <div className="w-full bg-white block">
                <button className="block float-right" onClick={e => onModalClose()}><img className="w-8 h-8 cursor-pointer invert block" src="/images/close-icon.png" alt="close" ></img></button>
                <form onSubmit={handleSubmit}>
                    <div className="we-build-section grid grid-cols-2 gap-x-2.5">
                        <div className="my-2">
                            <label className="block my-2">First Name *:</label>
                            <input type="text" id="firstName" className="firstName border-b-2 border-black w-full py-2.5 hover:border-b-[3px]" required onChange={(e) => setFname(e.target.value)}></input>
                        </div>
                        <div className="my-2">
                            <label className="block my-2">Last Name *:</label>
                            <input type="text" id="lastName" className="lastName border-b-2 border-black w-full py-2.5 hover:border-b-[3px]" required onChange={(e) => setLname(e.target.value)}></input>
                        </div>
                        <div className="col-span-2 my-2">
                            <label className="block my-2">Email*:</label>
                            <input type="email" id="email" className="emails border-b-2 border-black w-full py-2.5 hover:border-b-[3px]" required onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="col-span-2 my-2">
                            <label className="block my-2">Phone*:</label>
                            <input type="tel" id="phone" className="phones border-b-2 border-black w-full py-2.5 hover:border-b-[3px]" pattern="[0-9]{10}" title="Mobile number should contain 10 digits." required onChange={(e) => setPhone(e.target.value)}></input>
                        </div>
                        <div className="col-span-2 my-2">
                            <label className="block my-2">Select a Service:</label>
                            <select name="dropdown" id="selectService" className="border-b-2 border-black focus:none outline:none py-2.5 w-full" onChange={(e) => setService(e.target.value)}>
                                <option value="Construction" selected>Construction</option>
                                <option value="Interiors">Interiors</option>
                                <option value="Project-Management">Project Management</option>
                            </select>
                        </div>
                        <div className="col-span-2 my-4">
                            <label className="block my-2">Location:</label>
                            <div className="block">
                                <input value="Chennai" type="radio" name="location" checked />
                                <label htmlFor="Chennai" className="m-2">Chennai</label>
                            </div>
                        </div>
                        <div className="col-span-2 place-self-end">
                            <button id="submit-button" className="w-32 h-32 border border-black rounded-full hover:bg-black hover:text-white">SUBMIT</button>
                        </div>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
export default BookConsultation;