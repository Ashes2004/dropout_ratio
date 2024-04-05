"use client"
import React, { useEffect, useState } from 'react'
import {Home ,  ArrowDown ,Layout ,BarChart2 ,UserRound , ArrowDownFromLine} from 'lucide-react';
import { Helmet } from 'react-helmet';
import './style.css';
function Header() {
    const [dropdown , setDropdown] = useState(false);
   const toggle = ()=>{
    setDropdown(!dropdown);
   }
  return (
    <div className="bg-white shadow-md">
    
    <h1 style={{
        textAlign: 'center',
        padding: '1rem',
        fontSize:'39px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 600,
        letterSpacing: '2px',
        borderBottom: '0.5px solid rgba(158, 156, 156, 0.5)',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>STUDENT DROPOUT ANALYSIS</h1>
    <nav>
      <div className="navbar  ">
        <a href="#" className="nav-link hvrcenter flex justify-center hover:text-blue-800 ">
        < Home className="h-5 mt-6 w-5 ml-3  "/> 
          <span className="link-name font-semibold hover:text-blue-800 ">Home</span>
        </a>
        <a href="#" className="nav-link hvrcenter hover:text-blue-800">
          <Layout className="h-5 mt-6 w-5 ml-7 "/>
          <span className="link-name font-semibold hover:text-blue-800">DashBoard</span>
        </a>
        <a href="#" className="nav-link hvrcenter hover:text-blue-800">
          <BarChart2 className="h-5 mt-6 w-5 ml-7 "/>
          <span className="link-name font-semibold hover:text-blue-800">Analysis</span>
        </a>
        <a href="#" className="nav-link hvrcenter hover:text-blue-800">
         <UserRound className="h-5 mt-6 w-5 ml-3  "/>
          <span className="link-name font-semibold hover:text-blue-800">Page3</span>
        </a>
        <div class="relative">
  <button class="btn bg-gradient-info dropdown-toggle nav-link hvrcenter" type="button" id="dropdownMenuButtonnav" aria-haspopup="true" aria-expanded="false" onClick={()=> toggle()}>
  <ArrowDownFromLine className="h-5 mt-6 w-5 ml-6"/> <span className="link-name font-semibold hover:text-blue-800">Download</span> 
  </button>
  <ul class={`dropdown-menu absolute w-36 ${dropdown==false ? 'hidden' : null} bg-white border rounded-md shadow-md`} aria-labelledby="dropdownMenuButtonnav">
    <li  onClick={()=> toggle()}><a class="dropdown-item block px-4 py-2" href="#">Get Report PDF</a></li>
    <hr class="my-1"/>
    <li  onClick={()=> toggle()}><a class="dropdown-item block px-4 py-2" href="#">Get Data CSV</a></li>
  </ul>
</div>

      </div>
    </nav>
  </div>
  )
}

export default Header