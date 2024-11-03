import React from "react";

import { useContext } from "react";
import { TaskManagementContext } from "../contexts/ContextApi";


const ShowTaskEvaluation = ({taskId}) => {
    const {
        selfDescipline,
        desiresControl,
        procastination,
        procrastinated,
        growthPoints,
        obstacleDetails,
      } = useContext(TaskManagementContext);
    let storedTaskEvaluations=   localStorage.getItem("task-evaluation"); 
     storedTaskEvaluations=JSON.parse(storedTaskEvaluations)
     let task =storedTaskEvaluations[0];
    console.log(" the stored tasks evaluations ", storedTaskEvaluations); 
  return (
    // to be wrapped in a map function 
    <div>
      <h1>Self Descipline </h1>
      <h6>Desires Control </h6> {selfDescipline.selfDesciplineGrade}
      {console.log("selfDescipline.selfDesciplineGrade",task.selfDescipline.selfDesciplineGrade)}
      <h6>Mindfullness Moments </h6> {task.selfDescipline.mindfullnessMomuntes}
      {console.log("selfDescipline.selfDesciplineGrade",selfDescipline.mindfullnessMomuntes )}
      <hr />
      <h1>Desiers Control </h1>
      <h6>Desires Control </h6> {desiresControl.desiresControlGrade}
      <h6>Mindfullness Moments </h6> {desiresControl.curbingCravings}
      <hr />
      <h1>Procrastination </h1>
      {procastination === false && <h6> Well Done you did not Procrastenat</h6>}
      {procastination && (
        <>
          <h6> Procrastination Timing </h6>
          {procrastinated.when}
          <h6> Procrastination Reason </h6>
          {procrastinated.why}
        </>
      )}
      <h1>Growth Points </h1>
      <ol>
        {growthPoints.length > 0 &&
          growthPoints.map((theGrowthPoint) => (
            <li key={theGrowthPoint.id}>{theGrowthPoint.growthPoint}</li>
          ))}
      </ol>
      <hr />
      <h1>Obstacles </h1>
      <h6> Obstacle Category </h6>{obstacleDetails.category}
      <h6> Obstacle Description </h6>{obstacleDetails.description}
      <h6> Obstacle Potential Solution[s] </h6>
      {obstacleDetails.potentialSolutions.length !== 0 && (
        <ol>
          {obstacleDetails.potentialSolutions.map((potentialSolution) => {
            return (
              <li key={potentialSolution.potentialSolId}>
                {potentialSolution.PotentialSolValue}
              </li>
            );
          })}
        </ol>
      )}

        
    </div>
  );
};

export default ShowTaskEvaluation;
