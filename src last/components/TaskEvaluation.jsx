import React, { useState } from "react";
import "../taskEvaluation.css";
import SelfDescipline from "./SelfDescipline";
import DesiresControl from "./DesiresControl";
import Procrastination from "./Procrastination";
import GrowthPoints from "./GrowthPoints";
import Obstacles from "./Obstacles";
// import Procrastination from "./Procrastination";
 
  
  const TaskEvaluation = () => {
    
    const components = [
      <SelfDescipline />,
      <DesiresControl />,
      <Procrastination />,
      <GrowthPoints />,
      <Obstacles />
    ];
    
    const [currentPage, setCurrentPage] = useState(0);
  
    const handleNext = () => {
      if (currentPage < components.length - 1) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePrevious = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    };

  return (
    <div className="body">
    <div className="taskEvaluationContainer">
      {components[currentPage]}
    </div>

    <div className="evaluation-navigation-container">
      <button className="prev-btn" onClick={handlePrevious} disabled={currentPage === 0}>
        Previous
      </button>
      <button className="next-btn" onClick={handleNext} disabled={currentPage === components.length - 1}>
        Next
      </button>
    </div>
  </div>
  );
};

export default TaskEvaluation;

