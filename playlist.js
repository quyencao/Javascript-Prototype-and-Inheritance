function Playlist() {
    this.songs = [];
    this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function(song) {
    this.songs.push(song)
};

Playlist.prototype.play = function() {
    this.songs[this.nowPlayingIndex].play();
};

Playlist.prototype.stop = function(){
    this.songs[this.nowPlayingIndex].stop();
};

Playlist.prototype.next = function() {
    this.stop();
    this.nowPlayingIndex = (this.nowPlayingIndex === this.songs.length - 1) ? 0 : this.nowPlayingIndex + 1;
    this.play();
};

Playlist.prototype.renderIn = function(list) {
    list.innerHTML = '';
    this.songs.forEach(function(song) {
        list.insertAdjacentHTML('beforeend', song.toHTML());
    });
};
