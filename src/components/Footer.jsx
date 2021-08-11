import "./../scss/footer.scss";

function Footer() {
	return (
		<footer className="footer" id="footer">
			<div className="footer__header">
				<div className="footer__info">

				<div className="footer__brand">
					<img src="assets/logoSVTN.png" alt="logo" /> 
					<h1>Đội Sinh Viên Tình Nguyện</h1>
				</div>
				
				<h3>Trụ sở: <span>Trường Đại học Khoa học Tự nhiên, đại học Quốc gia, thành phố Hồ Chí Minh</span></h3>
				<h3>Đại điểm 1: <span>Linh Trung, Thủ Đức</span></h3>
				<h3>Địa điểm 2: <span>Nguyễn Văn Cừ, Quận 5</span></h3>
				<h3>Email: <span>bcn.doisvtn.itus@gmail.com</span></h3>
				<h3>Phone: <span>113</span></h3>
			</div>

			<div className="footer__map">
				<iframe 
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6307047611717!2d106.67998301472184!3d10.762918262386181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c06f4e1dd%3A0x43900f1d4539a3d!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaG9hIGjhu41jIFThu7Egbmhpw6puIC0gxJDhuqFpIGjhu41jIFF14buRYyBHaWEgVFAuSENN!5e0!3m2!1svi!2s!4v1628649375706!5m2!1svi!2s" 
					width="600" height="450" allowFullScreen="" 
					loading="lazy">
				</iframe>
			</div>
			</div>

			<div className="footer__license">
				<p>License by @bcn.doisvtn.itus@gmail.com - 11/08/2021</p>
			</div>
		</footer>
	);
}

export default Footer;	