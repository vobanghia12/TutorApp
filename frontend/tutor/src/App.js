import "./App.css";
import NavBar from "./components/navbar";
import SignUpTeacher from "./pages/SignUpTeacher";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./index.css";
import Choices from "./pages/Choices";
import Login from "./pages/Login";
import Teacher from "./pages/Teacher";

function App() {
  return (
    <Router>
      <div className="font-display h-screen px-4 py-8 bg-white text-black">
        <NavBar />
        <Routes>
          <Route
            path="/SignUpStudent"
            element={<SignUpTeacher isTeacher={0} />}
          />
          <Route
            path="/SignUpTeacher"
            element={<SignUpTeacher isTeacher={1} />}
          />
          <Route path="/Choices" element={<Choices />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Teacher" element={<Teacher />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
