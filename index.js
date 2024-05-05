window.onload = () => {
	let body = document.body;

	body.classList.add("loaded");

	document.querySelector(".intro__video").onended = () => {
		body.classList.remove("loaded");
		body.classList.add("start");
		if (document.querySelector(".counter")) {
			let digits = document.querySelector(".counter__content");
			let startTimestamp = null;
			const DURATION = 550;
			const START_VALUE = parseInt(digits.innerHTML);
			const START_POSITION = 0;

			const STEP = (timestamp) => {
				if (!startTimestamp) startTimestamp = timestamp;
				const PROGRESS = Math.min(
					(timestamp - startTimestamp) / DURATION,
					1
				);
				digits.innerHTML = Math.floor(
					PROGRESS * (START_POSITION + START_VALUE)
				);
				if (PROGRESS < 1) {
					window.requestAnimationFrame(STEP);
				}
			};

			window.requestAnimationFrame(STEP);
		}
	};
};
