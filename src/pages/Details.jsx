import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Details = () => {
    const { id, category } = useParams();
    const [details, setDetail] = useState();
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
    }, []);

    return (
        <div className="container">
            <div className="row">

            </div>
            <div className="row">
                <div className="col-md-6 col-xs-12">
                    <img src="https://placehold.co/600x400" className="card-img-top" alt="..." />
                </div>
                <div className="col-md-6 col-xs-12 text-center">
                    <h1>{details?.properties.name || ""}</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque deleniti libero veritatis fuga quibusdam mollitia, odio, possimus labore quia temporibus molestiae exercitationem sit sapiente aperiam dicta non unde, dignissimos enim!
                        Esse nulla facilis sequi nam illo laborum aliquam! Numquam dolorem vel illum et corporis ea ipsam placeat assumenda aut consectetur, at nisi temporibus ut laborum voluptatem laudantium sint quidem? Dolore.
                    </p>
                </div>
            </div>
            <hr />
            <div className="row">
                {category == "people" &&
                    <div className="d-flex flex-direction-row gap-5 justify-content-center">
                        <div>
                            <h5>Name</h5>
                            <p>{details?.properties.name}</p>
                        </div>
                        <div>
                            <h5>Birth</h5>
                            <p>{details?.properties.birth_year}</p>
                        </div>
                        <div>
                            <h5>Gender</h5>
                            <p>{details?.properties.birth_year}</p>
                        </div>
                        <div>
                            <h5>Birth</h5>
                            <p>{details?.properties.gender}</p>
                        </div>
                    </div>
                }
                {
                    category == 'planets' &&
                    <div className="d-flex flex-direction-row gap-5 justify-content-center">
                        <div>
                            <h5>Name</h5>
                            <p>{details?.properties.name}</p>
                        </div>
                        <div>
                            <h5>Climate</h5>
                            <p>{details?.properties.climate}</p>
                        </div>
                        <div>
                            <h5>Terrain</h5>
                            <p>{details?.properties.terrain}</p>
                        </div>
                        <div>
                            <h5>Diameter</h5>
                            <p>{details?.properties.diameter}</p>
                        </div>
                    </div>
                }
                {
                    category == 'vehicles' &&
                    <div className="d-flex flex-direction-row gap-5 justify-content-center">
                        <div>
                            <h5>Name</h5>
                            <p>{details?.properties.name}</p>
                        </div>
                        <div>
                            <h5>Model</h5>
                            <p>{details?.properties.model}</p>
                        </div>
                        <div>
                            <h5>Passengers</h5>
                            <p>{details?.properties.passengers}</p>
                        </div>
                        <div>
                            <h5>Cost in credits</h5>
                            <p>{details?.properties.cost_in_credits}</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}