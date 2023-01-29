import React, { useEffect } from "react";
// import Card from "./Card";
import { useNavigate } from 'react-router-dom'
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
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
        <div className="col-span-8 mx-5">
            <div className="row mt-2">
              <p className="text-3xl font-bold">Your Dashboard</p>
              <p className="text-xl my-3 font-medium"> Academic Performance</p>
              <div className="mr-4 p-2 rounded border-2 border-black">
                <Chart1 />
              </div>
              
            </div>
            <div className="row mt-2">
              <p className="text-xl my-3 font-medium"> Academic Attendance Record</p>
              <div className="mr-4 p-2 rounded border-2 border-black">
                <Chart2/>
              </div>


              
            </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
