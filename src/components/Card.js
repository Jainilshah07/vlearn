import React from 'react';


const DashBoardCard = (props) => {

  return (

    <div className="w-1/5 h-11/12 rounded-2xl mt-5 bg-[#D4D9F6] border-solid border border-black shadow-2xl ">

      <div className="px-2 py-1">

        <div size="45" className="px-1 " >{props.icon}</div>
        <div className="text-black text-left text-medium  font-bold px-2">
          {props.subject}
        </div>


        <div className="flex justify-center">
          <img src={props.img} class="max-w-full h-[120px] rounded-full shadow-md border-2 border-black" alt="" />

          <div className="text-left font-normal text-black text-lg px-1">
            {props.faculty}
          </div>
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
    </div>


  )
}
export default DashBoardCard;

