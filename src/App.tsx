import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Board } from "./pages/Board";
import { TaskPage } from "./pages/TaskPage";
import ErrorBoundaryWrapper from "./components/error/ErrorBoundaryWrapper";

function App() {
  return (
    <>
      <Router>
        <ErrorBoundaryWrapper>
          <Routes>
            <Route path="/" element={<Board />} />
            <Route path="/task/:taskId" element={<TaskPage />} />
          </Routes>
        </ErrorBoundaryWrapper>
      </Router>
    </>
  );
}

export default App;
