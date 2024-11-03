import React from "react";
import { useContext } from "react";
import { TaskManagementContext } from "../contexts/ContextApi";
import { useNavigate } from "react-router-dom";

const GrowthPoints = () => {
  const { growthPoints, setGrowthPoints } = useContext(TaskManagementContext);
  const navigate = useNavigate();
  function addNewGrowthPoint(e) {
    console.log(" the pressed key", e.key);
    let idValue =
      growthPoints.length === 0
        ? 1
        : parseInt(growthPoints[growthPoints.length - 1].id) + 1;

    console.log(" the IDDDDDDDD value", idValue);
    if (e.key === "Enter") {
      setGrowthPoints([
        ...growthPoints,
        { growthPoint: e.target.value, id: idValue },
      ]);
      e.target.value = "";
    }
  }
  function handleRemoveGrowthPoint(index) {
    const newGrowthArr = growthPoints.filter(
      (growthPoint) => index !== growthPoint.id
    );
    console.log(" the newgroth array ", newGrowthArr);
    setGrowthPoints([...newGrowthArr]);
  }
  function handleSubmit() {
    if (growthPoints.length > 0) {
      navigate("/obstacles");
    }
  }
  return (
    <div className="evalautionContainer">
      <div className="evalautionCard">
        <h2 className="evaluation-header2">Growth </h2>

        <h5 className="procrastination-text">
          Let your pen be your compass
          <br /> <span>guiding you towards self-discovery.</span>
        </h5>

        <div className="user-textArea">
          <textarea
            rows={10}
            cols={50}
            type="text"
            onKeyDown={addNewGrowthPoint}
          ></textarea>
        </div>

        <ol className="text-green-600 font-medium">
          {growthPoints.length > 0 &&
            growthPoints.map((theGrowthPoint) => (
              <li key={theGrowthPoint.id} className="text-xl my-3">
                {theGrowthPoint.growthPoint}
                <button
                  className="bg-red-600 text-white text-sm px-4 py-1 ml-4 rounded"
                  onClick={() => {
                    handleRemoveGrowthPoint(theGrowthPoint.id);
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
        </ol>

        {console.log(
          " the task evaluation at the growth points ",
          growthPoints
        )}
        <button className="evaluation-btn px-12" onClick={handleSubmit}>
          
          Done
        </button>
      </div>
    </div>
  );
};

export default GrowthPoints;
