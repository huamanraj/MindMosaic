import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'


function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-64 h-72 overflow-hidden bg-[#171717]  text-gray-200 rounded-lg shadow-md">
      <div className="h-40 relative">
        <img
          src={appwriteService.getFilePreview(featuredImage)}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold ">{title}</h2>
      </div>
    </div>
  


    </Link>
  )
}





export default PostCard