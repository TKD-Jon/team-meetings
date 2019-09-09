import fetch from 'isomorphic-unfetch'

import PageLayOut from '../components/PageLayOut'
import DotDotDot from '../components/DotDotDot'

const Board = props => (
    <PageLayOut pageTitle="Home Page Duh" pageHeadline="Welcome to the Board page." >
        <div className="teamBoard">
            {props.json.map(teamMember => (
                <div id={teamMember.name} className="teamMember" key={teamMember.name}>
                    <h2 className="teamName">{teamMember.person.name}</h2>
                    <table>
                        <thead>
                            <th>Projects:</th>
                        </thead>
                        <tbody>
                            {teamMember.person.projects.map(project => (
                                <tr key={project}>
                                    {project}
                                    <DotDotDot />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
        <style jsx>{`
            .teamName {
                margin-top:0;
                margin-bottom:.5em;
            }
            .teamBoard {
                display:flex;
                justify-content:space-between;
                width:100%;
                flex-wrap:wrap;
            }
            .teamBoard::after {
                content: '';
                display:block;
                width:calc(33% - 3em);
                padding:1em;
            }
            .teamMember {
                width:calc(33.333% - 3em);
                border:1px solid rgba(0,0,0,.25);
                border-radius:.3em;
                padding:1em;
                margin:0 0 1.5em 0;
            }
            table {
                width:100%;
                background:rgba(237, 237, 237, 0.26);
                border:1px solid rgba(237, 237, 237, 0.5);
                padding:.5em;
                border-radius:.3em;
            }
            th {
                text-align:left;
            }
            th, tr {
                padding:.5em;
                display:flex;
                justify-content:space-between;
            }
        `}</style>
    </PageLayOut>
)

Board.getInitialProps = async ({ req }) => {
    const res = await fetch('http://localhost:3000/static/json/team.json')
    const json = await res.json()

    let entry = json.map(entry => entry)
    
    return { 
        json: entry
    }

}

export default Board