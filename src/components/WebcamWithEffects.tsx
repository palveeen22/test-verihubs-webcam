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
					p.createCanvas(640, 480);
					// @ts-ignore
					capture = p.createCapture(p.VIDEO);
					capture.size(640, 480);
					capture.hide(); // Hide the HTML video element
				};

				p.draw = () => {
					p.image(capture, 0, 0, 640, 480);
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
		<section className="flex justify-center items-center min-h-screen">
			<div className="flex-col gap-4">
				<div ref={sketchRef}></div> {/* This div will contain the p5 canvas */}
				<button
					className="bg-pink-600 px-6 py-1 rounded-md mx-auto shadow-md text-white text-xl flex justify-center gap-5 items-center"
					onClick={() => setInvert(!invert)}
				>
					{invert ? "Disable Invert" : "Enable Invert"}
				</button>
			</div>
		</section>
	);
};

export default WebcamWithEffects;
