//split coordinates into pairs

const points = '45 33 04 49 15 12 43 15 06 61';

const generateCoords = (strPoints) => {
  const arr = strPoints.split(' ');
  const coords = [];

  for (let i = 0; i <= arr.length - 2; i += 2) {
    coords.push(`${arr[i]}, ${arr[i + 1]}`);
  }
  return coords;
};
const coordinates = generateCoords(points);

console.log(coordinates);
