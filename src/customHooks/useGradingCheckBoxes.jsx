import React from "react";
// import "../taskEvaluation.css"
const useGradingCheckBoxes = ({
  taskEvaluation,
  setTaskEvaluation,
  field,
  title,
  checkedCheckBox,
  setCheckedCheckBox,
}) => {
  function checkBoxesGrading() {
    return (
      <div>
        <label className="flex items-center space-x-2 text-gray-500 cursor-pointer evaluation-label">
          <input
            type="radio"
            name="evaluation-grade"
            value={"excellent"}
            onChange={(e) => {
              setTaskEvaluation({
                ...taskEvaluation,
                [field]: { ...taskEvaluation[field], [title]: "excellent" },
              });
            

              setCheckedCheckBox(e.target.value);
            }}
            checked={title && checkedCheckBox === "excellent"}
            // checked={

            //   field[title] &&
            //   field[title] === "excellent"
            // }
            className="border rounded bg-white hover:bg-gray-100 focus:outline-none"
          />
          Excellent
        </label>
        <label className="flex items-center space-x-2 text-gray-500 cursor-pointer evaluation-label">
          <input
            type="radio"
            name="evaluation-grade"
            value={"veryGood"}
            onChange={(e) => {
              setTaskEvaluation({
                ...taskEvaluation,
                [field]: {
                  ...taskEvaluation[field],
                  [title]: "veryGood",
                },
              });
              setCheckedCheckBox(e.target.value);
            }}
            // checked={
            //   (taskEvaluation.selfDescipline.selfDesciplineGrade && taskEvaluation.selfDescipline.selfDesciplineGrade=== "veryGood")
            //  }
            checked={title && checkedCheckBox === "veryGood"}
            className="border rounded bg-white hover:bg-gray-100 focus:outline-none"
          />
          Very Good
        </label>
        <label className="flex items-center space-x-2 text-gray-500 cursor-pointer evaluation-label">
          <input
            type="radio"
            name="evaluation-grade"
            value={"good"}
            onChange={(e) => {
              setTaskEvaluation({
                ...taskEvaluation,
                [field]: {
                  ...taskEvaluation[field],
                  [title]: "good",
                },
              });
              setCheckedCheckBox(e.target.value)
            }}

            checked={title && checkedCheckBox === "good"}
            className="border rounded bg-white hover:bg-gray-100 focus:outline-none"
          />
          Good
        </label>
        <label className="flex items-center space-x-2 text-gray-500 cursor-pointer evaluation-label">
          <input
            type="radio"
            name="evaluation-grade"
            value={"fair"}
            onChange={(e) => {
              setTaskEvaluation({
                ...taskEvaluation,
                [field]: {
                  ...taskEvaluation[field],
                  [title]: "fair",
                },
              });
              setCheckedCheckBox(e.target.value)
              
            }}
            checked={title && checkedCheckBox === "fair"}
            className="border rounded bg-white hover:bg-gray-100 focus:outline-none"
          />
          Fair
        </label>
        <label className="flex items-center space-x-2 text-gray-500 cursor-pointer evaluation-label">
          <input
            type="radio"
            name="evaluation-grade"
            value={"poor"}
            onChange={(e) => {
              setTaskEvaluation({
                ...taskEvaluation,
                [field]: {
                  ...taskEvaluation[field],
                  [title]: "poor",
                },
              });
              setCheckedCheckBox(e.target.value)
            }}
            checked={title && checkedCheckBox === "poor"}
            className="border rounded bg-white hover:bg-gray-100 focus:outline-none"
          />
          Poor
        </label>
        {console.log(" the TASSSSSSSSk evaluation", taskEvaluation)}
        {console.log(" the checked checked box value ", checkedCheckBox)}
      </div>
    );
  }
  return checkBoxesGrading;
};

export default useGradingCheckBoxes;
