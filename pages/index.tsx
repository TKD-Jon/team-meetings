import Link from 'next/link'

function Home() {
    return (
        <div>
            <p>Welcome to Next.js!</p>
            <Link href="/about?id=1" as="/about">
                About
            </Link>
        </div>
    );
}

export default Home