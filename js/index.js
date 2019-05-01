//create an array to hold all random image urls
var photos = [
  'pic/app-01.png',
  'pic/app-02.png',
  'pic/app-03.png',
  'pic/app-04.png',
  'pic/app-05.png',
  'pic/app-06.png',
  'pic/app-07.png',
  'pic/app-08.png',
];

//when the random is clicked, generate a random number from 1 to 3
//then get the corresponding link from photos
//then set the image src to the corresponding link
$('.btn-random').click(function(){
  var photo_url = photos[Math.floor(Math.random() * photos.length)];
  $('#random-photo').attr('src',photo_url);
});