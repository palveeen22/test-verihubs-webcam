import { useState, useEffect, useRef } from "react";
import p5 from "p5";

const WebcamWithEffects: React.FC = () => {
	const sketchRef = useRef<HTMLDivElement>(null);
	const [invert, setInvert] = useState<boolean>(false);

	useEffect(() => {
		if (sketchRef.current) {
			const sketch = (p: p5) => {
				let capture: p5.Element;

				p.setup = () => {
					// Set canvas to full window size
					p.createCanvas(window.innerWidth, window.innerHeight);
					// @ts-ignore
					capture = p.createCapture(p.VIDEO);
					// Set capture size to full window size for consistency
					capture.size(window.innerWidth, window.innerHeight);
					capture.hide(); // Hide the HTML video element
				};

				p.draw = () => {
					// Draw the capture on the canvas covering the full window
					p.image(capture, 0, 0, window.innerWidth, window.innerHeight);
					if (invert) {
						p.filter(p.INVERT);
					}
				};
			};

			let myp5 = new p5(sketch, sketchRef.current);

			return () => {
				myp5.remove();
			};
		}
	}, [invert]); // Effect depends on the invert state

	return (
		<section className="flex justify-around items-center min-h-screen">
			<div className="flex-col gap-4">
				<div ref={sketchRef}></div>
				<button
					className="bg-pink-600 m-6 px-6 py-1 rounded-md mx-auto shadow-md text-white text-xl flex justify-center gap-5 items-center"
					onClick={() => setInvert(!invert)}
				>
					{invert ? "Disable Invert" : "Enable Invert"}
				</button>
			</div>
		</section>
	);
};

export default WebcamWithEffects;
