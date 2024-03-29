import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { Icon } from "@iconify/react";
import WebcamWithEffects from "./WebcamWithEffects";

const videoConstraints = {
	width: 720,
	height: 360,
	facingMode: "user",
};

const WebcamCapture: React.FC = () => {
	const webcamRef = useRef<Webcam>(null);
	const [image, setImage] = useState<string>();
	const [mirrored, setMirrored] = useState<boolean>(false);
	const [filter, setFilter] = useState<boolean>(false);

	const capture = useCallback(() => {
		const imageSrc = webcamRef.current?.getScreenshot();
		setImage(imageSrc ?? "");
	}, [webcamRef]);

	const handleToogleFilter = () => {
		setFilter(true);
	};

	return (
		<div className="paddingX bg-[#282828] flex flex-col items-center gap-4 mx-auto min-h-screen">
			{filter ? (
				<WebcamWithEffects />
			) : (
				<>
					<Webcam
						audio={false}
						height={3000}
						ref={webcamRef}
						screenshotFormat="image/jpeg"
						width={3000}
						mirrored={mirrored}
						videoConstraints={videoConstraints}
						className="rounded-md relative"
					/>
					<div className="absolute bottom-52 flex justify-around w-full">
						{/* <div className="flex gap-2 items-center mt-3"> */}
						<button
							onClick={() => setImage(undefined)}
							className="bg-pink-600 px-6 py-1 rounded-md shadow-md text-white text-xl"
						>
							Reset
						</button>
						<div className="bg-pink-600 px-6 py-1 rounded-md shadow-md text-white text-xl flex justify-center gap-5 items-center">
							<input
								type="checkbox"
								checked={mirrored}
								onChange={(e) => setMirrored(e.target.checked)}
								className="cursor-pointer"
							/>
							<label>Mirror</label>
						</div>
						<button
							onClick={handleToogleFilter}
							className="bg-pink-600 px-6 py-1 rounded-md shadow-md text-white text-xl"
						>
							filter
						</button>

						{/* <div className="grid grid-cols-4 gap-4">
					{filters.map((art) => {
						return (
							<div key={art}>
								<button
									// onClick={() => setFilter(art)}
									className=" bg-blue-500 hover:bg-blue-700"
								>
									{art}
								</button>
							</div>
						);
					})}
				</div> */}
						<button
							onClick={capture}
							className="bg-pink-600 px-6 py-1 rounded-md shadow-md"
						>
							<Icon icon="heroicons:camera-16-solid" width={40} color="#fff" />
						</button>
					</div>

					{image && (
						<img
							src={image}
							alt="Captured"
							className="mt-3 border-teal-500 border-4 rounded-md"
						/>
					)}
				</>
			)}
		</div>
	);
};

export default WebcamCapture;
