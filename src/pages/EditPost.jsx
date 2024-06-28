import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from "../appwrite/config";
import { useNavigate,  useParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

function EditPost() {
    const [post, setPosts] = useState(null)
    const [loader, setLoader] = useState(false);
    const {slug} = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        setLoader(true);
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                
                if (post) {
                    
                    setPosts(post)
                    setLoader(false);
                }
                
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            {loader? (<Loader/>) : ( <PostForm post={post} />) }
            
        </Container>
    </div>
  ) : null
}

export default EditPost