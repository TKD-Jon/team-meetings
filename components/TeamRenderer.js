import DotDotDot from '../components/DotDotDot'

const TeamRenderer = (props) => {
    return (
        <div id={props.member.name} className="teamMember" key={props.member.name}>
            <h2 className="teamName">{props.member.person.name}</h2>
            <table>
                <thead>
                    <th>Projects:</th>
                </thead>
                <tbody>
                    {props.member.person.projects.map(project => (
                        <tr key={project} id={project} draggable="true">
                            {props.projects.map(test => (
                                (test.projectID == project ? test.projectDetail.name : null)
                            ))}
                            <DotDotDot projectID={project} />
                        </tr>
                    ))}
                </tbody>
            </table>
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
        </div>
    )
}

export default TeamRenderer;