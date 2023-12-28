import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import twcLogo from "./images/twc2.png"
import maleImg from "./images/male.png"
import femaleImg from "./images/female.png"
import editImg from "./images/edit.png"
import deleteImg from "./images/delete.png"
import logOutImg from "./images/logout.png"
import toggleImg from "./images/toggle.png"



function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [editableContact, setEditableContact] = useState({});
  const navigate=useNavigate();

  function addContact(){
      navigate("/contacts/new")
  }

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await axios.get("http://localhost:3500/contacts");
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }

    fetchContacts();
  }, []);

  const deleteContact = async (email,fullname) => {
    const confirmDeletion = window.confirm(`Are you sure you want to delete this contact ${fullname}?`);

    if (confirmDeletion) {
      try {
        const response = await axios.delete(`http://localhost:3500/contacts/${email}`);
        if (response.data === "deleted") {
          setContacts(contacts.filter((contact) => contact.email !== email));
          console.log("Contact deleted successfully");
        }
      } catch (error) {
        alert("Error deleting contact:", error);
      }
    } else {
      alert("Deletion cancelled");
    }
  };

  const handleEdit = (email) => {
    setEditableContact(contacts.find((contact) => contact.email === email));
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:3500/contacts/${editableContact.email}`, editableContact);
      setEditableContact({});
      alert("Your Contact has been saved successfully");
      window.location.reload();
    } catch (error) {
      alert("Error updating contact:", error);
    }
  };

  return (
  <div className="w-[1366px] h-[768px] relative bg-white">
  <div className="w-[1763.23px] h-[1107.47px] left-[122.01px] top-[-489px] absolute origin-top-left rotate-[25.63deg] bg-cyan-950 rounded-full" />
  <div className="w-[994px] h-[73px] left-[204px] top-[209px] absolute">
    <div className="w-[324px] left-0 top-0 absolute text-white text-[50px] font-bold font-['Futura Md BT'] leading-[73px]">Contacts</div>
    <button className="w-[255px] h-12 p-2.5 left-[739px] top-[13px] absolute rounded-[50px] border border-white justify-center items-center gap-2.5 inline-flex hover:bg-blue-600" onClick={addContact}>
      <div className="text-white text-[25px] font-normal font-['Futura Md BT'] leading-[50px]">add new contact</div>
    </button>
  </div>

  <div className="w-[1000px] h-[316px] left-[204px] top-[305px] absolute bg-white rounded-[30px]" />



  <div className="w-[920px] h-[59px] left-[246px] top-[371px] absolute">
    
    <div className="w-[23px] h-6 left-[858px] top-[18px] absolute" />
    <div className="w-[26px] h-[26px] left-[894px] top-[17px] absolute" />
    <table className>
    {contacts.map((contact, index) => (
      <tr key={index}>
        <td>
          {contact.gender === 'male' ? (
            <img className="w-[59px] h-[59px] left-0 top-0 rounded-full" src={maleImg} alt="Male" /> 
          ) : (
            <img className="w-[59px] h-[59px] left-0 top-0 rounded-full" src={femaleImg} alt="Female" /> 
          )}
        </td>
        <td className="left-[98px] top-[5px] text-2xl font-normal font-['Futura Md BT'] leading-[50px]">{editableContact.email === contact.email ? <input type="text" value={editableContact.fullname} onChange={(e) => setEditableContact({ ...editableContact, fullname: e.target.value })} /> : contact.fullname}<span className="ml-4"></span></td>
        <td className="left-[318px] top-[5px] text-2xl font-normal font-['Futura Md BT'] leading-[50px]">{editableContact.email === contact.email ? (<div><input type="text"value={editableContact.gender}/><button onClick={() => setEditableContact({ ...editableContact, gender: editableContact.gender === 'male' ? 'female' : 'male' })}><img src={toggleImg} alt="toggle" /></button></div>) : (contact.gender)}<span className="ml-4"></span></td>
        <td className="left-[437px] top-[5px] text-2xl font-normal font-['Futura Md BT'] leading-[50px]">{editableContact.email === contact.email ? <input type="text" value={editableContact.email} onChange={(e) => setEditableContact({ ...editableContact, email: e.target.value })} /> : contact.email}<span className="ml-4"></span></td>
        <td className="left-[698px] top-[5px] text-2xl font-normal font-['Futura Md BT'] leading-[50px]">{editableContact.email === contact.email ? <input type="text" className="left-[698px] top-[5px] text-2xl font-normal font-['Futura Md BT'] leading-[50px]" value={editableContact.phone_number} onChange={(e) => setEditableContact({ ...editableContact, phone_number: e.target.value })} /> : contact.phone_number}<span className="ml-4"></span></td>
        <td className="left-[800px] top-[5px] font-normal font-['Futura Md BT'] leading-[50px]">{editableContact.email === contact.email ? (<button className="leading-[50px] rounded border-blue-500 bg-cyan-950 hover:bg-blue-200 py-1 px-6" onClick={() => handleSave()}><div className="font-normal font-['Futura Md BT']">Save</div></button>) : (<><button onClick={() => handleEdit(contact.email)}><img src={editImg} alt="edit" /></button><span className="ml-4"></span><button onClick={() => deleteContact(contact.email,contact.fullname)}><img src={deleteImg} alt="delete" /></button></>)}</td>
      </tr>
      
    ))}
    </table>
  </div>

  <div className="w-[735px] h-[50px] left-[344px] top-[317px] absolute">
    <div className="left-0 top-0 absolute text-cyan-950 text-lg font-bold font-['Futura Md BT'] leading-[50px]">full name</div>
    <div className="left-[150px] top-0 absolute text-cyan-950 text-lg font-bold font-['Futura Md BT'] leading-[50px]"><span className="ml-4"></span>gender</div>
    <div className="left-[300px] top-0 absolute text-cyan-950 text-lg font-bold font-['Futura Md BT'] leading-[50px]"><span className="ml-8"></span>e-mail</div>
    <div className="left-[490px] top-0 absolute text-cyan-950 text-lg font-bold font-['Futura Md BT'] leading-[50px]"><span className="ml-12"></span>phone number</div>
  </div>

  <div className="w-[138px] h-[91.57px] left-[204px] top-[72px] absolute">
    <div className="w-[172.94px] h-6 left-0 top-0 absolute">
      <img className="w-52 h-30 left-0 top-0 absolute" src={twcLogo} alt="TWC Logo"/>
    </div>
  </div>

  <div className="w-[133px] h-[50px] left-[1180px] top-[677px] absolute flex items-center">
    <div className="text-white text-[25px] font-normal font-['Futura Md BT'] underline leading-[50px]">
        <Link to="/">
            <img src={logOutImg} alt="logout" className="inline-block mr-2" />
            logout
        </Link>
    </div>   
</div>
</div>
  );
}

export default Contacts;
