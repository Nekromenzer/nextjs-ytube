import Link from "next/link"

async function getPosts(){
    const res = await fetch('http://localhost:4000/posts' ,{
        next:{
            revalidate: 30 // Revalidate every 60 seconds
            // 0 would mean no caching
        }
    })
    return res.json()
}

export default async function Posts() {
    const posts = await getPosts()
    return ( <div className="text-white">
        <h1 className="text-4xl mb-4 text-center my-4">Posts</h1>
        <div className="flex flex-col gap-4 cursor-pointer items-center justify-center">
            {posts.map((post:any) => (
                <Link href={`/posts/${post.id}`} key={post.id}>
                    <div className="p-2 border-1 border-blue-300 border-2 rounded-md bg-slate-500 min-w-64">
                        <h2 className="text-xl text-black font-bold capitalize">{post.title}</h2>
                        <p className="italic font-mono">{post.views}</p>
                        <div className="rounded w-16 h-8 text-slate-900 bg-green-300 flex justify-start items-start px-2">{post.states}</div>
                    </div>
                </Link>
            ))}
        </div>
    </div>)
}