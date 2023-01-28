import React, { useEffect } from "react";
// import Card from "./Card";
import { useNavigate } from 'react-router-dom'
import Sidebar from "./Sidebar";

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('signature')){
           console.log("loggin succes")
        }
        else{
          navigate("/login");
          console.log("Not loggin")
        }
        // eslint-disable-next-line
      },[]);

  return (
    <>
      <div className="grid grid-cols-10">
        <div className="col-span-2">
            <Sidebar />
        </div>
        <div>
            {/* grpahs n cards */}
        </div>
      </div>
    </>
  )
}

export default Dashboard
