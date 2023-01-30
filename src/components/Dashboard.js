import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import Card from "./Card";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Sidebar from "./Sidebar";
import { CgProfile } from "react-icons/cg";
import { TbMathSymbols } from "react-icons/tb";

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
        <div className="col-span-2 h-fit">
            <Sidebar />
        </div>
        <div className="col-span-8 mx-5">
            <div className="row mt-2">
              <div className="flex justify-between">
                <p className="text-3xl font-bold">Your Dashboard</p>
                <div className="flex justify-between">
                <Link to="/risk-prediction"> <button className="bg-[#233FF2] mr-3 p-3 my-auto rounded-md text-white font-semibold h-12 w-45">Risk Prediction</button></Link>
                <Link to="/ViewCourses"><button className="bg-[#233FF2] mr-3 p-3 my-auto rounded-md text-white font-semibold h-12 w-45">View Courses</button></Link>
                </div>
              </div>
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

            {/* <div className="row mt-2">
              <p className="text-xl my-3 font-medium"> Academic Cousres </p>
              <div className="grid grid-cols-3 mb-4">
                <div className="col-span-1 mr-2">
                  <Card icon={<TbMathSymbols size="25" />} title="Nevermind" subject="Computer Networks" faculty="Prachi Gawde"   />
                </div>
                <div className="col-span-1 mr-2">
                  <Card icon={<TbMathSymbols size="25" />} title="Nevermind" subject="Flat" faculty="Prachi Gawde"   />
                </div>
                <div className="col-span-1">
                  <Card icon={<TbMathSymbols size="25" />} title="Nevermind" subject="Web Program" faculty="Prachi Gawde"   />
                </div>
              </div>
            </div> */}

        </div>
      </div>
    </>
  )
}

export default Dashboard
