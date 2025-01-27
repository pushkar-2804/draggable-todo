import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Board } from "./pages/Board";
import { TaskPage } from "./pages/TaskPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/task/:taskId" element={<TaskPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
