import { useState } from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";

import { Home } from './Pages/Home'
import { Login } from './Pages/Login'
import { CreateAccount } from './Pages/CreateAccount'
import { Store } from './Pages/Store'
import { Arena } from './Pages/Arena'
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/create-account" element={<CreateAccount/>} />
            <Route path="/store" element={<Store/>} />
            <Route path="/arena" element={<Arena/>} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
