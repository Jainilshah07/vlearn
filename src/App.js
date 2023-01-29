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
// import { Calendar } from "@fullcalendar/core";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
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
                path="/risk-pred"
                element={<Calendar/>}
              ></Route>
              <Route
                exact
                path="/ViewCourses"
                element={<ViewCourses/>}
              ></Route>
            </Routes>
          </BrowserRouter> */}
          <RiskPrediction/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
