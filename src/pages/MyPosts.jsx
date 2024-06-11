import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postDocuments = await appwriteService.getPosts([]);
                if (postDocuments) {
                    const userPosts = postDocuments.documents.filter(
                        (post) => post.userId === userData.$id
                    );
                    setPosts(userPosts);
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, [userData.$id]);

    return (
        <div className='w-screen py-8'>
            <Container>
                <div className='flex flex-wrap justify-center'>
                    {posts.map((post) => (
                        <div key={post.$id} className='sm:p-4 p-3'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;