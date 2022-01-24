import React, { useState } from 'react'

function ModalAdd() {

    const [user, setUser] = useState({
        name: '',
        email: '',
        job: '',
        phone: '',
        location: '',
        image: ''
    })

    const handleChange = (e) => {

        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {

        console.log('frontend form Data', user)
        e.preventDefault();
        // console.log(user);
        fetch('http://localhost:8000/api/add_user', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                'Accept': 'Application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then( json =>{

            if(json.status == 'success'){
                console.log('message',json.message)
            }
            else{
                console.log("worker was not added")
            }
        }

        )
        
    }
    return (
        /* <!-- Button trigger modal --> */


        /* <!-- Modal --> */
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add a Member</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        {/* form in the modal */}
                        <form className='col-lg-12' onSubmit={handleSubmit} encType='multipart/form-data'>
                            <input type="text" placeholder='name' name='name' value={user.name} onChange={handleChange} className='col-lg-6' />
                            <input type="text" placeholder='email' name='email' value={user.email} onChange={handleChange} className='col-lg-6' />
                            <input type="text" placeholder='job' name='job' value={user.job} onChange={handleChange} className='col-lg-6' />
                            <input type="text" placeholder='phone' name='phone' value={user.phone} onChange={handleChange} className='col-lg-6' />
                            <input type="file" placeholder='image' name='image' value={user.image} onChange={handleChange} className='col-lg-6' />
                            <input type="text" placeholder='location' name='location' value={user.location} onChange={handleChange} className='col-lg-12' />
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary">Add</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Discard</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAdd
