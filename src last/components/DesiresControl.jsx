import React from 'react'
import { useContext, useState } from 'react'; 
import { TaskManagementContext } from '../contexts/ContextApi';
import useGradingCheckBoxes from "../customHooks/useGradingCheckBoxes";
import useDocument from "../customHooks/useDocument";
import "../Task_Style/task.css";

const DesiresControl = () => {
    
    const{desiresControl, setDesiresControl}=useContext( TaskManagementContext)
    const [desiresControlCheckedCheckBox, setDesiresControlCheckedCheckBox] =
    useState(null);

    const desiresControlCheckBoxGradingFun = useGradingCheckBoxes({
        taskEvaluation: desiresControl,
        setTaskEvaluation:setDesiresControl,
        field: "desiresControl",
        title: "desiresControlGrade",
        checkedCheckBox: desiresControlCheckedCheckBox,
        setCheckedCheckBox: setDesiresControlCheckedCheckBox,
      });
      
      const desiresControlDocumentItField = useDocument({
        taskEvaluation: desiresControl,
        setTaskEvaluation:setDesiresControl
        , 
        field: "desiresControl",
        title: "curbingCravings",
      });
  return (

    <div className="evalautionContainer">
      <div className="evalautionCard">
        <h2 className="evaluation-header2"> Desires Control</h2>
        <div className="checkBoxs">{desiresControlCheckBoxGradingFun()}</div>
        {/* <div className="notesContainer"> */}
        <h4 className="evaluation-header4"> Curbing Cravings</h4>
        {desiresControlDocumentItField()}
        {/* </div> */}
      </div>
      
      {console.log(" the task evaluation at the desires Control ",desiresControl)}
    </div>
      
  )
}

export default DesiresControl
