import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const HomePage = () => {
	const [clicked, setClicked] = useState(false as boolean);

	const handleActive = () => {
		setClicked(true);
	};
	return clicked ? (
		<>
			<Navbar />
			<div className="paddingX paddingY bg-[#282828] flex justify-around items-center w-full h-screen">
				<div className="flex flex-col text-center gap-8">
					<p className="text-[#fff] text-2xl">
						Press the button to access your camera:
					</p>
					<button className="w-[50%] mx-auto px-4 py-4 bg-pink-600 flex items-center text-white text-base font-medium rounded-md mt-4 relative">
						<div className="absolute left-0 top-0 bottom-0 bg-pink-700 px-3 flex items-center justify-center rounded-l-md">
							{/* Make sure Icon is imported and used correctly */}
							<Icon icon="gridicons:video-camera" width={40} />
						</div>
						<span className="ml-16 text-xl font-normal">Use my camera</span>
					</button>
					<p className="text-[#ffffff96]">
						Photos are not stored online unless you choose to share them.
					</p>
				</div>
			</div>
		</>
	) : (
		<>
			<Navbar />
			<main className="paddingX paddingY flex justify-around items-center w-full bg-[#f4f5f7] h-screen">
				<img
					src="https://webcamtoy.com/assets/photos/A6kgDQACYAAFRmC.jpg"
					alt="Side Decoration"
				/>

				<div className="flex justify-center items-center gap-4">
					<div className="flex flex-col justify-center gap-2 items-center">
						<img
							src="https://webcamtoy.com/assets/images/title-mobile.png"
							alt="Webcam Toy"
						/>

						<p className="text-center">
							Take selfies with over 80 fun effects!
						</p>

						<button
							onClick={handleActive}
							className="w-[80%] mx-auto px-4 py-5 bg-pink-600 flex items-center text-white text-base font-medium rounded-md mt-4 relative"
						>
							<div className="absolute left-0 top-0 bottom-0 bg-pink-700 px-3 flex items-center justify-center rounded-l-md">
								{/* Make sure Icon is imported and used correctly */}
								<Icon icon="fluent:ios-arrow-right-24-filled" width={30} />
							</div>
							<span className="ml-12 text-xl font-normal">Ready? Smile!</span>
						</button>
					</div>
				</div>

				<img
					src="https://webcamtoy.com/assets/photos/A6kgDQACYAAFRmC.jpg"
					alt="Side Decoration"
				/>
			</main>
			<Footer />
		</>
	);
};

export default HomePage;
