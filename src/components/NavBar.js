import React from 'react';
import { BsSpeedometer2 } from 'react-icons/bs';
import {MdOutlineCompare} from "react-icons/md"
import {AiOutlineFieldTime, AiOutlineLogout } from "react-icons/ai"
import {BiAnalyse} from "react-icons/bi"
import {TbListDetails} from "react-icons/tb"
import {MdPublishedWithChanges} from "react-icons/md"
import { NavLink } from 'react-router-dom';
import {motion} from "framer-motion"
  
const NavBar = ({menuOpen}) => {
  return (
    <>
      <motion.nav animate={{width: menuOpen ? "auto" : "0vw", display: menuOpen ? "flex" : "none", padding: menuOpen ? "0 4%" : "0"}} className='navbar'>
          <a className='logo' href='/'>ReQiew</a>
          <div style={{visibility: menuOpen ? "visible" : "hidden"}} className='navbar__section'>
            <BsSpeedometer2></BsSpeedometer2>
            <NavLink to='/' activeStyle>
              Aspect scores
            </NavLink>
          </div>
          <div style={{visibility: menuOpen ? "visible" : "hidden"}} className='navbar__section'>
            <MdOutlineCompare></MdOutlineCompare>
          <NavLink to='/Benchmark' activeStyle>
            Benchmark
          </NavLink>
          </div>
          <div style={{visibility: menuOpen ? "visible" : "hidden"}} className='navbar__section'>
            <AiOutlineFieldTime></AiOutlineFieldTime>
          <NavLink to='/time' >
            Time series
          </NavLink>
          </div>
          <div style={{visibility: menuOpen ? "visible" : "hidden"}} className='navbar__section'>
            <BiAnalyse></BiAnalyse>
            <NavLink to='/team' >
            Driver Analysis
          </NavLink>
          </div>
          <div style={{visibility: menuOpen ? "visible" : "hidden"}} className='navbar__section'>
            <TbListDetails></TbListDetails>
          <NavLink to='/sgs' >
            Aspect details
          </NavLink>
          </div>
          <span className='divider'></span>
          <div className='navbar__section'>
            <MdPublishedWithChanges></MdPublishedWithChanges>
            <button>Change Dashboard</button>
          </div>
          <div className='navbar__section last'>
            <AiOutlineLogout></AiOutlineLogout>
            <button>Log out</button>
          </div>
      </motion.nav>
    </>
  );
};
  
export default NavBar;