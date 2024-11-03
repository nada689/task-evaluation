import React, { useContext, useEffect } from "react";
import { TaskManagementContext } from "../contexts/ContextApi";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
const Obstacles = () => {
  const { obstacleDetails, setObstacleDetails, submitting, setSubmitting } =
    useContext(TaskManagementContext);

  useEffect(() => {
    return () => {
      setObstacleDetails({
        category: "",
        obstacleDescription: "",
        potentialSolutions: [],
      });
      setSubmitting(false);
    };
  }, []);
  const navigate = useNavigate();
  let existingObstacles = [];

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
        obstacleDetails.potentialSolutions &&
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
      //submit the data to
      // note we are to use the  existingObstacles in the overall rendering
      const storedObstacles = localStorage.getItem("obstacles");
      //obj format
      console.log(" the obstacles got ", storedObstacles);
      if (storedObstacles) {
        // {    const data=JSON.parse(storedObstacles);
        // const  dataAsObj = Object.fromEntries(data);

        existingObstacles.push(JSON.parse(storedObstacles));
        console.log(" the existing obstacles ", existingObstacles);
        existingObstacles.push(obstacleDetails);
        localStorage.setItem("obstacles", JSON.stringify(existingObstacles));
      } else {
        localStorage.setItem("obstacles", JSON.stringify([obstacleDetails]));
      }
      // localStorage.setItem("obstacles",JSON.stringify(obstacleDetails))
      // console.log(" the Local Storage Partttttttt");
      // console.log(" the Local Storage  existingObstacles ",existingObstacles);
      // console.log(" the Local Storage storedObstacles ",storedObstacles);
      // THE PATH IS TO BE CHANGED !!!!
      navigate("/task-evaluation-submit");
      // Naviagte to the tasks dash board ( create , update , delete ,...........)
    }
  }
  return (
    <div className="evalautionContainer">
      <div className="evalautionCard">
        <h2 className="text-4xl text-grape">Share the Obstacles you faced with us </h2>
        <h3>
          Bare in mind that repetition and consistency are the key factors of
          success
        </h3>
        <h4>Strive for progress NOT perfection</h4>
        <label htmlFor="psychologicalObstacles">
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
        <label htmlFor="physicalObstacles">
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
        <label htmlFor="externalObstacle">
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
        <h4>Obstacle description </h4>
        <input
          type="texarea"
          id="obstcaleDescription"
          placeholder="lets explore the obstacle togther "
          onBlur={handleObstacleDetails}
        />
        <h4>Potential Solution[s]</h4>
        <input
          type="text"
          id="potentialSolution"
          placeholder={"enter the potential solution and press Enter"}
          onKeyDown={handleObstacleDetails}
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
          <h6> Please Select the Category</h6>
        )}
        {submitting === true && obstacleDetails.obstacleDescription === "" && (
          <h6> Please enter the obstacle's description</h6>
        )}
        {submitting === true &&
          obstacleDetails.potentialSolutions.length === 0 && (
            <h6>Please suggest potential Solution[s]</h6>
          )}
     <button onClick={handleSubmit}>Done</button>
      </div>
      
    </div>
  );
};

export default Obstacles;
