import React from 'react'
import { useContext } from 'react'
import { TaskManagementContext } from '../contexts/ContextApi'
const SubmitTaskEvaluation = () => {

    const {
        selfDescipline,
        desiresControl,
        procastination,
        procrastinated,
        growthPoints,
        obstacleDetails,
      } = useContext(TaskManagementContext);
      const taskEval={   selfDescipline,
        desiresControl,
        procastination,
        procrastinated,
        growthPoints,
        obstacleDetails,}
    
      function handleSubmit (){
     
        const storedTaskEvaluations = localStorage.getItem("task-evaluation");
    let existingTaskEvaluations = [];

    if (storedTaskEvaluations) {
      existingTaskEvaluations = JSON.parse(storedTaskEvaluations);
    }

    existingTaskEvaluations.push(taskEval);
    localStorage.setItem("task-evaluation", JSON.stringify(existingTaskEvaluations));
    console.log(localStorage.getItem("task-evaluations"))
  }
    
      return (
        
        <div>
      
          <button onClick={handleSubmit}> Submit </button>
        
        </div>
      )
    }
    export default SubmitTaskEvaluation

      // {/* {canSubmit===false &&<h6>All Data are required !!</h6>} */}
      //     {/* {console.log("can Submit ",canSubmit)} */}
    
