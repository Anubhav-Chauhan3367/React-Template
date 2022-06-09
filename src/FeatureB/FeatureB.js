import Photo1 from "../images/photo1.jpeg";
import Photo2 from "../images/photo2.jpeg";
import Photo3 from "../images/photo3.jpeg";

const url = "";
const FeatureB = () => {
	return (
		<section className="contact bg-success">
			<div className="container">
				<h2 className="text-white">We love new friends!</h2>
				<div className="row">
					<div className="col-4">
						<div className="card" style={{ width: "18rem" }}>
							<img
								src={Photo1}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<a className="btn btn-success" href={url}>
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="card" style={{ width: "18rem" }}>
							<img
								src={Photo2}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<a className="btn btn-success" href={url}>
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="card" style={{ width: "18rem" }}>
							<img
								src={Photo3}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<a className="btn btn-success" href={url}>
									Go somewhere
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeatureB;
