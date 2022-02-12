import React, { useContext, useEffect, useState } from "react";
import { ContactContext } from "./ContactContext";
import "./Header.css";
// import ModalAdd from "./ModalAdd";
import ModalDelete from "./ModalDelete";
// import ModalEdit from "./ModalEdit";

function ContactGrid({item, index, image, name, job, email, location, phone, staff }) {

  const {contact} = useContext(ContactContext)
  const {setContact} = useContext(ContactContext)


  const handleEdit = ()=>{
    setContact(item)
   console.log("item to be edited",item)
  }

  // console.log('updated contact',contact);

  const SubmitEdit = ()=>{
    setContact(item)
    // console.log("my contact", contact);

    let oldContacts = JSON.parse(localStorage.getItem("ropocontacts"))

    let editedContact = {
      id: contact.id,
      name: contact.name,
      email: contact.email,
      job: contact.job,
      phone: contact.phone,
      image: contact.image,
      location: contact.location,
    }

    oldContacts.map((item,index)=>{

      if(item.id == contact.id){
        oldContacts[index] = editedContact
      }
    })

   localStorage.setItem("ropocontacts", JSON.stringify(oldContacts))

  }
  
  


 

    const handleChange = (e) =>{
        setContact({...contact,  [e.target.name]: e.target.value })
       
    }

    useEffect(()=>{

    },[])

  return (
    <div className="container">
      <div className="konta my-4">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div class="form-check col-lg-1 ckb">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
              <div className="col-lg-11">
                <div className="row">
                  <div className="col-lg-3 emm1">
                    <div className="row">
                      <div className="col-lg-3 pic">
                        <img src={image} alt="" />
                      </div>
                      <div className="col-lg-9 row">
                        <h3 className="emm2 col-lg-3">{name}</h3>
                        <h4 className="emm2 col-lg-9">{job}</h4>
                      </div>
                    </div>
                  </div>
                  <h4 className="col-lg-9 emm">{email}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-10">
                <div className="row">
                  <h4 className="col-lg-2 emm1">{location}</h4>
                  <h4 className="col-lg-10 emm">{phone}</h4>
                </div>
              </div>
              <div class="form-check col-lg-2 ckb">
                <div className="row">
                  <div className="col-lg-6">
                    <i
                      type="button"
                      class="fas  fa-pen"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                      onClick={handleEdit}
                    ></i>
                  </div>
                  <div className="col-lg-6">
                    <i
                      type="button"
                      class="fas  fa-user-minus"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <ModalEdit index = {index} newStaff = {edit} /> */}
        {/* <ModalAdd/> */}
        <ModalDelete  ropo = {index}/>
      </div>
      <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Edit a Member</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">

                                    <form  className='col-lg-12'>
                                        form in the modal
                                            <input type="text" placeholder='name' name='name'  value={contact.name} onChange={handleChange} className='col-lg-6'/>
                                            <input type="text" placeholder='email'  name='email'  value={contact.email}  onChange={handleChange} className='col-lg-6'/>
                                            <input type="text" placeholder='job'  name='job'  value={contact.job}    onChange={handleChange} className='col-lg-6'/>
                                            <input type="text" placeholder='phone'  name='phone'  value={contact.phone}  onChange={handleChange} className='col-lg-6'/>
                                            
                                            <input type="text" placeholder='location'  name='location'  value={contact.location}   onChange={handleChange} className='col-lg-12'/>

                                            <button onClick ={SubmitEdit} type="button" class="btn btn-primary" >Save</button>
                                    </form>
                                    
                                </div>
                                <div class="modal-footer">
                                    
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Discard</button>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
  );
}

export default ContactGrid;
