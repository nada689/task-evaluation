import React from 'react'
import { useContext } from 'react'
import { TaskManagementContext } from '../contexts/ContextApi'
import { useNavigate } from "react-router-dom";

const GrowthPoints = () => {
    const {growthPoints, setGrowthPoints}=useContext(TaskManagementContext);
    const navigate=useNavigate();
    function addNewGrowthPoint(e) {
        console.log(" the pressed key", e.key);
        let idValue =
        growthPoints.length === 0
            ? 1
            : parseInt(growthPoints[growthPoints.length - 1].id) +
              1;
    
        console.log(" the IDDDDDDDD value", idValue);
        if (e.key === "Enter") {
          setGrowthPoints([...growthPoints,{ growthPoint: e.target.value, id: idValue }])
          e.target.value = "";
        }
      }
      function handleRemoveGrowthPoint(index) {
        const newGrowthArr = growthPoints.filter(
          (growthPoint) => index !== growthPoint.id
        );
        console.log(" the newgroth array ",newGrowthArr)
        setGrowthPoints([...newGrowthArr]  );
        
      }
      function handleSubmit(){
        if (growthPoints.length >0)
        {
            navigate("/obstacles")
        }
      
      }
  return (
    <div className="evalautionContainer">
      <div className="evalautionCard">
      <h2 className="evaluation-header2">Growth </h2>
        <ol>
          {growthPoints.length > 0 &&
          growthPoints.map((theGrowthPoint) => (
              <li key={theGrowthPoint.id}>
                {theGrowthPoint.growthPoint}
                <button
                  onClick={() => {
                    handleRemoveGrowthPoint(theGrowthPoint.id);
                  }}
                >
                  x
                </button>
              </li>
            ))}
        </ol>

        <h5 className="procrastination-text">
          Let your pen be your compass
          <br /> guiding you towards self-discovery.
          {/*  n5ale el input field focused  */}
        </h5>
      
        <div className="user-textArea">
        <textarea
          rows={10}
          cols={50} 
          type="text" 
          onKeyDown={addNewGrowthPoint} >
        </textarea>
      </div>
      </div>
      {console.log(" the task evaluation at the growth points ",growthPoints)}
      <button onClick={handleSubmit} > Done </button>
  </div>

  )
}

export default GrowthPoints
