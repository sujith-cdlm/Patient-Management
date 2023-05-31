import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPatients from './components/AddPatients';
import ViewPatients from './components/ViewPatients';
import SearchPatient from './components/SearchPatient';
import Login from './components/Login';

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Login/>}></Route>
        <Route path='/add' exact element={<AddPatients/>}></Route>
        <Route path='/search' exact element={<SearchPatient/>}></Route>
        <Route path='/view' exact element={<ViewPatients/>}></Route>
      </Routes>
     </BrowserRouter>
  );
}

export default App;
