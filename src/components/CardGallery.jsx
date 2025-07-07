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
								cards.map((card, index) => {
									//console.log(card);
									
									return (
										<DetailsCard
											id={card.uid}
											key={index}
											name={card.name}
											text={"Some quick example text to build on the card title and make up the bulk of the card's content."}
											details={[
												`Height: ${card.height}`,
												`Mass: ${card.mass}`,
												`Hair Color: ${card.hair_color}`,
												`Skin Color: ${card.skin_color}`,
											]}
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