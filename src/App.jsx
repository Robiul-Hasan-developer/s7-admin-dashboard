import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard';
import AddNew from './pages/AddNew';
import TablePage from './pages/TablePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Demo from './pages/Demo';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}> </Route>
          <Route path="/add" element={<AddNew/>}>  </Route>
          <Route path="/table" element={<TablePage/>}>  </Route>
          <Route path="/demo" element={<Demo/>}>  </Route>
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
