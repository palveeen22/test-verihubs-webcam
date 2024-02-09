import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { Button } from "./ui/button";
import { Cloudinary } from "@cloudinary/url-gen";
import { Effect } from "@cloudinary/url-gen/actions/effect";
import { artisticFilter } from "@cloudinary/url-gen/actions/effect";

const videoConstraints = {
	width: 720,
	height: 360,
	facingMode: "user",
};

const WebcamCapture: React.FC = () => {
	const webcamRef = useRef<Webcam>(null);
	const [image, setImage] = useState<string>();
	const [mirrored, setMirrored] = useState<boolean>(false);
	const [prevURL, setPrevURL] = useState<string>("");

	const [filter, setFilter] = useState<string>("");

	const capture = useCallback(() => {
		const imageSrc = webcamRef.current?.getScreenshot();
		setImage(imageSrc ?? "");
	}, [webcamRef]);

	// if (filter) {
	// 	cloudIma
	// }

	const ART_FILTERS: string[] = [
		"none",
		"artistic",
		"sepia",
		"cartoonify",
		"vignette",
		"oilpaint",
		"grayscale",
		"vectorize",
		"pixelate",
	];

	function applyFilter(filter: string, image: any) {
		switch (filter) {
			case "artistic":
				return image.effect(Effect.artisticFilter("fes"));
			case "sepia":
				return image.effect(Effect.sepia());
			case "cartoonify":
				return image.effect(Effect.cartoonify());
			case "vignette":
				return image.effect(Effect.vignette());
			case "oilpaint":
				return image.effect(Effect.oilPaint());
			case "grayscale":
				return image.effect(Effect.grayscale());
			case "vectorize":
				return image.effect(Effect.vectorize());
			case "pixelate":
				return image.effect(Effect.pixelate());
			default:
				return image;
		}
	}

	// function FilterItem({ imgId, setPrevURL, filterName }) {
	// 	let image = cld.image(imgId);
	// 	image = applyFilter(filterName, image);
	// 	const imgURL = image.toURL();
	// 	return (
	// 		<div className="filter_item" onClick={() => setPrevURL(imgURL)}>
	// 			<img src={imgURL} alt="" />
	// 			<span className="filter_des">{filterName}</span>
	// 		</div>
	// 	);
	// }

	// const ART_FILTERS: string[] = [
	// 	"al_dente",
	// 	"athena",
	// 	"audrey",
	// 	"aurora",
	// 	"daguerre",
	// 	"eucalyptus",
	// 	"fes",
	// 	"frost",
	// 	"hairspray",
	// 	"hokusai",
	// 	"incognito",
	// 	"linen",
	// 	"peacock",
	// 	"primavera",
	// 	"quartz",
	// 	"red_rock",
	// 	"refresh",
	// 	"sizzle",
	// 	"sonnet",
	// 	"ukulele",
	// 	"zorro",
	// ];

	return (
		<div className="paddingY bg-[#282828] flex flex-col items-center gap-4 mx-auto min-h-screen">
			{/* <Webcam
				audio={false}
				height={360}
				ref={webcamRef}
				screenshotFormat="image/jpeg"
				width={720}
				mirrored={mirrored}
				videoConstraints={videoConstraints}
				className="rounded-md"
			/> */}
			<div className="flex gap-2 items-center mt-3">
				<Button
					onClick={capture}
					variant="outline"
					className=" bg-blue-500 hover:bg-blue-700"
				>
					Capture
				</Button>
				<Button onClick={() => setImage(undefined)} variant="destructive">
					Reset
				</Button>
			</div>
			<div className="controls">
				<div>
					<input
						type="checkbox"
						checked={mirrored}
						onChange={(e) => setMirrored(e.target.checked)}
					/>
					<label>Mirror</label>
				</div>
			</div>
			<div className="grid grid-cols-4 gap-4">
				{ART_FILTERS.map((art) => {
					return (
						<div key={art}>
							<Button
								onClick={() => setFilter(art)}
								className=" bg-blue-500 hover:bg-blue-700"
							>
								{art}
							</Button>
						</div>
					);
				})}

				{/* <>
					{ART_FILTERS.map((filter, index) => (
						<FilterItem
							imgId={id}
							filterName={filter}
							setPrevURL={setPrevURL}
							key={index}
						/>
					))}
				</> */}
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
