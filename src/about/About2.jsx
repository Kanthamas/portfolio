import "./about.scss";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const About = () => {
	return (
		<section className='about section'>
			<h2 className='section_title'>{`<About_Me />`}</h2>

			<div className='about_container container'>
				<div className='about_tabs'>
					<div className='about_btn about_active btn--flex'>
						<span className='about_icon grad_icon '>
							<FaGraduationCap /> Education
						</span>
					</div>

					<div className='about_btn about_active btn--flex'>
						<span className='about_icon work_icon'>
							<FaBriefcase /> Experience
						</span>
					</div>
				</div>

				<div className='about_sections'>
					<div className='about_content about_content-active'>
						<div className='about_data'>
							<div>
								<h3 className='about_title'>Web Design</h3>
								<span className='about_subtitle'>Spain - Institute</span>
								<div className='about_calender'>
									<span>
										<FaCalendarAlt /> 2021 - Present
									</span>
								</div>
							</div>

							<div>
								<span className='about_rounder'></span>
								<span className='about_line'></span>
							</div>
						</div>

						<div className='about_data'>
							<div></div>
							<div>
								<span className='about_rounder'></span>
								<span className='about_line'></span>
							</div>
							<div>
								<h3 className='about_title'>Art Director</h3>
								<span className='about_subtitle'>Spain - Institute</span>
								<div className='about_calender'>
									<span>
										<FaCalendarAlt /> 2021 - 2020
									</span>
								</div>
							</div>
						</div>

						<div className='about_data'>
							<div>
								<h3 className='about_title'>Web Development</h3>
								<span className='about_subtitle'>Spain - Institute</span>
								<div className='about_calender'>
									<span>
										<FaCalendarAlt /> 2018 - 2020
									</span>
								</div>
							</div>

							<div>
								<span className='about_rounder'></span>
								<span className='about_line'></span>
							</div>
						</div>

						<div className='about_data'>
							<div></div>
							<div>
								<span className='about_rounder'></span>
								<span className='about_line'></span>
							</div>
							<div>
								<h3 className='about_title'>UX Expert</h3>
								<span className='about_subtitle'>Spain - Institute</span>
								<div className='about_calender'>
									<span>
										<FaCalendarAlt /> 2017 - 2018
									</span>
								</div>
							</div>
						</div>
					</div>

					<div className='about_content'>
						<div className='about_data'>
							<div>
								<h3 className='about_title'>Product Designer</h3>
								<span className='about_subtitle'>Microsoft - Spain</span>
								<div className='about_calender'>
									<span>
										<FaCalendarAlt /> 2021 - Present
									</span>
								</div>
							</div>

							<div>
								<span className='about_rounder'></span>
								<span className='about_line'></span>
							</div>
						</div>

						<div className='about_data'>
							<div></div>
							<div>
								<span className='about_rounder'></span>
								<span className='about_line'></span>
							</div>
							<div>
								<h3 className='about_title'>UX Designer</h3>
								<span className='about_subtitle'>Apple Inc - Spain</span>
								<div className='about_calender'>
									<span>
										<FaCalendarAlt /> 2021 - 2020
									</span>
								</div>
							</div>
						</div>

						<div className='about_data'>
							<div>
								<h3 className='about_title'>Web Designer</h3>
								<span className='about_subtitle'>Figma - Spain</span>
								<div className='about_calender'>
									<span>
										<FaCalendarAlt /> 2018 - 2020
									</span>
								</div>
							</div>

							<div>
								<span className='about_rounder'></span>
								<span className='about_line'></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
