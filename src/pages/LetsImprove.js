import React, { useState, useEffect } from 'react'
import axios from "../axios"
import quote from '../assets/Quote.webp'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { TbMathSymbols } from "react-icons/tb";
import Improve from '../components/Improve'

const LetsImprove = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState({});
    let arr = [];

    const getCnFailure = async () => {
        try {
          const res = await axios.get("/marks/getcnfailure");
          setMyData(res.data);
        } catch (error) {
          setIsError("error form content", error);
        }
      };
    //   console.log(myData)
    // console.log(myData.toString)
    let description = "";
    for(let i= 0 ; i < myData.length ;i++){
        description = description.concat(myData[i],"  ")
    }

      useEffect(() => {
        getCnFailure();
      }, []);
  return (
    <>
      <div className="grid grid-cols-10 h-screen bg-[#D4D9F6]">
        <div className="col-span-2 h-screen bg-white">
            <img className='mt-20 mb-8' src={quote} alt="" />
            <Link to="/dashboard2"> <button className="bg-[#233FF2] mr-3 p-3 my-auto rounded-md text-white font-semibold h-12 w-45">Dashboard</button></Link>
        </div>
        <div className="col-span-8 mt-20 mb-8">
            <div className="grid grid-cols-2">
                <div className="col-span-1">
                <Improve
              icon={<TbMathSymbols size="22" />}
              title="Nevermind"
              subject="Computer Networks"
              faculty="Prachi Gawde"
              desc = {description} 
            /> 
                </div>
{/*             
            <Improve
              icon={<TbMathSymbols size="22" />}
              title="Nevermind"
              subject="Computer Networks"
              faculty="Prachi Gawde"
              desc = {description} 
            />  */}
            </div>
            
            {/* </div> */}
            
        </div>
      </div>
    </>
  )
}

export default LetsImprove
