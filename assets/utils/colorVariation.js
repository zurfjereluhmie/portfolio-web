const getColorVariation = (time) => {
	if (time >= 8 && time < 20) {
		return "morning";
	} else {
		return "night";
	}
};

export const updateColor = (time) => {
	document.querySelector("html").dataset.theme = getColorVariation(time);
};
