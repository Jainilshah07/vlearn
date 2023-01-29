import React from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import { TbMathSymbols } from "react-icons/tb";
import { Link } from 'react-router-dom'

const ViewCourses = () => {
  return (
    <div>
        {/* <div className="grid grid-cols-10"></div> */}
      {/* <p className="text-3xl font-bold">Your Dashboard</p> */}
      <div className="grid grid-cols-10">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-8">
        <p className="text-3xl font-bold">Your Courses</p>
          <div className="mt-4 mx-3 grid grid-col-3">
            <div className="grid grid-cols-3 mb-4">
              <div className="col-span-1 mr-2">
                <Card
                  icon={<TbMathSymbols size="22" />}
                  title="Nevermind"
                  subject="Computer Networks"
                  faculty="Prachi Gawde"
                />
              </div>
              <div className="col-span-1 mr-2">
                <Card
                  icon={<TbMathSymbols size="22" />}
                  title="Nevermind"
                  subject="Flat"
                  faculty="Prachi Gawde"
                />
              </div>
              <div className="col-span-1">
                <Card
                  icon={<TbMathSymbols size="25" />}
                  title="Nevermind"
                  subject="Web Program"
                  faculty="Prachi Gawde"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 mx-3 grid grid-col-3">
            <div className="grid grid-cols-3 mb-4">
              <div className="col-span-1 mr-2">
                <Card
                  icon={<TbMathSymbols size="22" />}
                  title="Nevermind"
                  subject="Computer Networks"
                  faculty="Prachi Gawde"
                />
              </div>
              <div className="col-span-1 mr-2">
                <Card
                  icon={<TbMathSymbols size="22" />}
                  title="Nevermind"
                  subject="Flat"
                  faculty="Prachi Gawde"
                />
              </div>
              <div className="col-span-1">
                <Card
                  icon={<TbMathSymbols size="25" />}
                  title="Nevermind"
                  subject="Web Program"
                  faculty="Prachi Gawde"
                />
              </div>
            </div>
          </div>
        <div className="mt-6 ml-3 flex">
          <Link to="/calendar"> <button className="bg-[#233FF2] mr-4 p-3 my-auto rounded-md text-white font-semibold h-12 w-45">View Calendar</button></Link>
          <Link to="/"> <button className="bg-[#233FF2] p-3 my-auto rounded-md text-white font-semibold h-12 w-45">View Assignment</button></Link>
   
        </div>
                       
        </div>
      </div>
    </div>
  );
};

export default ViewCourses;
