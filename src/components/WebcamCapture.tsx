import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { Icon } from "@iconify/react";
import { pixelate } from "@cloudinary/url-gen/actions/effect";
import { CloudinaryImage } from "@cloudinary/url-gen";

// import { Effect } from "@cloudinary/url-gen/actions/effect";
// import { artisticFilter } from "@cloudinary/url-gen/actions/effect";
// import { Cloudinary } from "@cloudinary/url-gen";

const videoConstraints = {
	width: 720,
	height: 360,
	facingMode: "user",
};

const WebcamCapture: React.FC = () => {
	const webcamRef = useRef<Webcam>(null);
	const [image, setImage] = useState<string>();
	const [mirrored, setMirrored] = useState<boolean>(false);
	// const [prevURL, setPrevURL] = useState<string>("");
	// const [id, setId] = useState<string>("");

	// const [filter, setFilter] = useState<string>("");

	const capture = useCallback(() => {
		const imageSrc = webcamRef.current?.getScreenshot();
		setImage(imageSrc ?? "");
	}, [webcamRef]);

	// const cloudinary = new Cloudinary({ cloud: { cloudName: "dgwxqtnvz" } });

	// const filters: string[] = [
	// 	"none",
	// 	"artistic",
	// 	"sepia",
	// 	"cartoonify",
	// 	"vignette",
	// 	"oilpaint",
	// 	"grayscale",
	// 	"vectorize",
	// 	"pixelate",
	// ];

	// function applyFilter(filter: string, image: any) {
	// 	switch (filter) {
	// 		case "artistic":
	// 			return image.effect(Effect.artisticFilter("fes"));
	// 		case "sepia":
	// 			return image.effect(Effect.sepia());
	// 		case "cartoonify":
	// 			return image.effect(Effect.cartoonify());
	// 		case "vignette":
	// 			return image.effect(Effect.vignette());
	// 		case "oilpaint":
	// 			return image.effect(Effect.oilPaint());
	// 		case "grayscale":
	// 			return image.effect(Effect.grayscale());
	// 		case "vectorize":
	// 			return image.effect(Effect.vectorize());
	// 		case "pixelate":
	// 			return image.effect(Effect.pixelate());
	// 		default:
	// 			return image;
	// 	}
	// }

	// function FilterItem({ imgId, setPrevURL, filterName }) {
	// 	let image = cloudinary.image(imgId);
	// 	image = applyFilter(filterName, image);
	// 	const imgURL = image.toURL();
	// 	return (
	// 		<div className="filter_item" onClick={() => setPrevURL(imgURL)}>
	// 			<img src={imgURL} alt="" />
	// 			<span className="filter_des">{filterName}</span>
	// 		</div>
	// 	);
	// }

	if (image) {
		new CloudinaryImage(image).effect(pixelate().squareSize(20));
	}

	return (
		<div className="paddingX bg-[#282828] flex flex-col items-center gap-4 mx-auto min-h-screen">
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
		</div>
	);
};

export default WebcamCapture;
