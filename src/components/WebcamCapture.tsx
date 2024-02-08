import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { Button } from "./ui/button";

const videoConstraints = {
	width: 720,
	height: 360,
	facingMode: "user",
};

const WebcamCapture: React.FC = () => {
	const webcamRef = useRef<Webcam>(null);
	const [image, setImage] = useState<string>();
	const [mirrored, setMirrored] = useState<boolean>(false);

	const capture = useCallback(() => {
		const imageSrc = webcamRef.current?.getScreenshot();
		setImage(imageSrc ?? "");
	}, [webcamRef]);

	return (
		<div className="paddingY bg-[#282828] flex flex-col items-center gap-4 mx-auto min-h-screen">
			<Webcam
				audio={false}
				height={360}
				ref={webcamRef}
				screenshotFormat="image/jpeg"
				width={720}
				mirrored={mirrored}
				videoConstraints={videoConstraints}
				className="rounded-md"
			/>
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
