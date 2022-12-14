import "./contactCard.scss";
import emailjs from "emailjs-com";
import React, { useRef } from "react";

const ContactCard = () => {
	const form = useRef();

	const sendEmail = (event) => {
		event.preventDefault();

		emailjs
			.sendForm(
				"service_q2e8pp4",
				"template_0mqlw7w",
				form.current,
				"YsRiJv1uJIAyB9vFn"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		event.target.reset();
	};
	return (
		<div className='contact-card' id='contact-card'>
			<form ref={form} onSubmit={sendEmail}>
				<div className='input-box'>
					<input type='text' name='name' />
					<span>Name</span>
				</div>
				<div className='input-box'>
					<input type='email' name='email' />
					<span>Email</span>
				</div>
				<div className='input-box'>
					<input type='text' name='subject' />
					<span>Subject</span>
				</div>
				<div className='input-box'>
					<textarea name='message' rows='7' cols='33' />
					<span>Message</span>
				</div>

				<input className='btn-submit' type='submit' value='SUBMIT' />
			</form>
		</div>
	);
};

export default ContactCard;
