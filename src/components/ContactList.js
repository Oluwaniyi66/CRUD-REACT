import React from 'react'
import "./ContactList.css"
import ModalDelete from './ModalDelete'
import ModalEdit from './ModalEdit'
function ContactList({ id, image, name, job, email, location, phone }) {
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

                    <i type="button" class="fas  fa-pen" data-bs-toggle="modal" data-bs-target="#exampleModal2">

                    </i>
                </div>
                <div className='col-lg-6  big1'>
                    <i type="button" class="fas  fa-user-minus" data-bs-toggle="modal" data-bs-target="#exampleModal3">

                    </i>


                </div>



            </div>
            <ModalEdit />
            <ModalDelete />
        </div>

    )
}

export default ContactList
