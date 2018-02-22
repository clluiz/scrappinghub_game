export default function generateRandomNumberBetween(init, end) {
    return Math.floor(Math.random() * (end - init + 1)) + init;
}