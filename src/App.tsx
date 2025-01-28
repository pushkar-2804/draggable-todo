import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Board } from "./pages/Board";
import { TaskPage } from "./pages/TaskPage";
import ErrorBoundaryWrapper from "./components/error/ErrorBoundaryWrapper";
import Footer from "./layout/Footer";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <ErrorBoundaryWrapper>
          <Routes>
            <Route path="/" element={<Board />} />
            <Route path="/task/:taskId" element={<TaskPage />} />
          </Routes>
          <Footer />
        </ErrorBoundaryWrapper>
      </Router>
    </>
  );
}

export default App;
