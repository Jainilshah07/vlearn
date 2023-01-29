import React from 'react';
import Sidebar from '../components/Sidebar';

const Notes = () => {
  return (
    <div className="grid grid-col-10">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-8">
        <div className='text-black text-2xl mx-auto mt-4'>
          No Notes to show yet!!
        </div>
      </div>
    </div>
  )
}

export default Notes
