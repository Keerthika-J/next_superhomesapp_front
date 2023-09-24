import './Forms.css'
export function Template({ name}) {
  return (
    <body style={{backgroundImage: "linear-gradient(to right, #804b99, #3c3085)", width:"100%",padding:"30px 0px"}}>
        <div style={{backgroundColor: "white",borderRadius:'12px',display:"block",margin:"auto",width:"75%", height:"fit-content", padding:"32px"}}>
            <div style={{display:"flex",justifyContent:"flex-end"}}>
                <img src="https://www.superhomes.co/admin/public/uploads/SuperHomes_TM_Logo_Transparent_Emailer.png" width="125" height="auto"></img>
            </div>
            <div style={{margin:"5% 0"}}>
                <h1>Thank you for filling out your information!</h1>
            </div>
            <div style={{margin:"0 0 5%"}}>
                <span style={{lineHeight:"2",fontSize:"20px"}}>
                    We have received your message and would like to thank you for writing to us.<br></br> 
                    We will reply by email as soon as possible.<br></br>
                    Talk to you soon, SuperHomes Team.
                </span>
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"15% 0 5%"}}>                
                <a href="https://superhomes.co/" style={{textDecoration:"none"}}>Check out our website</a>
            </div>
        </div>
    </body>
  )
}
