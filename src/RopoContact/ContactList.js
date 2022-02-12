import React, { useContext } from 'react'
import { ContactContext } from './ContactContext'
import "./ContactList.css"
import ModalDelete from './ModalDelete'
// import ModalEdit from './ModalEdit'

function ContactList({item, index, image, name, job, email, location, phone }) {

    const {contact} = useContext(ContactContext)
    const {setContact} = useContext(ContactContext)

    const handleChange = (e) => {
        setContact({...contact,  [e.target.name]: e.target.value })

    }

    const handleEdit = ()=> {
        setContact(item)
        console.log("my items",item);

    }

    const SubmitEdit = () => {

        setContact(item)
        console.log("my item is",item);
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

        oldContacts.map((item,index) => {
           if(item.id == contact.id){
            oldContacts[index] = editedContact

           } 
        })


    } 



    return (
        <div className='col-lg-3 mx-2 my-4  konge'>
            <div className='pic-section'>
                <div className='pic'>
                    <img src={image} alt="" />
                </div>

            </div>

            <h1 className='list-h1'>{name}</h1>
            <h4 className='list-h2'>{job}</h4>

            <div className='row'>
                <div className='col-lg-2 list-email'>

                    <h4>Email</h4>
                </div>
                <div className='col-lg-10 list-email11'>
                    <h4>{email}</h4>

                </div>

            </div>
            <div className='row'>
                <div className='col-lg-6 list-email'>

                    <h4>location</h4>
                </div>
                <div className='col-lg-6 list-email1'>
                    <h4>{location}</h4>

                </div>

            </div>
            <div className=''>
                <div className='row'>
                    <div className='col-lg-6 list-email'>

                        <h4>Phone</h4>
                    </div>
                    <div className='col-lg-6 list-email1'>
                        <h4>{phone}</h4>

                    </div>

                </div>

            </div>
            <div className='row'>


                <div className='col-lg-6 big'>

                    <i type="button" onClick={handleEdit} class="fas  fa-pen" data-bs-toggle="modal" data-bs-target="#exampleModal2">

                    </i>
                </div>
                <div className='col-lg-6  big1'>
                    <i type="button"  class="fas  fa-user-minus" data-bs-toggle="modal" data-bs-target="#exampleModal3">

                    </i>


                </div>



            </div>
            <ModalDelete ropo={index} />

            {/* /* <!-- Button trigger modal --> */ }


                    {/* /* <!-- Modal --> */}
                    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Edit a Member</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">

                                    <p>
                                    form in the modal
                                    </p>
                                    <form  className='col-lg-12'>
                                            <input type="text" placeholder='name' name='name'  value={contact.name} onChange={handleChange} className='col-lg-6'/>
                                            <input type="text" placeholder='email'  name='email'  value={contact.email}  onChange={handleChange} className='col-lg-6'/>
                                            <input type="text" placeholder='job'  name='job'  value={contact.job}    onChange={handleChange} className='col-lg-6'/>
                                            <input type="text" placeholder='phone'  name='phone'  value={contact.phone}  onChange={handleChange} className='col-lg-6'/>
                                            
                                            <input type="text" placeholder='location'  name='location'  value={contact.location}   onChange={handleChange} className='col-lg-12'/>

                                            <button onClick={SubmitEdit} type="button" class="btn btn-primary" >Save</button>
                                    </form>
                                    
                                </div>
                                <div class="modal-footer">
                                    
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Discard</button>
                                </div>
                            </div>
                        </div>
                    </div>

        </div>

    )
}

export default ContactList
