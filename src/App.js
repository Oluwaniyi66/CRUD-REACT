import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./RopoContact/NavBar";
import List from "./RopoContact/List";
import Grid from "./RopoContact/Grid";
import ContactContextProvider from "./RopoContact/ContactContext";
import InvoiceAdd from "./InvoiceApp/InvoiceAdd";
// import User from "./CrudExam/User";
// import Setting from "./CrudExam/Setting";
// import InvoiceAdd from "./InvoiceApp/InvoiceAdd";
// import Practise from "./ContextFlame/Practise";

function App() {
  return (
    <div className="App">
        <ContactContextProvider>

      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          {/* <Route path="/grid" element={<Grid />} /> */}

          {/* <Route path="/list" element={<List />} /> */}
          {/* <Route path="/user" element={<User/>} /> */}
          {/* <Route path="/setting" element={<Setting/>} /> */}

          <Route  path="/invoiceadd" element={<InvoiceAdd/>} />



          
        </Routes>
      </BrowserRouter>
          {/* <Practise/> */}
        </ContactContextProvider>
    </div>
  );
}

export default App;
