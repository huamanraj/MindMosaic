import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='text-lg  px-4 py-2 rounded-full border border-transparent hover:border-red-500 transition duration-300 ease-in-out inline-block bg-red-900'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn