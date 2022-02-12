import React, { useEffect, useState } from 'react'

function ModalEdit({index,newStaff}) {

    const handleEdit = () => {
        const staffs = JSON.parse(localStorage.getItem("ropocontacts"))
         console.log(index)
        
        
        }

        const [contact, setContact] = useState(newStaff)

        const handleChange = (e) =>{
            setContact({...contact,  [e.target.name]: e.target.value })
           
        }

        useEffect(()=>{

            console.log("first", newStaff);
        },[])

    return (
         /* <!-- Button trigger modal --> */


                    /* <!-- Modal --> */
                    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Edit a Member</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">

                                    form in the modal
                                    <form onSubmit={handleEdit} className='col-lg-12'>
                                            <input type="text" placeholder='name' name='name'  value={contact.name} onChange={handleChange} className='col-lg-6'/>
                                            <input type="text" placeholder='email'  name='email'  value={contact.email}  onChange={handleChange} className='col-lg-6'/>
                                            <input type="text" placeholder='job'  name='job'  value={contact.job}    onChange={handleChange} className='col-lg-6'/>
                                            <input type="text" placeholder='phone'  name='phone'  value={contact.phone}  onChange={handleChange} className='col-lg-6'/>
                                            
                                            <input type="text" placeholder='location'  name='location'  value={contact.location}   onChange={handleChange} className='col-lg-12'/>

                                            <button type="submit" class="btn btn-primary" >Save</button>
                                    </form>
                                    
                                </div>
                                <div class="modal-footer">
                                    
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Discard</button>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default ModalEdit
