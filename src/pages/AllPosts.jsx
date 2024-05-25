import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-screen py-8'>
        <Container>
            <div className=' flex flex-wrap sm:flex-row flex-col sm:ml-0 ml-8 '>
                {posts.map((post) => (
                    <div key={post.$id} className='sm:p-4 p-3  '>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts