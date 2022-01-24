import { createContext, useEffect, useState } from "react";


export const ContactContext = createContext();

const ContactContextProvider = ({ children }) => {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //this is a get request and its collecting one argument

  const getUsers =  fetch('http://localhost:8000/api/all_users')
                    .then(response => response.json())
                    .then(json => {

                      setUsers(json.users)
                      // console.log(json)

})

    useEffect(()=>{
      // getUsers()
    },[])
    
    const reservoir = [users,isLoading]

  return (
    <ContactContext.Provider value={reservoir}>

      {children}
    </ContactContext.Provider>
  )
}

export default ContactContextProvider;