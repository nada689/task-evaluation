import React from 'react'
import { useContext } from 'react'
import { TaskManagementContext } from '../contexts/ContextApi'
import { useNavigate } from "react-router-dom";
// const [procastination, setProcastination] = useState(true); // el true deh msma3ah wala la2 ?
const Procrastination = () => {
    const {procastination, setProcastination}=useContext(TaskManagementContext);
    const naviagte = useNavigate();
  return (

    <div className="evalautionContainer">
      <div className="evalautionCard procastination">
        <h2 className="evaluation-header2"> Procastination</h2>
        <h4 className="evaluation-header4"> Did you procrastinate ?</h4>
        <div className="procastinationButtons">
          <button onClick={() => {
            naviagte("/procrastinated");
            }} 
            className="evaluation-btn"
          >
            Unfortunately, I have procrastinated😞
          </button>
          <button onClick={()=>{setProcastination(false)}}          className="evaluation-btn">
            Nope, I am self-conscious😊
          </button>
        </div>
      </div>
    </div>
    
    
  )
}

export default Procrastination
