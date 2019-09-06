import Link from 'next/link'

function Home() {
    return (
        <div>
            <p>Welcome to Next.js!</p>
            <Link href="/board">
                <a>Board</a>
            </Link>
        </div>
    );
}

export default Home