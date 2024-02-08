const Footer = () => {
	return (
		<section className="hidden md:block lg:block">
			<footer className="py-3 bg-[#f4f5f7]">
				<ul className="flex justify-center gap-4">
					<li className="text-[#999999] hover:text-[#000] cursor-pointer">
						Terms of Service
					</li>
					<li className="text-[#999999] hover:text-[#000] cursor-pointer">
						Privacy Policy
					</li>
					<li className="text-[#999999] hover:text-[#000] cursor-pointer">
						Language
					</li>
				</ul>
			</footer>
		</section>
	);
};

export default Footer;
