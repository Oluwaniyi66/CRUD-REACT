import React from 'react'
import ContactList from './ContactList'
// import Header from './Header'
import "./List.css"
// import data from './ContactData';

function List() {
    const staff = JSON.parse(localStorage.getItem("ropocontacts"))
    
    return (
        <div>
              
                <div className='container'>

                <div className='my-4' id='listing'>
                    {
                        staff.map((item,index)=>
                        
                        <ContactList
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
        </div>
    )
}

export default List
