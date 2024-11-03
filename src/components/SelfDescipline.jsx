import React from 'react'
import { useContext, useState } from 'react'; 
import { TaskManagementContext } from '../contexts/ContextApi';
import useGradingCheckBoxes from "../customHooks/useGradingCheckBoxes";
import useDocument from "../customHooks/useDocument";
import "../Task_Style/task.css";


const SelfDescipline = () => {

    const {selfDescipline, setSelfDescipline}=useContext(TaskManagementContext);
    const [selfDesciplineCheckedCheckBox, setselfDesciplineCheckedCheckBox] =
    useState(null);

    const selfDesciplineCheckBoxGradingFun= useGradingCheckBoxes({
      taskEvaluation: selfDescipline,
      setTaskEvaluation:setSelfDescipline,
      field: "selfDescipline",
      title: "selfDesciplineGrade",
      checkedCheckBox: selfDesciplineCheckedCheckBox,
      setCheckedCheckBox: setselfDesciplineCheckedCheckBox,
    });

    const selfsDesciplineDocumentItField = useDocument({
      taskEvaluation: selfDescipline,
      setTaskEvaluation:setSelfDescipline,
      field: "selfDescipline",
      title: "mindfullnessMomuntes",
    });


  return (

    <div className="evalautionContainer">
      <div className="evalautionCard">
        <h2 className="evaluation-header2"> Self Discipline </h2>
        <div className="checkBoxs">{selfDesciplineCheckBoxGradingFun()}</div>
        <h4 className="evaluation-header4">Mindfulness Moments</h4>
        {selfsDesciplineDocumentItField()}
      </div>
    </div>
  )
}

export default SelfDescipline
