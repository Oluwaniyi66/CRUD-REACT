import React from 'react'
import NoteCard from '../components/NoteCard'
import './Notes.css'

function Notes() {

    const todo = [
        {
            'id':'001',
            'title': ' Meeting with Ropo',
            'date': '22/11/2021',
            'description': 'It was a nice time meeting with such an awesome person like kenny.It was a nice time meeting with such an awesome person like kenny'
        },
        {
            'id':'002',
            'title': ' Meeting with Ade',
            'date': '22/11/2021',
            'description': 'It was a nice time meeting with such an awesome person like kenny.It was a nice time meeting with such an awesome person like kenny'
        },
        {
            'id':'003',
            'title': ' Meeting with seun',
            'date': '22/11/2021',
            'description': 'It was a nice time meeting with such an awesome person like kenny.It was a nice time meeting with such an awesome person like kenny'
        },
        {
            'id':'004',
            'title': ' Meeting with kelly',
            'date': '22/11/2021',
            'description': 'It was a nice time meeting with such an awesome person like kenny.It was a nice time meeting with such an awesome person like kenny'
        },
        {
            'id':'005',
            'title': ' Meeting with kelly',
            'date': '22/11/2021',
            'description': 'It was a nice time meeting with such an awesome person like kenny.It was a nice time meeting with such an awesome person like kenny'
        },
        {
            'id':'006',
            'title': ' Meeting with kelly',
            'date': '22/11/2021',
            'description': 'It was a nice time meeting with such an awesome person like kenny.It was a nice time meeting with such an awesome person like kenny'
        }
    ]
    return (
        <div className='container'>
            <div className='col-lg-12' id='griding'>
                {
                  todo.map((item) =>
                  
                  <NoteCard
                  id={item.id}
                  title={item.title}
                  date={item.date}
                  description={item.description}

                  
                  />
                  )

                }

            </div>
            
        </div>
    )
}

export default Notes
