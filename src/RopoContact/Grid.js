import React from 'react'
import ContactGrid from './ContactGrid'
import "./Grid.css"

function Grid() {
    const staff = JSON.parse(localStorage.getItem("ropocontacts"))

    return (
        <div className='container'>

            <div className='col-lg-12 ' id='listing'>

                {
                    staff.map((item,index) =>

                        <ContactGrid

                            item = {item}
                            index={index}
                            image={item.image}
                            name={item.name}
                            job={item.job}
                            email={item.email}
                            location={item.location}
                            phone={item.phone}
                            
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Grid
