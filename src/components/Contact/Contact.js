import React, { useState } from 'react';
import Drawers from '../Drawers';
import FixedMenu from '../FixedMenu/FixedMenu';
import { useRouter } from 'next/router';

function Contact() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessages] = useState('');
    const currentPathName = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        var formData =
        {
            firstName: fname,
            lastName: lname,
            email: email,
            mobile: phone,
            location: "Chennai",
            service: null,
            messages: message,
            source: currentPathName === "/" ? "Home" : currentPathName.pathname
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
        <>
            <div className="outer-div div-section-container relative bg-white">
                <FixedMenu />
                <Drawers />
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="flex flex-col justify-between w-full lg:w-2/4 mt-20 md:mt-28">
                        <span className="block text-[28.3721px] md:text-[54.2px]">Contact Us</span>
                        <div className="text-[13.8px] md:text-[23.8px] leading-[20.7px] md:leading-[35.7px]">
                            <span className="block my-2 w-11/12 md:w-9/12">Address: 2/515A, 2nd Main Road, Sandeep Avenue, Neelankarai, Chennai - 600115</span>
                            <span className="block my-2">Email: <a href="mailto:contact@superhomes.co?subject=A message to SuperHomes Team" className="underline">contact@superhomes.co</a> </span>
                            <span className="block my-2">Phone: <a href="tel:+919360397461" className="underline">  +91 93603 97461</a></span>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-2.5 w-full lg:w-2/4 mt-4 lg:mt-32">
                        <div className="my-2">
                            <label className="block my-2">First Name *</label>
                            <input type="text" className="firstName border-b-2 border-black w-full py-2.5 hover:border-b-[3px]" required onChange={(e) => setFname(e.target.value)}></input>
                        </div>
                        <div className="my-2">
                            <label className="block my-2">Last Name *</label>
                            <input type="text" className="lastName border-b-2 border-black w-full py-2.5 hover:border-b-[3px]" required onChange={(e) => setLname(e.target.value)}></input>
                        </div>
                        <div className="my-2">
                            <label className="block my-2">Email*</label>
                            <input type="email" className="emails border-b-2 border-black w-full py-2.5 hover:border-b-[3px]" required onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="my-2">
                            <label className="block my-2">Phone</label>
                            <input type="tel" className="phones border-b-2 border-black w-full py-2.5 hover:border-b-[3px]" pattern="[0-9]{10}" title="Mobile number should contain 10 digits." required onChange={(e) => setPhone(e.target.value)}></input>
                        </div>
                        <div className="col-span-2 my-2">
                            <label className="block my-2">Message</label>
                            <input type="text" className="msg border-b-2 border-black w-full py-2.5 hover:border-b-[3px]" required onChange={(e) => setMessages(e.target.value)}></input>
                        </div>
                        <div className="col-span-full flex justify-end mt-8">
                            <button className="button-circle-white">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
            {/*Contact section */}
            <div className="outer-div relative bg-white">
                <div id="map-container-google-1" className="z-depth-1-half map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.258254179577!2d80.2567463147401!3d12.95531949086662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d74d4033767%3A0x63a079011d1444db!2sSuperHomes!5e0!3m2!1sen!2sin!4v1678547900082!5m2!1sen!2sin" width="100%" height="350px" className="rounded-xl" allowFullScreen="" title='SuperHomes Office Location' referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    );
}
// export async function getServerSideProps() {
//     try {
//         const response = await axios.get('/api/meta');
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching meta tags:', error);
//         return {};
//     }
// }
export default Contact;