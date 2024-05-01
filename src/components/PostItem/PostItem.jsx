import { useEffect, useState } from 'react';
import PostsComponent from '../PostsComponent/PostsComponent';

const PostItem = () => {
    const [posts,  setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);


    const getPosts = async () => {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts')
            let data = await response.json()
            setPosts(data);
        } catch { }
    }

   return (
        <>
            {posts?.map((post) => <PostsComponent key={post.id} post={post} />)}
        </>
    )



}

export default PostItem;
