import App from "../App";
function Menu(props)
{
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => 
    {
        setToggleState(index);
    };
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => 
    {
        setIsOpen((prevState) => !prevState)
    }
    return(
        <div className="max-h-full col-span-full col-start-7">
        <div className="dash-content-tabs">
                  <div className={toggleState === 1 ? "dash-content  dash-active-content" : "dash-content"}>
                      <App/>
                  </div>
                                     
             </div></div>
    );
}