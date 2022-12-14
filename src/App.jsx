import Topbar from "./topbar/Topbar";
import SideMenu from "./sideMenu/SideMenu";
import Intro from "./intro/Intro";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";

import "./app.scss";
import { useState } from "react";

function App() {
	const [menuActive, setMenuActive] = useState(false);

	return (
		<div className='app'>
			<Topbar menuActive={menuActive} setMenuActive={setMenuActive} />
			<SideMenu menuActive={menuActive} setMenuActive={setMenuActive} />
			<div className='sections'>
				<Intro />
				<About />
				<Portfolio />
				<Contact />
			</div>
		</div>
	);
}

export default App;
