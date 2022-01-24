import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Grid from './screens/Grid';
import NavBar from './components/NavBar';
import List from './screens/List';
import ListView from './screens/ListView';
import ContactContextProvider from './components/ContactContext';
import Notes from './screens/Notes';
import Todo from './screens/Todo';
import Parent from './practise/Parent';
import InvoiceList from './InvoiceApp/InvoiceList';
import InvoicePreview from './InvoiceApp/InvoicePreview';
import InvoiceAdd from './InvoiceApp/InvoiceAdd';
import TodoNew from './Solomon/TodoNew';

function App() {
  return (
    <div className="App">
      <ContactContextProvider>

        <BrowserRouter>
          {/* <NavBar /> */}
          <Routes>
            {/* /* <Route path='/grid' element={<ListView />} />
            <Route path='/listview' element={<Grid />} />
            <Route path='/note' element={<Notes />} /> */}
          {/* <Route path='/todo' element={<Todo/>} />  */}
          {/* <Route path='/practice' element={<Parent/>} /> */}
          {/* <Route path='/invoice-list' element={<InvoiceList />} />
          <Route path='/invoice-preview' element={<InvoicePreview/>} />
          <Route path='/invoice-add' element={<InvoiceAdd/>} /> */}
          <Route path='/' element={<TodoNew/>} /> 

          </Routes>
        </BrowserRouter>
      </ContactContextProvider>
    </div>
  );
}

export default App;
