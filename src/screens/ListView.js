import React from 'react'
import ContactList from '../components/ContactList'
import "./ListView.css"

function ListView() {
    const staff = [
        {
            'id': '001',
            'image': 'https://designreset.com/cork/ltr/demo11/assets/img/profile-11.jpeg',
            'name': 'Ropo',
            'job': 'Web crooner',
            'email': 'oluwaniyiropo11@gmail.com',
            'location': 'Ogba',
            'phone': '08132621797'
        },
        {
            'id': '002',
            'image': 'https://designreset.com/cork/ltr/demo11/assets/img/profile-12.jpeg',
            'name': 'Ropo',
            'job': 'Web crooner',
            'email': 'oluwaniyiropo11@gmail.com',
            'location': 'Ogba',
            'phone': '08132621797'
        },
        {
            'id': '003',
            'image': 'https://designreset.com/cork/ltr/demo11/assets/img/profile-1.jpeg',
            'name': 'Ropo',
            'job': 'Web crooner',
            'email': 'oluwaniyiropo11@gmail.com',
            'location': 'Ogba',
            'phone': '08132621797'
        },
        {
            'id': '004',
            'image': 'https://designreset.com/cork/ltr/demo11/assets/img/profile-2.jpeg',
            'name': 'Ropo',
            'job': 'Web crooner',
            'email': 'oluwaniyiropo11@gmail.com',
            'location': 'Ogba',
            'phone': '08132621797'
        },
        {
            'id': '005',
            'image': 'https://designreset.com/cork/ltr/demo11/assets/img/profile-3.jpeg',
            'name': 'Ropo',
            'job': 'Web crooner',
            'email': 'oluwaniyiropo11@gmail.com',
            'location': 'Ogba',
            'phone': '08132621797'
        },
        {
            'id': '006',
            'image': 'https://designreset.com/cork/ltr/demo11/assets/img/profile-4.jpeg',
            'name': 'Danny',
            'job': 'Web crooner',
            'email': 'daniskolobo@gmail.com',
            'location': 'alagomeji',
            'phone': '08132621797'
        },
        {
            'id': '007',
            'image': 'https://designreset.com/cork/ltr/demo11/assets/img/profile-5.jpeg',
            'name': 'Solo',
            'job': 'Web Bomber',
            'email': 'solo419@gmail.com',
            'location': 'Ibadan',
            'phone': '09045434323'
        }
    ]
    return (
        <div className='container'>

            <div className='col-lg-12 ' id='listing'>

                {
                    staff.map((item) =>

                        <ContactList

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

export default ListView
