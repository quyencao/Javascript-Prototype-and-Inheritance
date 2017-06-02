function Movie(title, year, duration) {
    Media.call(this, title, duration);
    this.year = year;
}

Movie.prototype = Object.create(Media.prototype);

Movie.prototype.toHTML = function() {
    var html = '<li ';
    if(this.isPlaying) {
        html += 'class="current"';
    }
    html += '>' + this.title + ' - ' + this.year + '<span class="duration">' + this.duration + '</span></li>';
    return html;
};