import Link from "next/link"

const Header = () => {
    return (
        <header>
            <Link className="button" href="/">Home</Link>
            <Link className="button" href="/blog">Blog</Link>
            <Link className="button" href="/about">About</Link>
        </header>
    )
}

export { Header }