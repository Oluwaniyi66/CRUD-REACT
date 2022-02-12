import React from 'react'
import { Link } from 'react-router-dom'
import ModalAdd from './ModalAdd'
import './NavBar.css'

function NavBar() {
    return (
        <div className='container'>
            <div className='col-lg-12'>
                <div className='row'>
                    <h1 className='col-lg-2 ac1'> Contact</h1>
                    <h4 className='col-lg-4 ac' >Apps.Contact</h4>

                </div>

            </div>
            <div className='col-lg-12 my-4'>
                <div className='row'>
                    <div className='col-lg-9'>

                        <form className="d-flex col-lg-6">
                            <input
                                className="form-control me-2 fm"
                                type="search"
                                placeholder="Search Contacts..."
                                aria-label="Search"
                            />
                            <button className=" fasit mt-2" type="submit">
                                <i class="fas fa-search"></i>
                            </button>
                        </form>
                    </div>
                    <div className='col-lg-3 mb-4'>
                        <div className='row'>

                            <div className=' col-lg-6'>
                                <div className='use col-lg-6'>
                                    <i type="button" class="fas fa-user-plus" data-bs-toggle="modal" data-bs-target="#exampleModal">

                                    </i>
                                </div>
                            </div>
                            <div className='col-lg-6 row'>
                                <div className='col-lg-5 mx-2 use1'>
                                    <Link to='/grid'>
                                    <i class="fas fa-th-large">  </i>
                                    
                                    </Link>
                                </div>

                                <div className='col-lg-5 use2'>
                                    <Link to='/list'>
                                    <i class="fas fa-list-ul"></i>
                                    
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                   
        <ModalAdd />



                    <div className=''>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default NavBar
