import React from "react";

const useDocument = ({taskEvaluation, setTaskEvaluation,field, title}) => {
  
    const renderTextArea=()=>{ 
        return (
            <div className="user-textArea">
             <textarea
                rows={10}
                cols={50}
                onChange={(e) => {
                  setTaskEvaluation({
                    ...taskEvaluation,
                    [field]: {
                      ...taskEvaluation[field],
                      [title]: e.target.value,
                    },
                  });
                  console.log(
                    " the e.target .value of the title text area ",
                    e.target.value
                  );
                }}
              ></textarea>
            </div>
          )
    }
return renderTextArea;
 

};

export default useDocument;