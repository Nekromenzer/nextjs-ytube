import React from 'react'

async function getPost(id:any){
    const res = await fetch('http://localhost:4000/posts/' + id ,{
        next:{
            revalidate: 30 
        }
    })

    if (!res.ok) {
        // You can throw or handle error more gracefully
        throw new Error(`Post with ID ${id} not found`);
    }
    return res.json()
}


const PostDetails = async ({params}:any) => {
    const { id } = params;

    const post = await getPost(id);

    return (
        <div>
            <div key={post.id} className="p-2 border-1 border-blue-300 border-2 rounded-md bg-white mx-8">
                    <h2 className="text-xl text-black font-bold capitalize">{post.title}</h2>
                    <p className="italic font-mono text-red-600">{post.views}</p>
                    <div className="rounded w-16 h-8 text-slate-900 bg-green-300 flex justify-start items-start px-2">{post.states}</div>
                    <p className="italic font-mono text-slate-800">{post.description}</p> 
                </div>
        </div>
    )
}

export default PostDetails