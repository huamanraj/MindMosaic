import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative  bg-[#171717] overflow-hidden flex flex-wrap sm:justify-between justify-center sm:px-20 w-screen sm:h-20 ">
            
                            <div className="mb-4 inline-flex items-center pt-5">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="sm:text-sm text-xs text-gray-400 sm:py-7 py-4">
                                    &copy; Copyright 2024. All Rights Reserved by MindMosaic.
                                </p>
                            </div>
                        
        </section>
  )
}

export default Footer