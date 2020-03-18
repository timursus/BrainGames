// The minimum is inclusive and the maximum is inclusive
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandomInt;
