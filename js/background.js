const images = [
  '0.jpg',
  '1.jpg',
  '2.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg'
];
const imageNumber = Math.floor(Math.random() * images.length)
const chosenImage = images[imageNumber];
document.body.style.backgroundImage = `url(images/${chosenImage})`