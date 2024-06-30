import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";
import Loader from "../components/Loader/Loader";


export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [loader, setLoader] = useState(false);
    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        setLoader(true);
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                    setLoader(false);
                } 
                else navigate("/");
                
            });
        } else navigate("/");
    }, [slug, navigate]);
    
    const handleDelete = () => {
        setIsModalOpen(true);
    };

    const handleConfirmDelete = () => {
        setLoader(true)
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
                setLoader(false)
            }
        });
        setIsModalOpen(false);
    };

    return post ? ( 
        <>
        {loader?(<Loader/>):(
        <div className="py-8 bg-[#020617] text-[#fafafa] justify-center content-center sm:px-80 px-5 text-lg">
            <Container>
                <div className="w-full mb-6">
                    <h1 className="text-5xl font-bold">{post.title}</h1>
                </div>
                <div className="w-full flex justify-center mb-4 aspect-[40/21]  relative border rounded-xl p-2 ">
                    
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3 text-xs">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-600" onClick={handleDelete}
                            className="text-xs">
                                Delete
                            </Button>  
                            <Modal
                                isOpen={isModalOpen}
                                onClose={() => setIsModalOpen(false)}
                                onConfirm={handleConfirmDelete}
                                title="Confirm Deletion"
                                
                            > 
                            <p className="text-sm ">Are you sure?<br /> 
                            <span className="text-red-400 italic">can't be restored once deleted</span>
                            </p>
                            </Modal>
                            
                        </div>
                    )}
                </div>
                
                <div className="browser-css text-xl  ">
                    {parse(post.content)}
                    </div>
            </Container>
        </div>
        )}
        </>
    ) : null;
}
