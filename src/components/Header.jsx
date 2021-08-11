import "./../scss/header.scss";

function Header() {
	return (
		<div className="header" id="header">
			<div className="header__banner">
				<div className="header__img">
					<img src="assets/doi.jpg" alt="Banner" />
				</div>
			</div>

			<div className="header__info">
				<div className="container-fluid">
					<h1>Đội Sinh Viên Tình Nguyện</h1>
					<p>Khoa CNTT, trường Đại học Khoa học Tự Nhiên, HCMC</p>
				</div>
			</div>
		</div>
	);
}

export default Header;