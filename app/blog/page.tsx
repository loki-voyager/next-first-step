import { Metadata } from "next"
import Link from "next/link";

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        next:{
            revalidate: 60
        }
    })

    if(!response.ok) throw new Error("Unable to fetch posts")

    return response.json();
}

export const metadata: Metadata = {
    title: 'Blog | Next App',
}

export default async function Blog() {
    const posts = await getData()
    return (
        <div>
            <h1 className="label">Blog page</h1>
            <ul className="list">
                {posts.map((post:any) => (
                    <Link key={post.id} href={`/blog/${post.id}`} className="button">{post.title}</Link>
                ))}
            </ul>
        </div>
    )
}