import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components';
import Loader from '../components/Loader/Loader';

function Home() {
    const [posts, setPosts] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        appwriteService.getPosts().then((response) => {
            if (response) {
                setPosts(response.documents);
            }
            setLoader(false);
        }).catch(() => {
            setLoader(false);
        });
    }, []);

    return (
        <div className="w-full py-8">
            <Container>
                {loader ? (
                    <Loader />
                ) : (
                    posts.length === 0 ? (
                        <div className="w-full py-8 mt-4 text-center">
                            <div className="flex flex-wrap">
                                <div className="p-2 w-full">
                                    <h1 className="text-2xl font-bold text-gray-300 hover:text-gray-500">
                                        No Blogs Found. Create a new one!
                                    </h1>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-wrap justify-center">
                            {posts.map((post) => (
                                <div key={post.$id} className="p-3 w-auto">
                                    <PostCard {...post} />
                                </div>
                            ))}
                        </div>
                    )
                )}
            </Container>
        </div>
    );
}

export default Home;
