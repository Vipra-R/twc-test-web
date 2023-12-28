import React from "react"
import { Link, useNavigate } from 'react-router-dom';
import twcLogo from "./images/twc2.png"
import logOutImg from "./images/logout.png"


function Home (){
    const navigate=useNavigate();

    function addContact(){
        navigate("/contacts/new")
    }
    return (
      <div className="w-[1366px] h-[768px] relative bg-white">
        <div className="w-[1763.23px] h-[1107.47px] left-[122.01px] top-[-489px] absolute origin-top-left rotate-[25.63deg] bg-cyan-950 rounded-full" />
        <div className="w-[951px] h-[304px] left-[204px] top-[278px] absolute">
          <div className="w-[950px] left-[1px] top-0 absolute"><span className="text-white text-[50px] font-bold font-['Futura Md BT'] leading-[73px]">Welcome,<br/></span><span className="text-white text-[35px] font-normal font-['Futura Md BT'] leading-[55px]">This is where your contacts will live. Click the button below  to add a new contact.</span></div>
          <button className="w-[323px] h-12 p-2.5 left-0 top-[256px] absolute rounded-[50px] border border-white justify-center items-center gap-2.5 inline-flex hover:bg-blue-600" onClick={addContact}>
            <div className="text-white text-[25px] font-normal font-['Futura Md BT'] leading-[50px]">add your first contact</div>
          </button>
        </div>
        <div className="w-[138px] h-[91.57px] left-[204px] top-[72px] absolute">
          <div className="w-[172.94px] h-6 left-0 top-0 absolute">
            <img className="w-52 h-30 left-0 top-0 absolute" src={twcLogo} alt="TWC Logo"/>
          </div>
        </div>
        <div className="w-[133px] h-[50px] left-[1180px] top-[677px] absolute flex items-center">
          <div className="text-white text-[25px] font-normal font-['Futura Md BT'] underline leading-[50px]">
              <Link to="/"><img src={logOutImg} alt="logout" className="inline-block mr-2" />logout</Link>
          </div>   
        </div>
      </div>
    )
}

export default Home