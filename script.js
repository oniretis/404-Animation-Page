var animation = bodymovin.loadAnimation({
  container: document.getElementById('anim'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json'
});


// lottie.loadAnimation({
//   container: element, // the dom element that will contain the animation
//   renderer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: 'data.json' // the path to the animation json
// });