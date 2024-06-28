import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

import Loader from '../components/Loader/Loader'

function AllPosts() {
    const [loader, setLoader] = useState(false);

    const [posts, setPosts] = useState([])

    useEffect(() => {
    setLoader(true);
    console.log(setLoader);
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        
        setPosts(posts.documents);
        setLoader(false);
      }
    });

  }, []);
  return (
    <div className='w-screen py-8'>
        <Container>
            <div className="flex flex-wrap ">
          {loader ? (
            <Loader />
          ) : (
            posts.map((post) => (
              <div
                key={post.$id}
                className=" p-2 w-full sm:w-1/2 md:w-1/3  lg:w-1/4"
              >
                <PostCard {...post} />
              </div>
            ))
          )}
        </div>
            </Container>
    </div>
  )
}

export default AllPosts