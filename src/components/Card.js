import React from 'react';
import { TbMathSymbols } from "react-icons/tb";

const Card = () => {
    return (

        <div className="w-1/5 h-11/12 rounded-2xl mt-5 bg-[#D4D9F6] border-solid border border-[#063970] shadow-2xl ">
            <div className="px-2 py-1">
                <TbMathSymbols size="47" className="px-1" />
                <div className="text-black text-left text-medium  font-bold px-2">
                    Maths
                </div>
                <div className="text-left font-normal text-black text-lg px-1">
                    Faculty
                </div>
                <div className="text-left font-bold text-black  text-medium px-1">
                    Description
                </div>
                <div className="text-left font-thin text-black text-medium mx-1 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="flex justify-between">

                    <button className="bg-darkBlue text-white text-medium text-center w-16 h-10 mx-2 rounded-lg my-auto  ">View</button>


                </div>
            </div>
        </div>

    )
}
export default Card;