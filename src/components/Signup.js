import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import twcLogo from "./images/twc1.png";


function Register() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate=useNavigate();

    async function submit(e){
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        e.preventDefault();

        if (email === "" || password === "" || confirmPassword === "") {
            alert('Fields Cannot Be Blank');
            return;
        }

        if (!email.match(emailFormat)) {
            alert('Please enter a valid email address');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try{

            await axios.post("http://localhost:3500/signup",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists");
                }
                else if(res.data==="notexist"){
                    alert("User created!");
                    navigate("/");
                }
            })
            .catch(e=>{
                alert("wrong details");
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="w-[1366px] h-[768px] relative bg-white">
        <div className="w-[1502px] h-[1502px] left-[-716px] top-[-367px] absolute bg-cyan-950 rounded-full" />
        <div className="w-[321.64px] h-[216.42px] left-[868px] top-[255px] absolute">
                <div className="w-[300px] h-[360px] left-0 top-0 absolute">
                    <img className="w-[277.72px] h-[205.91px] left-[2.28px] top-[3.72px] absolute" src={twcLogo}  alt="TWC Logo"/>
                </div>
        </div>
        <div className="w-[477px] h-[469px] left-[122px] top-[95px] absolute">
            <div className="left-0 top-0 absolute text-white text-[50px] font-bold font-['Futura Md BT'] leading-[73px]">Register Now!</div>
            <div className="w-[477px] h-[55px] left-0 top-[113px] absolute bg-white rounded-[50px]">
            <input className="left-[41px] top-[3px] absolute text-cyan-950 text-[25px] font-normal font-['Futura Md BT'] leading-[50px] bg-transparent outline-none border-none" type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="e-mail"/>
            </div>
            <div className="w-[477px] h-[55px] left-0 top-[206px] absolute bg-white rounded-[50px]">
            <input className="left-[41px] top-[3px] absolute text-cyan-950 text-[25px] font-normal font-['Futura Md BT'] leading-[50px] bg-transparent outline-none border-none" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="password" />
            </div>
            <div className="w-[477px] h-[55px] left-0 top-[299px] absolute bg-white rounded-[50px]">
            <input className="left-[41px] top-[3px] absolute text-cyan-950 text-[25px] font-normal font-['Futura Md BT'] leading-[50px] bg-transparent outline-none border-none" type="password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} placeholder="confirm Password" />
            </div>
            <button className="w-[149px] h-12 p-2.5 left-0 top-[421px] absolute rounded-[50px] border border-white justify-center items-center gap-2.5 inline-flex hover:bg-blue-600" onClick={submit}>
                <div className="text-white text-[25px] font-normal font-['Futura Md BT'] leading-[50px]" >register</div>
            </button>
        </div>
        <div className="left-[122px] top-[648px] absolute text-white text-[25px] font-normal font-['Futura Md BT'] underline leading-[50px]"><Link to="/">&lt;Back to login</Link></div>
        </div>
    )
}

export default Register