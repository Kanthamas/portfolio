import "./contact.scss";
import ContactCard from "../components/contactCard/ContactCard";
import ResumeBtn from "../components/resumeBtn/ResumeBtn";
const Contact = () => {
	return (
		<div className='contact ' id='contact'>
			<div className='contact-container'>
				<h1>{`<Contact />`}</h1>

				<div className='wrapper'>
					<div className='left-text'>
						<div className='text'>
							<h2>Thank you for visiting me</h2>
							<h3>Please feel free to email me for more details</h3>
							<p>-- Kanthamas --</p>
						</div>
						<div className='btn'>
							<ResumeBtn />
						</div>
					</div>

					<ContactCard className='contactCard' />
				</div>
			</div>
		</div>
	);
};

export default Contact;
