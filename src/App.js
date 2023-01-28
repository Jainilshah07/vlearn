import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
import Dashboard from './components/Dashboard';
import SignUpTeacher from './pages/login/SignUpTeacher';
import SignUpStudent from './pages/login/SignUpStudent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route
                exact path="/login"
                element={<Login />}
              ></Route>
              <Route
                exact path="/signupteacher"
                element={<SignUpTeacher />}
              ></Route>
              <Route
                exact path="/signupstudent"
                element={<SignUpStudent />}
              ></Route>
            </Routes>
          </BrowserRouter>
      
    </div>
  );
}

export default App;
