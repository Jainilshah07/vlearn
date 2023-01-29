import e from 'cors'
import React, { useState } from 'react'
import Card from '../components/Card'
import Sidebar from '../components/Sidebar'

const RiskPrediction = () => {

  // const subjects = ['Web Programming','Formal Languages','Algorithms','Human Values','Computer Networks']
  // const subjectwise = subjects.map((items)=>{
  //   return(
  //     <li><span className='inline-flex mr-4 my-2'>{items}: </span>
  //     <form className='inline-flex'>
  //       <div class="relative z-0 w-full mb-6 group">
  //         <input type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
  //         <label for="floating_email" class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Term Test - 1 Marks</label>
  //       </div>
  //     </form>
  //     <form className='inline-flex mx-4'>
  //       <div class="relative z-0 w-full mb-6 group">
  //         <input type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
  //       <label for="floating_email" class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Term Test - 2 Marks</label>
  //     </div>
  //     </form>
  //     </li>
  //   )
  // })

  const [input, setInput] = useState({
    cntt1: "",
    cntt2: "",
    wptt1: "",
    wptt2: "",
    flattt1: "",
    flattt2: "",
    daatt1: "",
    daatt2: "",
    pstt1: "",
    pstt2: "",
  });

  const [records, setRecords] = useState([]);
  let sgpa=0;

  const InputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    const newRecord = { ...input, id: new Date().getTime().toString() };
    console.log(records);
    
    setRecords({ ...records, newRecord });
    let sum = records.cntt1.int+records.cntt2.int +records.wptt1.int +records.wptt2.int +records.flattt1.int +records.flattt2.int +records.daatt1.int +records.daatt2.int +records.pstt1.int +records.pstt2.int
    if(sum > 220){
      sgpa = 9.113
    }else if(sum > 200){
      sgpa = 8.863
    }else if(sum > 175){
      sgpa = 7.723
    }else if(sum > 150){
      sgpa = 6.263
    }
    else{
      sgpa = 5.063
    }
    // sgpa = 0.04*(records.cntt1*0.07395048+records.cntt2*0.09203139-records.wptt1*0.00391362+records.wptt2*0.05201528-records.flattt1*0.00267874+records.flattt2*0.00041687+records.daatt1*0.02216413+records.daatt2*0.07679734+records.pstt1*0.06236859+records.pstt2*0.05002947) + 0.53324634
    console.log(records);
    console.log(sum)
    console.log(sgpa)

    document.getElementById("sgpa").innerHTML=sgpa;
    setInput({
      cntt1: "",
      cntt2: "",
      wptt1: "",
      wptt2: "",
      flattt1: "",
      flattt2: "",
      daatt1: "",
      daatt2: "",
      pstt1: "",
      pstt2: "",
    });
  };

  return (
    <>
        <div className='grid grid-cols-10 bg-[#D4D9F6]'>
          <div className='col-span-2'>
            <Sidebar/>
          </div>
          <div className="col-span-8 mx-2 sm:mx-8">
            <p className='text-4xl font-bold text-center sm:my-8'>lets calculate your risk</p>
            <form className='col-span-3' onSubmit={SubmitHandler}>
            <div className="grid grid-cols-3 sm:mx-8 mx-2 align-middle">
                <p className='col-span-1 my-4 text-center font-semibold'>Subject</p>
                <p className='col-span-1 my-4 text-center align-middle font-semibold'>TT1</p>
                <p className='col-span-1 my-4 text-center align-middle font-semibold'>TT2</p>

              
                    
                    <p className='col-span-1 text-center my-auto'>1. CN</p>
                    <input type="text" name="cntt1" value={input.cntt1} onChange={InputHandler} id="floating_email" class="block my-4 mx-8 py-2.5 px-16 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <input type="text" name="cntt2" value={input.cntt2} onChange={InputHandler} id="floating_email" class="block my-4 mx-8 py-2.5 px-16 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <p className='col-span-1 text-center my-auto'>2. WP</p>
                    <input type="text" name="wptt1" value={input.wptt1} onChange={InputHandler} id="floating_email" class="block my-4 mx-8 py-2.5 px-16 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <input type="text" name="wptt2" value={input.wptt2} onChange={InputHandler} id="floating_email" class="block my-4 mx-8 py-2.5 px-16 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <p className='col-span-1 text-center my-auto'>3. FLAT</p>
                    <input type="text" name="flattt1" value={input.flattt1} onChange={InputHandler} id="floating_email" class="block my-4 mx-8 py-2.5 px-16 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <input type="text" name="flattt2" value={input.flattt2} onChange={InputHandler} id="floating_email" class="block my-4 mx-8 py-2.5 px-16 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <p className='col-span-1 text-center my-auto'>4. DAA</p>
                    <input type="text" name="daatt1" value={input.daatt1} onChange={InputHandler} id="floating_email" class="block my-4 mx-8 py-2.5 px-16 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <input type="text" name="daatt2" value={input.daatt2} onChange={InputHandler} id="floating_email" class="block my-4 mx-8 py-2.5 px-16 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <p className='col-span-1 text-center my-auto'>5. PS</p>
                    <input type="text" name="pstt1" value={input.pstt1} onChange={InputHandler} id="floating_email" class="block my-4 mx-8 py-2.5 px-16 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <input type="text" name="pstt2" value={input.pstt2} onChange={InputHandler} id="floating_email" class="block my-4 mx-8 py-2.5 px-16 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <p className='col-span-1 text-center my-auto'></p>
                    <button type="submit" class="text-black sm:my-8 my-2 border-2 border-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                  


            </div>
            </form>
            <p>Your Expected SGPA is: <span id='sgpa'></span></p>

        </div>
          {/* <div className='col-span-8'>
            <h1 className='text-center text-4xl font-bold m-4'>lets calculate your risk</h1>
            <div className='grid grid-cols-10'>
              <div className='col-span-2'>

              </div>
              <div className='col-span-6 my-4'>
                <ol>
                  {subjectwise}
                </ol>
                <button type="submit" class="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

              </div>
              <div className='col-span-2'>

              </div>
            </div>
            
          </div> */}
        </div>
        
    </>
  )
}

export default RiskPrediction