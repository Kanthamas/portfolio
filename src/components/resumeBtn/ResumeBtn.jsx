import resume from "../../assets/Kanthamas_Iamrhod_Resume_2022.pdf";
import "./resumeBtn2.scss";

const ResumeBtn = () => {
	return (
		<a href={resume} download={`Kanthamas_Iamrhod_Resume_2022.pdf`}>
			<button className='btn btn-resume'></button>
		</a>
	);
};

export default ResumeBtn;
