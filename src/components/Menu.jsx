import "./../scss/menu.scss";

function Menu({isMenuOpen, setMenuOpen}) {
	return (
		<div className={"menu " + (isMenuOpen && "menu--active") }>
			<ul>
				<li onClick={() => setMenuOpen(!isMenuOpen)}><a href="#header">Giới Thiệu</a></li>
				<li onClick={() => setMenuOpen(!isMenuOpen)}><a href="#porfolio">Hoạt Động</a></li>
				<li onClick={() => setMenuOpen(!isMenuOpen)}><a href="#carousel">Mô Tả</a></li>
				<li onClick={() => setMenuOpen(!isMenuOpen)}><a href="#testimonial">Cảm Nghĩ</a></li>
				<li onClick={() => setMenuOpen(!isMenuOpen)}><a href="#contact">Liên Hệ</a></li>
				<li onClick={() => setMenuOpen(!isMenuOpen)}><a href="#footer">Tìm hiểu...</a></li>
			</ul>
		</div>
	);
}

export default Menu;