import React, { useState } from 'react';
import { BsArrowLeftShort } from "react-icons/bs";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { AiTwotoneHome } from "react-icons/ai";
import { CgNotes, CgProfile } from "react-icons/cg";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoLogOut } from "react-icons/io5";
import Logo from "../assets/Logo.jpg"
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="justify-evenly">
      <div>
        <div className={`bg-[#233FF2] h-screen p-5 text-white pt-8 w-72 relative duration-300 ${open ? "w-72" : "w-20"}`}>
          <BsArrowLeftShort className={`bg-white text-black cursor-pointer text-3xl rounded-full absolute -right-3 top-9 border border-[#0a6fa5] ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
          <Link to="/">
           <div className="flex justify-evenly mb-6 ">
            <div class="mb-4 mx-auto">
              <img src={Logo} class="max-w-full h-[120px] rounded-full shadow-md border-2 border-black" alt="" />
            </div>
          </div>
          </Link>
          
          <Link to="/">
          <div className="pt-2">
            <li className="text text-sm flex items-center gap-x-4 p-2 hover:bg-blue rounded-md mt-2">
              <span className="text-2xl block float-left">
                <AiTwotoneHome />
              </span>
              <span className={`text-base font-bold flex-1 ${!open && "hidden"}`}>Dashboard</span>
            </li>
          </div>
          </Link>
          
          <Link to="/calendar">
          <div className="pt-2">
            <li className="text-white text-sm flex items-center gap-x-4 p-2 hover:bg-blue rounded-md mt-2">
              <span className="text-2xl block float-left">
                <BsFillCalendarWeekFill />
              </span>
              <span className={`text-base font-bold flex-1 ${!open && "hidden"}`}>Calendar</span>
            </li>
          </div>
          </Link>

          <Link to="/notes">
          <div className="pt-2">
            <li className="text-white text-sm flex items-center gap-x-4 p-2 hover:bg-blue rounded-md mt-2">
              <span className="text-2xl block float-left">
                <CgNotes />
              </span>
              <span className={`text-base font-bold flex-1 ${!open && "hidden"}`}>Notes</span>
            </li>
          </div>
          </Link>
          
          <Link to="/">
          <div className="pt-2">
            <li className="text-white text-sm flex items-center gap-x-4 p-2 hover:bg-blue rounded-md mt-2">
              <span className="text-2xl block float-left">
                <TfiAnnouncement />
              </span>


              <span className={`text-base font-bold flex-1 ${!open && "hidden"}`}>Announcements</span>
            </li>
          </div>
          </Link>
          <Link to="/">
          <div className="pt-2">
            <li className="text-white text-sm flex items-center gap-x-4 p-2 hover:bg-blue rounded-md mt-2">
              <span className="text-2xl block float-left">
                <CgProfile />
              </span>
              <span className={`text-base font-bold  flex-1 ${!open && "hidden"}`}>Profile</span>
            </li>
          </div>
          </Link>
          <Link to="/login">          
          <div className="pt-2">
            <li className="text-white text-sm flex items-center gap-x-4 p-2 hover:bg-blue rounded-md mt-2">
              <span className="text-2xl block float-left">
                <IoLogOut />
              </span>
              <span className={`text-base font-bold flex-1 ${!open && "hidden"}`}>LogOut</span>
            </li>
          </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Sidebar;