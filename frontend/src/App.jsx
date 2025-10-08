import React from 'react'
import { Route,Routes } from 'react-router-dom'
import SignUp from './pages/signUp'
import SignIn from './pages/SignIn'
export const serverUrl="http://localhost:8000"
function App() {
  return (
    <Routes>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/forget-password' element={<ForgetPassword/>}/>
    </Routes>
  )
}

export default App