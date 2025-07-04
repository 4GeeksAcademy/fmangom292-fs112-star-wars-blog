export const DetailsCard = (props) => {

    const { title, text, details } = props;
    //console.log(props);
    
    return (
        <div className="card" style={{"width": "18rem"}}>
            <img src="https://placehold.co/600x400" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p>{text}</p>
                    <ul className="list-group list-group-flush" style={{"textDecoration": "none"}}>
                        {details.map((detail, index) => (
                            <li key={index} className="list-group-item">{detail}</li>
                        ))}
                    </ul>
                </div>
        </div>
    )
}