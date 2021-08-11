import { useState, useEffect } from 'react';

import "./../scss/porfolio.scss";
import PorfolioProject from "./PorfolioProject";
import * as Project from "./../shared/project";

function Porfolio() {
	const [isSelectedProject, setSelectedProject] = useState("cdio");
	const [data, setData] = useState([]);

	const project = [
		{
			id: "cdio",
			title: "CDIO"
		},
		{
			id: "recruit",
			title: "Tuyển Quân"
		},
		{
			id: "vvnt",
			title: "Về Với Ngoại Thành"
		},
		{
			id: "vtna",
			title: "Vòng Tay Nhân Ái"
		}
	];

	useEffect(() => {
		switch(isSelectedProject) {
			case "cdio":
				setData(Project.cdio);
				break;
			case "recruit":
				setData(Project.recruit);
				break;
			case "vvnt":
				setData(Project.vvnt);
				break;
			case "vtna":
				setData(Project.vtna);
				break;
			default:
				break;
		}
	}, [isSelectedProject]);

	return (
		<div className="porfolio" id="porfolio">
			<h1>Hoạt Động</h1>

			<div className="porfolio__header">
				<ul>
					{ project.map(item => (
						<PorfolioProject 
							id={item.id}
							key={item.id} 
							title={item.title} 
							active={isSelectedProject === item.id} 
							setSelected={setSelectedProject}
						/>
					))}
				</ul>
			</div>

			<div className="porfolio__content">
				{data.map( item => (
					<div key={item.id} className="porfolio__item">
						<img src={item.img} alt={item.title} />
						<h3>{item.title}</h3>
					</div>
				))}
				
			</div>
		</div>
	);
}

export default Porfolio;