import generateRandomNumberBetween from './util';

const RED = '#FF0000';
const GREEN = '#00FF00';
const BLUE = '#0000FF';
const colors = [RED, GREEN, BLUE];

export default function getRandomColor() {
    return colors[generateRandomNumberBetween(0, colors.length - 1)];
}
