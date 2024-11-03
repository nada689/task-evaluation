import React, { useContext, useEffect } from "react";
import { TaskManagementContext } from "../contexts/ContextApi";
import { useNavigate } from "react-router-dom";

const Obstacles = () => {
  const { obstacleDetails, setObstacleDetails, submitting, setSubmitting } =
    useContext(TaskManagementContext);


  const navigate = useNavigate();
  

  function handleObstacleDetails(e) {
    if (
      (e.target.id === "psychologicalObstacles" ||
        e.target.id === "physicalObstacles" ||
        e.target.id === "externalObstacles") &&
      e.target.checked === true
    ) {
      setObstacleDetails({ ...obstacleDetails, category: e.target.value });
    }

    if (e.target.id === "obstcaleDescription") {
      setObstacleDetails({
        ...obstacleDetails,
        obstacleDescription: e.target.value,
      });
    }

    if (e.target.id === "potentialSolution" && e.key === "Enter") {
      let theId =
        // obstacleDetails.potentialSolutions &&
        obstacleDetails.potentialSolutions.length > 0
          ? obstacleDetails.potentialSolutions[
              obstacleDetails.potentialSolutions.length - 1
            ].potentialSolId + 1
          : 1;

      setObstacleDetails({
        ...obstacleDetails,
        potentialSolutions: [
          ...obstacleDetails.potentialSolutions,
          {
            potentialSolId: theId,
            PotentialSolValue: e.target.value,
          },
        ],
      });

      e.target.value = "";
    }
  }

  function handleSubmit() {
    setSubmitting(true);
    if (
      obstacleDetails.category !== "" &&
      obstacleDetails.obstacleDescription !== "" &&
      obstacleDetails.potentialSolutions.length !== 0
    ) {
     
   
      navigate("/task-evaluation-submit");

    }
  }
  return (
    <div className="evalautionContainer">
      <div className="evalautionCard">
      <h2 className="text-4xl font-semibold text-grape pt-5">Share the Obstacles you faced with us </h2>
        <h3 className="py-4 text-orange-700 text-lg text-blur-5 brightness-200 subpixel-antialiased">
          Bare in mind that repetition and consistency are the key factors of
          success
        </h3>
        <h4 className="pb-3 text-orange-700 text-lg brightness-200 subpixel-antialiased">Strive for progress NOT perfection</h4>
        <label  className="py-1" htmlFor="psychologicalObstacles">
          <input
            type="radio"
            name="obstaclesInput"
            id="psychologicalObstacles"
            value={"psychologicalObstacles"}
            checked={obstacleDetails.category === "psychologicalObstacles"}
            onChange={handleObstacleDetails}
          />
          Psychological
        </label>
        <label  className="py-1" htmlFor="physicalObstacles">
          <input
            type="radio"
            name="obstaclesInput"
            id="physicalObstacles"
            value={"physicalObstacles"}
            checked={obstacleDetails.category === "physicalObstacles"}
            onChange={handleObstacleDetails}
          />
          Internal Physical Reasons
        </label>
        <label  className="py-1" htmlFor="externalObstacle">
          <input
            type="radio"
            name="obstaclesInput"
            id="externalObstacles"
            checked={obstacleDetails.category === "externalObstacle"}
            value={"externalObstacle"}
            onChange={handleObstacleDetails}
          />
          ExternalFactors
        </label>
        <h4  className="text-2xl pt-5">Obstacle description </h4>
        <input
        className="my-3 px-3 py-1 w-3/4 m-auto"
          type="texarea"
          id="obstcaleDescription"
          placeholder="lets explore the obstacle togther "
          onBlur={handleObstacleDetails}
        />
      
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
        {console.log(" the obstacle details ", obstacleDetails)}
        {/*  handeling uncompleted feilds    styling 27mar we kda  */}
        {submitting === true && obstacleDetails.category === "" && (
          <h6 className="text-red-600"> Please Select the Category</h6>
        )}

        {submitting === true && obstacleDetails.obstacleDescription === "" && (
          <h6 className="text-red-600"> Please enter the obstacle's description</h6>
        )}

        <h4 className="text-2xl">Potential Solution[s]</h4>
        <input className="my-3 px-3 py-1 w-3/4 m-auto"
          type="text"
          id="potentialSolution"
          placeholder={"enter the potential solution and press Enter"}
          onKeyDown={handleObstacleDetails}
        />

        {submitting === true &&
          obstacleDetails.potentialSolutions.length === 0 && (
            <h6 className="text-red-600">Please suggest potential Solution[s]</h6>
        )}

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
        {console.log(" the obstacle details ", obstacleDetails)}
        <button className="evaluation-btn px-4" onClick={handleSubmit}>Done</button>
     {console.log(" the obstacles from the obstacles component" , obstacleDetails)}
      </div>
      
    </div>
  );
};

export default Obstacles;
