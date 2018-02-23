import generateRandomNumberBetween from './util';

export const RED = '#FF0000';
export const GREEN = '#00FF00';
export const BLUE = '#0000FF';
const colors = [RED, GREEN, BLUE];

export function getRandomColor() {
    return colors[generateRandomNumberBetween(0, colors.length - 1)];
}
