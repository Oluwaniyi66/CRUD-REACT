import React from 'react'
import './NoteCard.css'

function NoteCard({id,title,date,description}) {
    return (
        <div className='col-lg-3 me-2 mt-2 konga'>

            <h4 className='col-lg-8 note-head ms-4 pt-4'> {title}</h4>
            <h4 className='col-lg-10 note-head1 ms-4'>{date}</h4>
            <h6 className='col-lg-10 note-body mx-4'>{description}
            </h6>

            <div className='col-lg-10 row ms-4'>
                <div className='col-lg-6 row'>
                    <div className='col-lg-3'> <i class="far fa-star"></i></div>
                    <div className='col-lg-3'><i class="far fa-trash-alt"></i></div>

                </div>
                <div className='col-lg-6 note-icon mb-4'>
                   <i class="fas fa-ellipsis-v"></i>
                </div>
            </div>
        </div>
    )
}

export default NoteCard
