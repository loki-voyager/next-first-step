import { Metadata } from "next"

async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })

    return response.json();
}

type Props = {
    params: {
        id: string
    }
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
    const post = await getData(id);
    return {
        title: post.title,
    }
}

export default async function Post({ params: { id } }: Props) {
    const post = await getData(id);
    return (
        <div className="blog">
            <h1 className="label">{post.title}</h1>
            <p className="post-body">{post.body}</p>
        </div>
    )
}