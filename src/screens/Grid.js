import React from 'react'
import ContactGrid from '../components/ContactGrid'
import Contact from '../components/ContactGrid'
import ContactList from '../components/ContactList'
import Header from '../components/Header'
import "./Grid.css"
function Grid() {
    const staff = [
        {  'id':'001',
            'image':'https://designreset.com/cork/ltr/demo11/assets/img/profile-11.jpeg',
        'name':'Ropo',
        'job':'Web crooner',
        'email':'oluwaniyiropo11@gmail.com',
        'location':'Ogba',
        'phone':'08132621797'},
        {'id':'002',
            'image':'https://designreset.com/cork/ltr/demo11/assets/img/profile-11.jpeg',
        'name':'Ropo',
        'job':'Web crooner',
        'email':'oluwaniyiropo11@gmail.com',
        'location':'Ogba',
        'phone':'08132621797'},
        {'id':'003',
            'image':'https://designreset.com/cork/ltr/demo11/assets/img/profile-12.jpeg',
        'name':'Danny',
        'job':'Web crooner',
        'email':'daniskolobo@gmail.com',
        'location':'alagomeji',
        'phone':'08132621797'},
        {'id':'004',
            'image':'https://designreset.com/cork/ltr/demo11/assets/img/profile-11.jpeg',
        'name':'Solo',
        'job':'Web Bomber',
        'email':'solo419@gmail.com',
        'location':'Ibadan',
        'phone':'09045434323'}
    ]
    return (
        <div>
                <div>
                <Header />

                </div>
                <div className='my-4'>
                    {
                        staff.map((item)=>
                        
                        <ContactGrid 
                        
                            id={item.id}
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
