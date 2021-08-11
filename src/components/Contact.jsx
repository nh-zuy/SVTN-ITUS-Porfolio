import { useState } from "react";
import "./../scss/contact.scss";

function Contact() {
	const [message, setMessage] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setMessage(true);
	};
	return (
		<div className="contact" id="contact">
			<div className="contact__img">
				<img src="assets/shake.svg" alt="" />
			</div>

			<div className="contact__form">
				<h1>Liên Hệ</h1>
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Email" required/>
					<textarea placeholder="Lời nhắn" required></textarea>
					<button type="submit">Gửi</button>
					{message && <span>Cảm ơn đã liên hệ @@</span>}
				</form>
			</div>
		</div>
	);
}

export default Contact;