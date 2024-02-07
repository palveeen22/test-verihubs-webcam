import { useState } from "react";

import "./App.css";
import CustomWebcam from "./components/CustomWebcam";

function App() {
	const [isActive, setIsActive] = useState(false as Boolean);
	return (
		<>
			<div className="App">
				<button
					onClick={() => {
						setIsActive(true);
					}}
				></button>
				{isActive ? <CustomWebcam /> : ""}
			</div>
		</>
	);
}

export default App;
