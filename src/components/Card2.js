import React from 'react'

const Card2 = ({ domain, icon }) => {

  return (
      <div className="grid grid-cols-3 mx-8 h-20 rounded-md bg-blue">
        <div className="col-span-1 mx-auto my-auto">
          {icon}
        </div>
        <div className="col-span-2 mx-auto my-auto">
          {domain}
        </div>

      </div>
  
  )
}
export default Card2;