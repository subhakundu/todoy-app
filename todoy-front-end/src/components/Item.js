const Item = (props) => {
    return (
        <div className="card white darken-1">
            <div className="card-content black-text">
                <span className="card-title left-align">{props.title}<i className="material-icons right">more_vert</i></span>
                    <div>
                        <span className="left"><p>{props.category}</p></span>
                        <span className="right"><p>{props.state}</p></span>
                        <br/>
                    </div>
            </div>
        </div>
    )
}

export default Item;