import React from "react";
import { useContext } from "react";
import { TaskManagementContext } from "../contexts/ContextApi";
import "../Task_Style/task.css";
const ShowTaskEvaluation = ({ taskId }) => {
  const {
    selfDescipline,
    desiresControl,
    procastination,
    procrastinated,
    growthPoints,
    obstacleDetails,
  } = useContext(TaskManagementContext);
  let storedTaskEvaluations = localStorage.getItem("task-evaluation");
  storedTaskEvaluations = JSON.parse(storedTaskEvaluations);
  let task = storedTaskEvaluations[6];
  console.log(" the stored tasks evaluations ", storedTaskEvaluations);
  console.log(" teh self Decipline qqqq ", task.selfDescipline.selfDescipline);
  console.log(" the task is ", task);
  return (
    <>
      // to be wrapped in a map function
      <div className="evalautionContainer">
        <div className="evalautionCard">
          <h1 className="evaluation-header2">Self Descipline </h1>
          <h6>Self Descipline Grade</h6>
          {task.selfDescipline.selfDescipline.selfDesciplineGrade}
          <h6>Mindfullness Moments </h6>
          {task.selfDescipline.selfDescipline.mindfullnessMomuntes}
          {console.log(
            "selfDescipline.selfDesciplineGrade",
            selfDescipline.mindfullnessMomuntes
          )}
        </div>
      </div>
      <div className="evalautionContainer">
        <div className="evalautionCard">
          <h1 className="evaluation-header2">Desiers Control </h1>
          <h6>Desires Control Grade </h6>{" "}
          {task.desiresControl.desiresControlGrade}
          <h6> curbing Cravings</h6> {task.desiresControl.curbingCravings}
        </div>
      </div>
      <div className="evalautionContainer">
        <div className="evalautionCard">
          <h1 className="evaluation-header2">Procrastination </h1>
          {task.procastination === false && (
            <h6> Well Done you did not Procrastenate !!</h6>
          )}
          {task.procastination && (
            <>
              <h6 className="evaluation-header4"> Procrastination Timing </h6>
              {task.procrastinated.when}
              <h6 className="evaluation-header4"> Procrastination Reason </h6>
              {task.procrastinated.why}
            </>
          )}
        </div>
      </div>
      <div className="evalautionContainer">
      <div className="evalautionCard">
      <h1 className="evaluation-header2">Growth Points </h1>
      {console.log(" the growth points length", task.growthPoints.length)}
      {console.log(" the growth points ", task.growthPoints)}
      <ol>
        {task.growthPoints.length > 0 &&
          task.growthPoints.map((theGrowthPoint) => (
            <li key={theGrowthPoint.id}>{theGrowthPoint.growthPoint}</li>
          ))}
      </ol>
      </div></div>
      <div className="evalautionContainer">
      <div className="evalautionCard">
      <h1 className="evaluation-header2">Obstacles </h1>
      <h6 className="evaluation-header4"> Obstacle Category </h6>
      {task.obstacleDetails.category}
      <h6 className="evaluation-header4"> Obstacle Description </h6>
      {task.obstacleDetails.description}
      <h6 className="evaluation-header4"> Obstacle Potential Solution[s] </h6>
      {task.obstacleDetails.potentialSolutions.length !== 0 && (
        <ol>
          {task.obstacleDetails.potentialSolutions.map((potentialSolution) => {
            return (
              <li key={potentialSolution.potentialSolId}>
                {potentialSolution.PotentialSolValue}
              </li>
            );
          })}
        </ol>
      )}
      </div>
      </div>
    </>
  );
};

export default ShowTaskEvaluation;
