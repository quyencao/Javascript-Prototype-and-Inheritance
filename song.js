function Song(title, artist, duration) {
    Media.call(this, title, duration);
    this.artist = artist;
}

Song.prototype = Object.create(Media.prototype);

Song.prototype.toHTML = function() {
    var html = '<li ';
    if(this.isPlaying) {
        html += 'class="current"';
    }
    html += '>' + this.title + ' - ' + this.artist + '<span class="duration">' + this.duration + '</span></li>';
    return html;
};