async function getPosts(){
    const res = await fetch('http://localhost:4000/posts' ,{
        next:{
            revalidate: 30 // Revalidate every 60 seconds
        }
    })
    return res.json()
}

export default async function Posts() {
    const posts = await getPosts()
    return ( <div className="text-white">
        <h1 className="text-2xl mb-4">Posts</h1>
        <ul className="list-disc pl-5">
            {posts.map((post:any) => (
                <li key={post.id} className="mb-2">
                    <h2 className="text-xl text-yellow font-bold">{post.title}</h2>
                    <p>{post.views}</p>
                    <p>{post.states}</p>
                </li>
            ))}
        </ul>
    </div>)
}