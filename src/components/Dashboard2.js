import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import Card from "./Card";
import Card2 from "./Card2";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Sidebar from "./Sidebar";
import { CgProfile } from "react-icons/cg";
import { TbMathSymbols } from "react-icons/tb";
import { BsFillCalendarFill } from "react-icons/bs";
import { FaSuitcase ,FaUser} from "react-icons/fa";
import Card3 from "./Card3";

const Dashboard2 = () => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (localStorage.getItem('signature')){
    //        console.log("loggin succes")
    //     }
    //     else{
    //       navigate("/login");
    //       console.log("Not loggin")
    //     }
    //     // eslint-disable-next-line
    //   },[]);

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
                <Link to="/ViewCourses"><button className="bg-[#233FF2] mr-3 p-3 my-auto rounded-md text-white font-semibold h-12 w-45">View Courses</button></Link>
                <Link to="/lets-improve"><button className="bg-[#233FF2] p-3 my-auto rounded-md text-white font-semibold h-12 w-45">Let's Improve</button></Link>
              </div>
              </div>
              <p className="text-xl my-3 font-medium"> My Expertise / Domain </p>
              <div className="mr-4 p-2 rounded border-2 border-black">
                <div className="grid grid-cols-3">
                <Card2
                                bg="#4E36E2"
                                domain="Artificial Intelligence"
                                value="110"
                                icon={<BsFillCalendarFill size="20" style={{ color: "white" }} />}
                            />
                            <Card2
                                bg="#49A8F8"
                                domain="CN"
                                value="3"
                                icon={<FaSuitcase size="20" style={{ color: "white" }} />}
                            />
                            <Card2
                                bg="DL"
                                domain="Candidates Selected"
                                value="1"
                                icon={<FaUser size="20" style={{ color: "white" }} />}
                            />
                </div>
                 
              </div>
              
            </div>
            <div className="row mt-2">
              <p className="text-xl my-3 font-medium"> My Subjects </p>
              <div className="mr-4 p-2 rounded border-2 border-black">

                <div className="grid grid-cols-3">
                  {/* <div className="col-span-1"></div> */}
                  {/* <div className="grid grid-cols-3"> */}
                <Card3
                                bg="#4E36E2"
                                domain="Artificial Intelligence"
                                value="110"
                                icon={<BsFillCalendarFill size="20" style={{ color: "white" }} />}
                            />
                            <Card3
                                bg="#49A8F8"
                                domain="CN"
                                value="3"
                                icon={<FaSuitcase size="20" style={{ color: "white" }} />}
                            />
                            <Card3
                                bg="DL"
                                domain="Candidates Selected"
                                value="1"
                                icon={<FaUser size="20" style={{ color: "white" }} />}
                            />
                {/* </div> */}
                </div>
                
              </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default Dashboard2
