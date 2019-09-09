import Header from './Header'

const PageLayOut = props => (
    <div className="pageBody">
        <Header title={props.pageTitle} />
        <h1>{props.pageHeadline}</h1>
        {props.children}
        <style jsx>{`
            .pageBody {
                max-width:92%;
                margin:auto;
            }
            @media(min-width:767px) {
                .pageBody {
                    display:flex;
                    justify-content:space-between;
                    flex-wrap:wrap;
                }
                h1 {
                    width:100%;
                }
            }
        `}</style>
    </div>
)


export default PageLayOut;