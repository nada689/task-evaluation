import React from 'react'
import { useContext } from 'react'
import { TaskManagementContext } from '../contexts/ContextApi'
import { useNavigate } from 'react-router-dom'
const SubmitTaskEvaluation = () => {

    const {
        selfDescipline,
        desiresControl,
        procastination,
        procrastinated,
        growthPoints,
        obstacleDetails,
      } = useContext(TaskManagementContext);
      // console.log()
      const taskEval={   selfDescipline,
        desiresControl,
        procastination,
        procrastinated,
        growthPoints,
        obstacleDetails,}
        console.log(" the task eval issss", taskEval); 
        const navigate=useNavigate();
    
      function handleSubmit (){
     
        const storedTaskEvaluations = localStorage.getItem("task-evaluation");
    let existingTaskEvaluations = [];

    if (storedTaskEvaluations) {
      existingTaskEvaluations = JSON.parse(storedTaskEvaluations);
    }

    existingTaskEvaluations.push(taskEval);
    localStorage.setItem("task-evaluation", JSON.stringify(existingTaskEvaluations));
    console.log(localStorage.getItem("task-evaluations"))
    navigate("/show-task-evaluation");
  }
    
      return (
        
        <div>
      
          <button onClick={handleSubmit}> Submit </button>
        
        </div>
      )
    }
    export default SubmitTaskEvaluation


    
