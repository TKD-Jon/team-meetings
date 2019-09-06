import Link from 'next/link'
import { useRouter } from 'next/router';


function About() {
    const router = useRouter();

    return (
        <div>
            <p>Welcome to the about page.</p>
            <p>Did you notice the peramiter?</p>
            <h1>ID: {router.query.id}</h1>
            <p>Try going to the URL and entering /about?id=2</p>
        </div>
    );
}

export default About