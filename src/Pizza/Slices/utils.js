export const calculateDegrees = (pizzaEatersCount) => {
    let angleStep = 360 / pizzaEatersCount;
    const result = [];

    for (let i = 1; i <= pizzaEatersCount / 2; i++) {
        result.push(angleStep * i);
    }

    return result;
};
