import Head from 'next/head';
import Link from 'next/link';


const Header = props => (
    <div className="header">
        <Head >
            <title>{props.title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,700,700i&display=swap" rel="stylesheet"></link>
        </Head>
        <div className="main-header-container">
            <a className="img-holder">
                <Link href="/">
                    <h1 className="mobile">TurnKey</h1>
                </Link>
                <Link href="/">
                    <h1 className="desktop">TurnKey</h1>
                </Link>
            </a>
            <nav>
                <li>
                    <Link href="../../board">
                        <a>Team Board</a>
                    </Link>
                </li>
                <li>
                    <Link href="../../dnd">
                        <a>DnD</a>
                    </Link>
                </li>
            </nav>
        </div>
        <style global jsx>{`
            * {
                font-family: 'Source Sans Pro', sans-serif;
            }
            html {
                background:#fbfbfb;
            }
            body {
                margin: 0;
                box-sizing: border-box;
                min-height:100vh;
                padding-top:calc(63px + 2em);
            }
            img {
                max-width:100%;
            }
            a {
                cursor: pointer;
            }
            @media(min-width:800px) {
                body {
                    padding-top:0;
                }
            }
        `}</style>
        <style jsx>{`
            .header {
                background: rgb(237, 237, 237);
                box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.32);
                position:fixed;
                top:0;
                left:0;
                width:100vw;
                z-index:50;
            }
            .main-header-container{
                max-width:92%;
                margin:auto;
                padding:1em 0;
                overflow:hidden;
                width:100%;
                display:flex;
                justify-content:space-between;
                align-items:center;
            }
            .img-holder {
                max-width:13vw;
            }
            .desktop {
                display:none;
            }
            @media(min-width:800px) {
                .header {
                    position:relative;
                    background:transparent;
                    box-shadow:none;
                    width:auto;
                    font-size:1.75em;
                    border-bottom:1px solid;
                    margin-bottom:2em;
                    width:100%;
                }
                .main-header-container {
                    margin:0;
                    max-width:100%;
                    min-width:100%;
                    align-items:flex-end;
                }
                .desktop {
                    display:block;
                    margin:0;
                    transition:350ms ease-in-out;
                }
                .desktop:hover {
                    opacity:.7;
                }
                .mobile {
                    display:none;
                }
                .img-holder {
                    max-width:60%;
                }
            }
        `}</style>
    </div>
);


export default Header;