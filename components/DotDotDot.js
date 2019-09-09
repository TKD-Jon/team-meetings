function deleteItem() {
    alert(`Pretend I'm not here`)
}

const DotDotDot = props => (
    <div className="pageBody">
        <div className="utilitiesContainer">
            <div className="dotdotdot">
                <span className="circle one">1</span>
                <span className="circle two">2</span>
                <span className="circle three">3</span>
            </div>
            <div className="utilities">
                <button onClick={deleteItem}>Delete</button>
            </div>
        </div>
        {props.children}
        <style jsx>{`
            .utilitiesContainer {
                position:relative;
            }
            .dotdotdot {
                display:flex;
                flex-direction:column;
                justify-content:spece-between;
            }
            .circle {
                width:.11em;
                height:.11em;
                padding:.11em;
                margin-bottom:.11em;
                color:transparent;
                user-select:none;
                border-radius:100%;
                background:rgba(0,0,0,.25);
            }
            .utilities {
                position:absolute;
                padding:1em;
                background:white;
                left:50%;
                top:100%;
                transform:translateX(-50%);
                opacity:0;
                transition:500ms;
                user-select:none;
                border-radius:.3em;
                border:1px solid rgba(0,0,0,.05);
                z-index:0;
                display:none;
            }
            .utilitiesContainer:hover .circle {
                background:rgba(0,0,0,.75);
            }
            .utilitiesContainer:hover .utilities {
                opacity:1;
                user-select:unset;
                z-index:999;
                display: block;
            }
        `}</style>
    </div>
)


export default DotDotDot;