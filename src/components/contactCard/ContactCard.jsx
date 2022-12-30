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
					<input className='input-text' type='text' name='name' required/>
					<span className='span-text'>Name</span>
				</div>
				<div className='input-box'>
					<input className='input-text' type='email' name='email' required/>
					<span className='span-text'>Email</span>
				</div>
				<div className='input-box'>
					<input className='input-text' type='text' name='subject' required/>
					<span className='span-text'>Subject</span>
				</div>
				<div className='input-box'>
					<textarea className='input-text' name='message' rows='8' cols='35' required/>
					<span className='span-text'>Message</span>
				</div>

				<input className='btn-submit' type='submit' value='SUBMIT' />
			</form>
		</div>
	);
};

export default ContactCard;
