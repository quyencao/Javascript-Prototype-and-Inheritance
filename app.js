var playList = new Playlist();

var song1 = new Song('Here Comes the Sun', 'The Beatles', '2:54');
var song2 = new Song('Walking On Sunshine', 'Katrina and the Waves', '3:43');
var movie1 = new Movie('Spider Man', 2014, '2:00:00');

playList.add(song1);
playList.add(song2);
playList.add(movie1);

var playListElement = document.getElementById('playlist');

playList.renderIn(playListElement);

document.getElementById('play').addEventListener('click', function() {
    playList.play();
});
document.getElementById('stop').addEventListener('click', function() {
    playList.stop();
});
document.getElementById('next').addEventListener('click', function() {
    playList.next();
});

document.querySelector('div').addEventListener('click', function(e) {
   console.log(e.target.nodeName);    
   if(e.target && e.target.matches('button[id]')) {
       playList.renderIn(playListElement);
   } 
});

