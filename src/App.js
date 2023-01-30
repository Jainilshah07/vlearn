import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./components/Dashboard";
import SignUpTeacher from "./pages/login/SignUpTeacher";
import SignUpStudent from "./pages/login/SignUpStudent";
import Calendar from "./pages/Calendar";
import FormStud from "./pages/FormStud";
import FormTeach from "./pages/FormTeach";
import ViewCourses from "./pages/ViewCourses";
import RiskPrediction from "./pages/RiskPrediction";
import Notes from "./pages/Notes";
import Assignment from "./pages/Assignment";
import LetsImprove from "./pages/LetsImprove";
import Dashboard2 from "./components/Dashboard2";
// import { Calendar } from "@fullcalendar/core";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/login" element={<Login />}></Route>
              <Route
                exact
                path="/signupteacher"
                element={<SignUpTeacher />}
              ></Route>
              <Route
                exact
                path="/signupstudent"
                element={<SignUpStudent />}
              ></Route>
              <Route
                exact
                path="/calendar"
                element={<Calendar />}
              ></Route>
              <Route
                exact
                path="/profile-student"
                element={<FormStud />}
              ></Route>
              <Route
                exact
                path="/profile-teacher"
                element={<FormTeach />}
              ></Route>
              <Route
                exact
                path="/notes"
                element={<Notes />}
              ></Route>
              <Route
                exact
                path="/ViewCourses"
                element={<ViewCourses/>}
              ></Route>
              <Route
                exact
                path="/risk-prediction"
                element={<RiskPrediction />}
              ></Route>
              <Route
                exact
                path="/announcements"
                element={<Assignment />}
              ></Route>
              <Route
                exact
                path="/lets-improve"
                element={<LetsImprove />}
              ></Route>
              <Route
                exact
                path="/dashboard2"
                element={<Dashboard2 />}
              ></Route>
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
