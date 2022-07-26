import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AddForm from './components/AddForm';
import Edit from './components/Edit';
import Container from './components/Container';
import HomeContainer from './components/HomeContainer';

import Login from './components/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomeContainer />} />
          <Route path="/dashboard" element={<Container />} />
          <Route path="/add" element={<AddForm />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
