import resume from "../../assets/Kanthamas_Iamrhod_Resume_2023.pdf";
import "./resumeBtn2.scss";

const ResumeBtn = () => {
	return (
		<a href={resume} download={`Kanthamas_Iamrhod_Resume.pdf`}>
			<button className='btn-resume'></button>
		</a>
	);
};

export default ResumeBtn;
