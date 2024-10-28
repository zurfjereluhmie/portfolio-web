const getColorVariation = (time) => {
    if (time >= 6 && time < 12) {
        return "morning";
    } else if (time >= 12 && time < 18) {
        return null;
    } else if (time >= 18 && time < 22) {
        return "evening";
    } else {
        return "night";
    }
}

export const updateColor = (time) => {
    // document.querySelector('html').dataset.theme = getColorVariation(time);
    document.querySelector('html').dataset.theme = "night";
}