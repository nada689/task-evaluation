import React, { useContext } from "react";
import { TaskManagementContext } from "../contexts/ContextApi";
import { useNavigate} from "react-router-dom";

const Procrastinated = () => {
  // procrastination, setProcrastination
  const{procrastinated, setProcrastinated}=useContext(TaskManagementContext); 
  const navigate=useNavigate();
  function handleSubmit(){
    // submit the data to the local storage 
    const existingData = JSON.parse(localStorage.getItem('procrastination')) || [];
    const updatedData = [...existingData, procrastinated];
    localStorage.setItem('procrastination', JSON.stringify(updatedData));

  //naviagte back to the task evaluation 
  navigate("/growth-points")

  }
 
  return <div className="evalautionContainer">
    <div className="evalautionCard">
      <h2 className="evaluation-header2"> Procrastination Timing </h2>
      <p className="text-lg text-center p-5"> Do not worry dear we are here to help you reach the best version of you every thing can be reached if we are determined </p>
      <div className="user-textArea">
        <textarea rows={2} cols={20} required id="ProcrastinationTimming" onChange={(e)=>{setProcrastinated({...procrastinated , when:e.target.value })}} ></textarea>
      </div>

      <h4 className="evaluation-header4"> Procrastination Reason  </h4>
      <p className="text-lg text-center p-5">why did you procrastintate ..... writting down the reasons helps you exploring ypur self hence be more conscience , best wishes i your best version of you journey  </p>
      <div className="user-textArea">
        <textarea rows={2} cols={20} required id="ProcrastinationReason" onChange={(e)=>{setProcrastinated({...procrastinated , why :e.target.value })}} ></textarea>
      </div>
      <button className="submit-evaluation-btn" onClick={handleSubmit}>Done </button>
    </div>
  </div>

};

export default Procrastinated; 
