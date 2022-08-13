import React,{useState} from 'react'
import Topbar from "./Topbar"
import {
  Link
} from "react-router-dom";

function Menubar(props) {
    const [navbar,setNavbar]=useState(false);
  return (
    <>
       <Topbar />
       <section className='menubar'>
        <ul className={navbar? "navbar":"flex"} onClick={()=>setNavbar(false)}>
            <li><Link key="/" to="/">Home</Link></li>
            <li><Link key="bussiness" to="/bussiness">Business</Link></li>
            <li><Link key="entertainment" to="/entertainment">Entertainment</Link></li>
            <li><Link key="general" to="/general">General</Link></li>
            <li><Link key="health" to="/health">Health</Link></li>
            <li><Link key="sports" to="/sports">Sports</Link></li>
            <li><Link key="technology" to="/technology">Technology</Link></li>
        </ul>
        <button className="barIco" onClick={() => setNavbar(!navbar)}>
          {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
          </button>
       </section>
    </>
  )
}

export default Menubar