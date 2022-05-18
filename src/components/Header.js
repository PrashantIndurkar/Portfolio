import React from 'react';
import foldedHands from '../img/foldedHands.svg';
function Header() {
	return (
		<div className="pt-3">
			<div
				id="header"
				className="header__background rounded-tl-3xl flex flex-col justify-center items-center tracking-wide text-secondary text-center"
			>
				<div className="font-extrabold mx-10 ">
					<p className="mb-3 text-lg font-light leading-5">
						<img className="h-6 inline" src={foldedHands} alt="" /> Namaste I'm
					</p>
					<h1 className="text-2xl leading-normal font-bold">
						Prashant Indurkar
					</h1>
					<h1 className="text-[28px] leading-normal font-black break-normal">
						<span className="text-primary font-extrabold">Full-Stack </span>
						Developer.
					</h1>
					<h1 className="text-2xl leading-normal font-bold">India.</h1>
				</div>
			</div>
		</div>
	);
}

export default Header;
