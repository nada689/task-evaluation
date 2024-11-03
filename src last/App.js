import "./App.css";
import { useState } from "react";
// import {BrowserRouter} from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import {ContextApi} from "./contexts/ContextApi";
import { TaskManagementContext } from "./contexts/ContextApi";

// import Task from "./components/Task";
import TaskEvaluation from "./components/TaskEvaluation";
import Obstacles from "./components/Obstacles";

import Procrastinated from "./components/Procrastinated";
import SelfDescipline from "./components/SelfDescipline";
import DesiresControl from "./components/DesiresControl";
import Procrastination from "./components/Procrastination";
import GrowthPoints from "./components/GrowthPoints";
import ShowTaskEvaluation from "./components/ShowTaskEvaluation";
import SubmitTaskEvaluation from "./components/SubmitTaskEvaluation";

function App() {
  
  const [obstacleDetails, setObstacleDetails] = useState({
    category: "",
    obstacleDescription: "",
    potentialSolutions: [],
  });
  
  const [selfDescipline, setSelfDescipline] = useState({
    selfDesciplineGrade: "",
    mindfullnessMomuntes: "",
  });
  const [desiresControl, setDesiresControl] = useState({
    desiresControlGrade: "",
    curbingCravings: "",
  });

  const [procastination, setProcastination] = useState(true);
  const [growthPoints, setGrowthPoints] = useState([]);
  const [procrastinated, setProcrastinated] = useState({ when: "", why: "" });

  const [submitting, setSubmitting] = useState(false);

  return (
    <div className="App">
      <Router>
        {/* <Obstacles /> */}
        <TaskManagementContext.Provider
          value={{
            obstacleDetails,
            setObstacleDetails,
            submitting,
            setSubmitting,
            procrastinated,
            setProcrastinated,
            selfDescipline,
            setSelfDescipline,
            procastination,
            setProcastination,
            desiresControl,
            setDesiresControl,
            growthPoints,
            setGrowthPoints,
          }}
        >
          <Routes>
            {/* <Route path="/" element={<DashBoard />} /> */}
            <Route path="/task-evaluation" element={<TaskEvaluation />} />
            <Route path="/self-descipline" element={<SelfDescipline />} />
            <Route path="/desires-control" element={<DesiresControl />} />
            <Route path="/procrastination" element={<Procrastination />} />

            <Route path="/procrastinated" element={<Procrastinated />} />
            <Route path="/growth-points" element={<GrowthPoints />} />
            <Route path="/obstacles" element={<Obstacles />} />
            <Route path="/show-task-evaluation" element={<ShowTaskEvaluation />} />
            <Route path="/task-evaluation-submit" element={<SubmitTaskEvaluation />} />
          </Routes>
        </TaskManagementContext.Provider>
      </Router>
    </div>
  );
}

export default App;
