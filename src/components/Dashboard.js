import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate() ;
    const getToken = false;
    useEffect(() => {
        if (getToken=="true"){
        //   getNotes();
        console.log("hey got token")

        }
        else{
          navigate("/login");
        }
        
        // eslint-disable-next-line
      }, []);
  return (
    <>
      <div className="grid grid-cols-10">
        <div className="col-span-2">
            <div className="">
                {/* <Sidebar */}
            </div>
        </div>
        <div className="col-span-8">
            {/* <Dashboard of student /Teacher  */}
     
        </div>
      </div>
    </>
  )
}

export default Dashboard
