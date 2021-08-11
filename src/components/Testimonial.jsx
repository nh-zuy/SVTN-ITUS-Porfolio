import "./../scss/testimonial.scss";
import { testimonials } from "./../shared/testimonials.js";

function Testimonial() {
	return (
		<div className="testimonial" id="testimonial">
			<h1>Cảm Nghĩ</h1>

			<div className="container">
				{testimonials.map((d) => (
					<div key={d.id} className={d.featured ? "card featured" : "card"}>
						<div className="card__header">
							<img src="assets/right-arrow.png" className="left" alt="" />
							<img
								className="user"
								src={d.img}
								alt=""
							/>
							<img className="right" src={d.icon} alt="" />
						</div>

						<div className="card__content">
							{d.desc}
						</div>

						<div className="card__footer">
							<h3>{d.name}</h3>
							<h4>{d.title}</h4>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Testimonial;