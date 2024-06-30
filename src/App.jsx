import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import Loader from './components/Loader/Loader'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='w-screen  flex flex-wrap content-between bg-[#212121]'>
      <div className=' block'>
        <Header />
        <main className='min-h-[calc(100vh-11rem)]'>   
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null 
}

export default App
