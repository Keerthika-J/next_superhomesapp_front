import {useState} from 'react';
import styles from "./Forms.module.css";
import Modal from 'react-modal';
import DownloadFiles from './DownloadFiles';
function DownloadForm(props)
{
    const [fname,setFname]=useState('');
    const [lname,setLname]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [service,setService]=useState('Construction');
    const currentPathName = "window.location.href.split("/")[3]";
    const [modalIsOpenFiles, setIsOpenMFiles] = useState(false);
    // sessionStorage.setItem("pageView", fname);
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
    const resetForm=()=>
    {
        setFname("");
        setLname("");
        setEmail("");
        setPhone("");
    }
    const handleSubmit = (e) => 
    {
        e.preventDefault();
        resetForm();
        var formData=
        {
            firstName:fname,
            lastName:lname,
            email:email,
            mobile:phone,
            location:"Chennai",
            service:service,
            messages:null,
            source:currentPathName === "" ? "Home" : `${currentPathName}-downloadForm`
        }    
        fetch("https://www.superhomes.co/admin/public/api/sendmail",{
            method:"post",
            body:JSON.stringify(formData),
            mode:"no-cors",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        })
        .then(response => 
        {
            
            fetch("https://www.superhomes.co/admin/public/api/update-gallabox",{
                method:"post",
                body: JSON.stringify(formData),     
            })
            .then(response => 
            {
                console.log(response);
                console.log(formData);
                openFromParent();
            })
            .catch(error => 
            {
                console.log(error);
            });
        })
        .catch(error => 
        {
            console.log(error);
        });
    }
    function onModalClose() //DownloadForm
    {
        props.onCloseModal();
    }  
    function openFromParent() 
    {
        setIsOpenMFiles(true);
    }
    function handleCloseModal() 
    {
        setIsOpenMFiles(false);
        onModalClose();
    } 
    return(
        <Modal isOpen={props.IsModalOpened} style={customStyles} ariaHideApp={false}>
            <DownloadFiles FilesOpened={modalIsOpenFiles} FilesClosed={handleCloseModal}/>
            <div className="w-full bg-white block md:p-8">
            <button className="block float-right" onClick={e => onModalClose()}><img className="w-8 h-8 cursor-pointer invert block" src="/images/close-icon.png" alt="close" ></img></button>
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-2.5" id="downloadForm">
                    <div className="col-span-2 md:col-span-1 my-2">
                        <label className="block my-2">First Name *</label>
                        <input id="fnameinput" type="text" className="border-b-2 border-black w-full py hover:border-b-[3px] py-2" required value={fname} onChange={(e) => setFname(e.target.value)}></input>
                        <span id="fname" className="text-red-600"></span>
                    </div>
                    <div className="col-span-2 md:col-span-1 my-2">
                        <label className="block my-2">Last Name *</label>
                        <input id="lnameinput" type="text" className="border-b-2 border-black w-full py hover:border-b-[3px] py-2" required value={lname} onChange={(e) => setLname(e.target.value)}></input>
                        <span id="lname" className="text-red-600"></span>
                    </div>
                    <div className="col-span-2 md:col-span-1 my-2">
                        <label className="block my-2">Email*</label>
                        <input id="emailinput" type="email" className="border-b-2 border-black w-full py hover:border-b-[3px] py-2" required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <span id="email" className="text-red-600"></span>
                    </div>
                    <div className="col-span-2 md:col-span-1 my-2">
                        <label className="block my-2">Phone*</label>
                        <input id="phoneinput" type="tel" className="border-b-2 border-black w-full py hover:border-b-[3px] py-2" value={phone} onChange={(e) => setPhone(e.target.value)} pattern="[0-9]{10}" title="Mobile number should contain 10 digits." required></input>
                        <span id="phone" className="text-red-600"></span>
                    </div>
                    <div className="col-span-2 md:col-span-1 col-span-1 my-2">
                        <label className="block my-2">Location</label>
                        <select name = "dropdown" defaultValue={'Chennai'} className="border-b-2 border-black focus:none outline:none py-2 w-full" onChange={(e)=>setService(e.target.value)}>
                            <option value = "Chennai">Chennai</option>
                            {/* <option value = "Others">Others</option> */}
                        </select>
                    </div>
                    <div className="col-span-2 md:col-span-1 col-span-1 my-2">
                        <label className="block my-2">Select a Service</label>
                        <select name = "dropdown" id="selectService" defaultValue={'Construction'} className="border-b-2 border-black focus:none outline:none py-2 w-full" onChange={(e)=>setService(e.target.value)}>
                            <option value = "Construction">Construction</option>
                            <option value = "Interiors">Interiors</option>
                            <option value = "Project-Management">Project Management</option>
                        </select>
                    </div>
                    <div className="col-span-2 block flex justify-end">
                        <button className="button-circle-white mt-8" type='submit'>SUBMIT</button>     
                    </div>
                </form>
            </div>
        </Modal>
    );
}
export default DownloadForm;
