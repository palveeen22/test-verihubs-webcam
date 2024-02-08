import React from "react";

const Navbar = () => {
	return (
		<section className="hidden md:block lg:block">
			<nav className="px-4 py-3 bg-[#333333]">
				<div className="flex justify-start gap-2 items-center">
					<img
						src="https://webcamtoy.com/assets/images/icon-round-68.png"
						className="h-10 w-10 object-cover"
					/>
					<p className="text-[#fff] text-xl">Webcam Toy</p>
				</div>
			</nav>
		</section>
	);
};

export default Navbar;
