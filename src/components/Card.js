import React from 'react';
import prachi from "../assets/prachi.jpg"

const Card = ({icon,subject,faculty,img}) => {

  return (

    <>
    <div className="border-2 border-black rounded-md">
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sint.</p>
          </div>
        </div>
        <div className="col-span-1 mx-auto my-auto">
          <img className='h-24' src={prachi} alt="" />
        </div>
        
      </div>

      <button className="bg-blue text-white text-medium text-center my-3 w-16 h-10 rounded-lg ml-4 ">View</button>

      </div>

    {/* <div className="w-1/5 h-11/12 rounded-2xl mt-5 bg-[#D4D9F6] border-solid border border-black shadow-2xl ">

      <div className="px-2 py-1">

        <div size="45" className="px-1 " >{icon}</div>
        <div className="text-black text-left text-medium  font-bold px-2">
          {subject}
        </div>


        <div className="flex justify-center">
          <div className="text-left font-normal text-black text-lg px-1">
            {faculty}
          </div>
          <img src={img} class="max-w-full h-[120px] rounded-full shadow-md border-2 border-black" alt="" />

        </div>
        <div className="text-left font-normal text-black text-medium px-1">
          Description
        </div>
        <div className="text-left font-thin text-black text-medium mx-1 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="flex justify-between mt-4">

          <button className="bg-blue text-white text-medium text-center w-16 h-10 rounded-lg my-auto mx-1 ">View</button>

        </div>
      </div>
    </div> */}

    </>
  )
}
export default Card;

