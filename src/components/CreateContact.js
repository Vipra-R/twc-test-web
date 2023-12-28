import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import twcLogo from "./images/twc2.png"
import logOutImg from "./images/logout.png"


function CreateContact() {
    const [fullname,setFullName]=useState('')
    const [email,setEmail]=useState('')
    const [gender,setGender]=useState('')
    const [phone_number,setPhoneNumber]=useState('')
    const navigate=useNavigate();

    async function addContact(e){
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneFormat = /^\d{10}$/;
        e.preventDefault();

        if (fullname === "" || email === "" || gender === "" || phone_number === "") {
            alert('Fields Cannot Be Blank');
            return;
        }

        if (!email.match(emailFormat)) {
            alert('Please enter a valid email address');
            return;
        }

        if (!phone_number.match(phoneFormat)) {
            alert('Phone number should contain exactly 10 digits');
            return;
        }

        try{
            await axios.post("http://localhost:3500/contacts/new",{
                fullname,email,gender,phone_number
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("Contact already exists")
                }
                else if(res.data==="notexist"){
                    alert("Contact added!")
                    navigate("/contacts")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (

        <div className="w-[1366px] h-[768px] relative bg-white">
        <form action="POST">
        <div className="w-[1763.23px] h-[1107.47px] left-[122.01px] top-[-489px] absolute origin-top-left rotate-[25.63deg] bg-cyan-950 rounded-full" />
        <div className="w-[324px] h-[410px] left-[205px] top-[245px] absolute">
            <div className="w-[324px] left-0 top-0 absolute text-white text-[50px] font-bold font-['Futura Md BT'] leading-[73px]">New Contact</div>
            <button className="w-[323px] h-12 p-2.5 left-0 top-[362px] absolute rounded-[50px] border border-white justify-center items-center gap-2.5 inline-flex hover:bg-blue-600" onClick={addContact}>
            <div className="text-white text-[25px] font-normal font-['Futura Md BT'] leading-[50px]">add your first contact</div>
            </button>
        </div>

        <div className="w-[477px] h-[55px] left-[204px] top-[379px] absolute bg-white rounded-[50px]">
            <div className="left-[41px] top-[3px] absolute text-cyan-950 text-[25px] font-normal font-['Futura Md BT'] leading-[50px]"><input className="bg-transparent outline-none border-none" type="text" onChange={(e) => { setFullName(e.target.value) }} placeholder="full name"  /></div>
        </div>

        <div className="w-[477px] h-[55px] left-[204px] top-[474px] absolute bg-white rounded-[50px]">
            <div className="left-[41px] top-[3px] absolute text-cyan-950 text-[25px] font-normal font-['Futura Md BT'] leading-[50px]"><input className="bg-transparent outline-none border-none" type="text" onChange={(e) => { setPhoneNumber(e.target.value) }} placeholder="phone number"  /></div>
        </div>

        <div className="w-[477px] h-[55px] left-[722px] top-[379px] absolute bg-white rounded-[50px]">
            <div className="left-[41px] top-[3px] absolute text-cyan-950 text-[25px] font-normal font-['Futura Md BT'] leading-[50px]"><input className="bg-transparent outline-none border-none" type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="e-mail"  /></div>
        </div>

        <div className="left-[722px] top-[477px] absolute text-white text-[25px] font-normal font-['Futura Md BT'] leading-[50px]">gender</div>

        <div className="w-[84px] h-[50px] left-[906px] top-[477px] absolute">
            <input required className="w-[15px] h-[15px] left-0 top-[21px] absolute rounded-full border border-white" type="radio" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)}/>
            <div className="left-[27px] top-0 absolute text-white text-[25px] font-normal font-['Futura Md BT'] leading-[50px]">male</div>
        </div>

        <div className="w-[106px] h-[50px] left-[1093px] top-[477px] absolute">
            <input required className="w-[15px] h-[15px] left-0 top-[21px] absolute rounded-full border border-white" type="radio" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)}/>
            <div className="left-[27px] top-0 absolute text-white text-[25px] font-normal font-['Futura Md BT'] leading-[50px]">female</div>
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
        </form>
        </div>
    )
}

export default CreateContact