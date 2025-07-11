import { DetailsCard } from "./DetailsCard"

export const CardGallery = ({title, cards, destination}) => {
    //console.log("DetailsCard rendered with name:", name, "and details:", details);
    
    return (
		<div className="container-fluid text-center mt-5">
			<div className="container">
				<div className="row text-start mb-4">
					<h4>{title}</h4>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="d-flex gap-3 flex-nowrap overflow-x-scroll">
							{
								cards.map(({properties, uid} = card, index) => {
									//console.log(card);
									const propertiesKeys = Object.keys(properties);
									const cleanPropertiesKeys = propertiesKeys.map((key) => {
										return key.replace(/_/g, " ").replace(/([a-z])([A-Z])/g, '$1 $2');
									});



									let details = [];
									for (let index = 2; index < 6; index++) {
										details.push(cleanPropertiesKeys[index] + ": " + properties[propertiesKeys[index]]);	
									}
										
									
									return (
										<DetailsCard
											id={uid}
											key={index}
											name={properties.name}
											text={"Some quick example text to build on the card title and make up the bulk of the card's content."}
											details={details}
											destination={destination}
										/>
									)
								})
							}							
						</div>

					</div>
				</div>
			</div>
		</div>

    )
}