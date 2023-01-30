import React from 'react';
import prachi from "../assets/prachi.jpg"

const Improve = ({icon,subject,faculty,desc}) => {

  return (

    <>
    <div className="border-2 col-span-2 border-black rounded-md">
      <div className="grid grid-cols-2 my-2">
        <div className="col-span-1 mx-auto my-auto">
          {icon}
        </div>
        <div className="col-span-1 mx-auto">
          <p className='text-lg font-bold'>{subject}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 my-2">
        <div className="col-span-1 ml-5">
          <div className="row">
            {faculty}
          </div>
          <div className="row">
            <p>{desc}</p>
          </div>
        </div>
        <div className="col-span-1 mx-auto my-auto">
          <img className='h-24' src={prachi} alt="" />
        </div>
        
      </div>
      <button className="bg-blue text-white text-medium text-center my-3 w-16 h-10 rounded-lg ml-4 ">View</button>
      </div>

    </>
  )
}
export default Improve;

