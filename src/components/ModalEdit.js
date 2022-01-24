import React from 'react'

function ModalEdit() {
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
                                    <form className='col-lg-12'>
                                            <input type="text" placeholder='name' className='col-lg-6'/>
                                            <input type="text" placeholder='email' className='col-lg-6'/>
                                            <input type="text" placeholder='job' className='col-lg-6'/>
                                            <input type="text" placeholder='phone' className='col-lg-6'/>
                                            <input type="text" placeholder='location' className='col-lg-12'/>
                                    </form>
                                    
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary">Save</button>
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Discard</button>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default ModalEdit
