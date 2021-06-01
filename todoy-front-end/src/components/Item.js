const Item = (props) => {
    return (
        <div className="card white darken-1">
            <div className="card-content black-text">
                <span className="card-title activator left-align">{props.title}<i className="material-icons right">more_vert</i></span>
                    <div>
                        <span className="left"><p>{props.category}</p></span>
                        <span className="right"><p>{props.state}</p></span>
                        <br/>
                    </div>
            </div>
            <div class="card-reveal">
                <span className="card-title grey-text text-darken-4">
                    <i class="material-icons right">close</i>
                </span>
                <p>Edit or delete your todo item.</p>
                <div className="row">
                    <div className="col s6"><ButtonComponentOfTodoItem type="edit" /></div>
                    <div className="col s6"><ButtonComponentOfTodoItem type="delete" color="red"/></div>
                </div>
            </div>
        </div>
    )
}

const ButtonComponentOfTodoItem = (button) => {
    let className = "btn-floating waves-effect waves-light btn-small ";
    if(button.color) {
        className += button.color
    } else {
        className += "green"
    }
    return (
        <>
            <a className={className}>
                <i className="material-icons right">
                    {button.type}
                </i>
            </a>
        </>);
}

export default Item;