import Link from "next/link"

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="About">
            <div><h1 className="label">About Us</h1></div>
            <ul className="flex gap-1">
                <Link className="button" href="/about/team">Team</Link>
                <Link className="button" href="/about/contacts">Contacts</Link>
            </ul>
            <div>
                {children}
            </div>
        </div>
    )
}