import { createContext, useState } from "react";


 export  const ContactContext = createContext();


 const ContactContextProvider = ({children}) => {

    const [contact, setContact] = useState({
        name: "",
        email: "",
        job: "",
        phone: "",
        image: "",
        location: "",
      });
    
      const myBox = {
          contact, setContact
      }

    return(
        <ContactContext.Provider value={myBox}>
            {children}
        </ContactContext.Provider>
    )
 }

 export default ContactContextProvider