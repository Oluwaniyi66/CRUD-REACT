import React from 'react'
import './Header.css'


function Header() {
    return (
        <div className='container'>
            <div className='konta'>
                <div className='row'>

                <div className='col-lg-6'>
                    <div className='row'>

                        <div class="form-check col-lg-1 ckb">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />

                        </div>
                        <div className='col-lg-11'>
                            <div className='row'>
                                <h4 className='col-lg-2 emm1'>Name</h4>
                                <h4 className='col-lg-10 emm'>Email</h4>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-lg-6'>
                    <div className='row'>

                       
                        <div className='col-lg-11'>
                            <div className='row'>
                                <h4 className='col-lg-2 emm1'>Location</h4>
                                <h4 className='col-lg-10 emm'>Phone</h4>

                            </div>
                        </div>
                        <div class="form-check col-lg-1 ckb">
                        <i class="far fa-trash-alt"></i>

                        </div>
                    </div>

                </div>
                </div>

            </div>

        </div>
    )
}

export default Header
