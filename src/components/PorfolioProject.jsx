import "./../scss/porfolio-project.scss";

function PorfolioProject({id, title, active, setSelected}) {
	return (
		<li className={"porfolio__project " + (active && "active")} onClick={() => setSelected(id)}>
			{title}
		</li>
	);
}

export default PorfolioProject;