import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import twcLogo from "./images/twc1.png"


function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate();

    async function submit(e){
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        e.preventDefault();

        try{

            if (!email.match(emailFormat)) {
                alert('Please enter a valid email address');
                return;
            }

            const res = await axios.post("http://localhost:3500/",{
                email,password
            })

            if(res.data==="passwordmatch"){
                try {
                    const contactsResponse = await axios.get("http://localhost:3500/contacts");
                    const contacts = contactsResponse.data;
    
                    if (contacts.length === 0) {
                        navigate("/home");
                    } else {
                        navigate("/contacts");
                    }
                } catch (error) {
                    alert("Error fetching contacts");
                    console.error(error);
                }
            }
            else if(res.data==="passwordnotmatch"){
                alert("Invalid Password")
            }
            else if(res.data==="notexist"){
                alert("User does not exist")
            }

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="w-[1366px] h-[768px] relative bg-white">
        <div className="w-[1502px] h-[1502px] left-[-716px] top-[-367px] absolute bg-cyan-950 rounded-full" />
        <div className="w-[321.64px] h-[216.42px] left-[868px] top-[255px] absolute">
            <div className="w-[170px] h-[60px] left-0 top-0 absolute">
            <div className="w-[321.64px] h-[216.42px] relative">
                <div className="w-[300px] h-[360px] left-0 top-0 absolute">
                    <img className="w-[277.72px] h-[205.91px] left-[2.28px] top-[3.72px] absolute" src={twcLogo}  alt="TWC Logo"/>
                </div>
            </div>
            </div>
        </div>
        <div className="w-[477px] h-[487px] left-[122px] top-[140px] absolute">
            <div className="left-0 top-0 absolute"><span className="text-white text-[50px] font-bold font-['Futura Md BT'] leading-[73px]">Hi there,<br/></span><span className="text-white text-[35px] font-normal font-['Futura Md BT'] leading-[55px]">Welcome to our<br/></span><span className="text-white text-[35px] font-normal font-['Futura Md BT'] leading-10">contacts portal</span></div>
            <form action="POST">
                <div className="w-[477px] h-[55px] left-0 top-[224px] absolute bg-white rounded-[50px]">
                    <input className="left-[41px] top-[3px] absolute text-cyan-950 text-[25px] font-normal font-['Futura Md BT'] leading-[50px] bg-transparent outline-none border-none" type="email" onChange={(e) => { setEmail(e.target.value) }}placeholder="e-mail"></input>
                </div>
                <div className="w-[477px] h-[55px] left-0 top-[317px] absolute bg-white rounded-[50px]">
                    <input className="left-[41px] top-[3px] absolute text-cyan-950 text-[25px] font-normal font-['Futura Md BT'] leading-[50px] bg-transparent outline-none border-none" type="password" onChange={(e) => { setPassword(e.target.value) }}placeholder="password"></input>
                </div>
                <button className="w-[131px] h-12 p-2.5 left-0 top-[439px] absolute rounded-[50px] border border-white justify-center items-center gap-2.5 inline-flex hover:bg-blue-600" onClick={submit}>
                    <div className="text-white text-[25px] font-normal font-['Futura Md BT'] leading-[50px]">login</div>
                </button>
            </form>
                </div>
        <div className="left-[271px] top-[578px] absolute"><span className="text-white text-[25px] font-normal font-['Futura Md BT'] leading-[50px]">or  </span><span className="text-white text-[25px] font-normal font-['Futura Md BT'] underline leading-[50px]"><Link to="/signup">Click here to Register</Link></span></div>
        </div>
    )
}

export default Login