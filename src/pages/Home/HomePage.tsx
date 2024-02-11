import { useState } from "react";
import { Icon } from "@iconify/react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import WebcamCapture from "../../components/WebcamCapture";
import WebcamWithEffects from "../../components/WebcamWithEffects";

const HomePage = () => {
	const [clicked, setClicked] = useState<boolean>(false);
	const [openCamera, setOpenCamera] = useState<boolean>(false);

	const handleActive = () => {
		setClicked(true);
	};

	const handleOpenCamera = () => {
		setOpenCamera(true);
	};
	return clicked ? (
		<>
			{openCamera ? (
				<>
					<Navbar />
					<WebcamCapture />

					{/* for using filters */}
					<WebcamWithEffects />
				</>
			) : (
				<>
					<Navbar />
					<div className="paddingX paddingY bg-[#282828] flex justify-around items-center w-full h-screen">
						<div className="flex flex-col text-center gap-8">
							<p className="text-[#fff] text-2xl">
								Press the button to access your camera:
							</p>
							<button
								onClick={handleOpenCamera}
								className="w-[50%] mx-auto px-4 py-4 bg-pink-600 flex items-center text-white text-base font-medium rounded-md mt-4 relative"
							>
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
			)}
		</>
	) : (
		<>
			<Navbar />
			<main className="paddingX bg-[#f4f5f7]">
				<div className="hidden md:block lg:block">
					<div className="flex justify-around items-center w-full min-h-screen">
						<div className="flex flex-col gap-4">
							<img
								src="https://webcamtoy.com/assets/photos/A6kgDQACYAAFRmC.jpg"
								alt="Side Decoration"
							/>
							<img
								src="https://webcamtoy.com/assets/photos/A6kgDQACYAAFRmC.jpg"
								alt="Side Decoration"
							/>
						</div>
						<div className="flex flex-col justify-center gap-2 items-center">
							<img
								src="https://webcamtoy.com/assets/images/title-mobile.png"
								alt="Webcam Toy"
							/>

							<p className="text-center">
								Take selfies with over 80 fun effects!
							</p>
							<div
								className="flex justify-start gap-2 w-[60%] md:w-[70%]  mx-auto  bg-pink-600 items-center
							text-white text-base font-medium rounded-md mt-4"
							>
								<div
									className="w-[25%] bg-pink-700 py-4 rounded-l-md

"
								>
									<Icon icon="fluent:ios-arrow-right-24-filled" width={30} />
								</div>
								<button onClick={handleActive}>
									<span className="text-xl font-normal">Ready? Smile!</span>
								</button>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<img
								src="https://webcamtoy.com/assets/photos/A5VlXQJCIAEpXh5.jpg"
								alt="Side Decoration"
							/>
							<img
								src="https://webcamtoy.com/assets/photos/A5VlXQJCIAEpXh5.jpg"
								alt="Side Decoration"
							/>
						</div>
					</div>
				</div>
				<div className="block md:hidden lg:hidden">
					<div className="flex justify-around items-center w-full min-h-screen">
						<div className="flex flex-col justify-center gap-2 items-center">
							<img
								src="https://webcamtoy.com/assets/images/title-mobile.png"
								alt="Webcam Toy"
							/>

							<p className="text-center">
								Take selfies with over 80 fun effects!
							</p>
							<div
								className="flex justify-start gap-2 w-[80%] mx-auto  bg-pink-600 items-center
							text-white text-base font-medium rounded-md mt-4 cursor-pointer"
							>
								<div
									className="w-[25%] bg-pink-700 py-4 rounded-l-md

"
								>
									<Icon icon="fluent:ios-arrow-right-24-filled" width={30} />
								</div>
								<button onClick={handleActive}>
									<span className="text-xl font-normal">Ready? Smile!</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default HomePage;
