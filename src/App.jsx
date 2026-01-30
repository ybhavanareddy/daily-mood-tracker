import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import { useEffect,useState } from 'react'

import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import Reports from "./pages/Reports/Reports"
import NotFound from "./pages/NotFound/NotFound"

import ProtectedRoute from './routes/ProtectedRoute'




function App() {
  const [dateEmojis, setDateEmojis] = useState(()=>{
    const saved= localStorage.getItem("dateEmojis")
    return saved ? JSON.parse(saved):{}
  })
  useEffect(()=>{
  localStorage.setItem("dateEmojis",JSON.stringify(dateEmojis))

},[dateEmojis])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element ={<Login/>}/>

        <Route 
          path="/" 
          element = {
          <ProtectedRoute>
              <Home 
                dateEmojis={dateEmojis}
                setDateEmojis={setDateEmojis}
              />
          </ProtectedRoute>
          
          }
        />
        <Route 
          path="/reports" 
          element={
            <ProtectedRoute>
                <Reports dateEmojis={dateEmojis}/>
            </ProtectedRoute>
          }
        />
        <Route path="*" element ={<NotFound/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App