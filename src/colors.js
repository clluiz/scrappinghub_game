const RED = '#FF0000';
const GREEN = '#00FF00';
const BLUE = '#0000FF';

const colors = [RED, GREEN, BLUE];

export default function getRandomColor() {
    return colors[Math.floor(Math.random() * ((colors.length - 1) - 0 + 1)) + 0];
}
