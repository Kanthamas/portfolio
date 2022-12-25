import resume from "../../assets/Kanthamas_Iamrhod_Resume.pdf";
import "./resumeBtn2.scss";

const ResumeBtn = () => {
	return (
		<a href={resume} download={`Kanthamas_Iamrhod_Resume.pdf`}>
			<button className='btn btn-resume'></button>
		</a>
	);
};

export default ResumeBtn;
