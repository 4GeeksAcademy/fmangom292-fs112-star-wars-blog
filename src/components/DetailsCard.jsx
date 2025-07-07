export const DetailsCard = ({id, name, text, details}) => {
    //console.log("DetailsCard rendered with name:", name, "and details:", details);
    
    return (
        <div className="card" style={{"minWidth": "18rem"}}>
            <img src="https://placehold.co/600x400" className="card-img-top" alt="..."/>
                <div className="card-body ">
                    <h3>{name}</h3>
                    <p className="text-start">{text}</p>
                    <ul className="list-group list-group-flush " style={{"textDecoration": "none"}}>
                        {details.map((detail, index) => (
                            <li key={index} className="list-group-item text-start">{detail}</li>
                        ))}
                    </ul>
                    <button className="btn btn-primary">Go details</button>
                </div>
        </div>
    )
}