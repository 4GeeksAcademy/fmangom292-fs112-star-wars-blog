import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Details = () => {
    const { id, category } = useParams();
    const [detail, setDetail] = useState();
    const { store, dispatch } = useGlobalReducer()

    function getData() {
        const apiUrl = "https://www.swapi.tech/api/";
        const url = `${apiUrl}${category}/${id}`;
        console.log("Fetching data from:", url);
        
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.result);
                setDetail(data.result);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }

    useEffect(() => {
        getData(category);
    },[]);

    return (
        <div className="container">
            <div className="row">
                <h1>Details {detail?.properties.name || ""}</h1>
            </div>
            <div className="row">
                <div className="col-md-6 col-xs-12">
                    <img src="https://placehold.co/600x400" className="card-img-top" alt="..." />
                </div>
                <div className="col-md-6 col-xs-12">
                    <p>{detail?.description}</p>
                </div>
            </div>
        </div>
    )
}