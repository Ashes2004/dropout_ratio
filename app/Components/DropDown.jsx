"use client"
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { ShowContext } from '../context/ShowContext';
function Dropdown({data}) {
  const [isOpen, setIsOpen] = useState(false);
const {value , setValue} = useContext(MyContext);
const { key, setkey} = useContext(ShowContext);
const [label , setLabel] = useState("Select indicator");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
   
  };

  useEffect(()=>{
    if(isOpen==true)
    {
      setkey(false);
    }
    else{
      setkey(true);
    }
  },[isOpen])

  return (
    <div>
      <button 
        id="dropdownDefaultButton" 
        data-dropdown-toggle="dropdown" 
        className="text-white w-96 flex shadow-xl justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
        type="button"
        onClick={toggleDropdown}
      >
       <p className="text-lg">{label} </p> 
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>

      <div 
        id="dropdown" 
        className={`z-10 ${isOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100  h-80 overflow-y-auto rounded-lg w-96 mt-4 shadow w-44 dark:bg-gray-700`}
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'gray #CBD5E0',
          overflowY: 'auto',
        }}
       >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
         {data?.map((data, index) => (
  <li key={index}>
    <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => {setValue(data.show);  setIsOpen(!isOpen); setLabel(data.name)}}>{data.name}</p>
  </li>
))} 
         
         
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
