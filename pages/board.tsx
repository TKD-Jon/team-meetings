import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Board = props => (
    <div>
        <h1>Welcome to the Board page.</h1>
        <ul>
            {props.json.map(teamMember => (
                <li key={teamMember.name}>
                    <h2>{teamMember.person.name}</h2>
                    <b>Projects:</b>
                    {teamMember.person.projects.map(project => (
                        <li key={project}>
                            {project}
                        </li>
                    ))}
                </li>
            ))}
        </ul>

    </div>
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