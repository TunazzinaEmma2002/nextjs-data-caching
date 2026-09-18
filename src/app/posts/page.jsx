import React from 'react';

/**
 * GET:
 * POST:
 * UPDATE: put patch
 * DELETE:
 */

const getPosts = async() => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}
const getPosts3 = async() => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
    if(!res.ok){
       throw new Error('Failled to fetch posts')
    }
    return res.json();
}

const getPosts2 = async() => {
   try{
     const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
    return res.json();
   }
   catch(error){
    throw new Error('Failed to fetch posts')
   }
}


const PostPage = async() => {

    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await res.json();


    const posts = await getPosts();
    console.log(posts);
    
    return (
        <div>
            <h2>Hellos POST: {posts.length}</h2>

        </div>
    );
};

export default PostPage;