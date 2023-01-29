import React from 'react';
import SideBar from '../components/Sidebar';

const FormStud = () => {
    return (

        <div className="grid grid-cols-10">
            <div className="col-span-2">
                <SideBar />
            </div>
            <div className="col-span-8 bg-lime-200">
                <div className="bg-white w-1/2 h-auto  mr-10 mt-10 rounded-md p-10">
                    <div className="text-black font-bold text-2xl px-3 py-auto">Profile Information</div>
                    <div className="grid grid-cols-2">
                        <div className=" grid grid-row gap-2">
                            <div className="text-black font-semibold text-lg  text-left">Enter your Name:</div>
                            <div className="text-black font-semibold text-lg text-left ">Enter your SapId:</div>
                            <div className="text-black font-semibold text-lg text-left ">Enter your Contact Number:</div>
                            <div className="text-black font-semibold text-lg text-left ">Sem:</div>
                            <div className="text-black font-semibold text-lg text-left ">Enter Department:</div>
                            <div className="text-black font-semibold text-lg text-left ">Division:</div>
                            <div className="text-black font-semibold text-lg text-left ">Give your Organization Name:</div>
                            <div className="text-black font-semibold text-lg text-left ">Enter your Email:</div>
                        </div>
                        <div className="grid grid-row gap-2">
                            <div className="bg-[#D9D9D9] w-50 h-10 border-black border-2  rounded-lg">
                                <input type="text" className="bg-[#D9D9D9]" placeholder=""></input>
                            </div>


                            <div className="bg-[#D9D9D9] w-50 h-10 border-black border-2  rounded-lg">
                                <input type="text" className="bg-[#D9D9D9]" placeholder=""></input>
                            </div>

                            <div className="bg-[#D9D9D9] w-50 h-10 border-black border-2  rounded-lg">
                                <input type="text" className="bg-[#D9D9D9]" placeholder=""></input>
                            </div>

                            <div className="bg-[#D9D9D9] w-50 h-10 border-black border-2  rounded-lg">
                                <input type="text" className="bg-[#D9D9D9]" placeholder=""></input>
                            </div>

                            <div className="bg-[#D9D9D9] w-50 h-10 border-black border-2  rounded-lg">
                                <input type="text" className="bg-[#D9D9D9]" placeholder=""></input>
                            </div>


                            <div className="bg-[#D9D9D9] w-50 h-10 border-black border-2  rounded-lg">
                                <input type="text" className="bg-[#D9D9D9]" placeholder=""></input>
                            </div>

                            <div className="bg-[#D9D9D9] w-50 h-10 border-black border-2  rounded-lg">
                                <input type="text" className="bg-[#D9D9D9]" placeholder=""></input>
                            </div>

                            <div className="bg-[#D9D9D9] w-50 h-10 border-black border-2  rounded-lg">
                                <input type="text" className="bg-[#D9D9D9]" placeholder=""></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    )
}

export default FormStud;