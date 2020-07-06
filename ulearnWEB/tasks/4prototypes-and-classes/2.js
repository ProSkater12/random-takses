function Song(title, author, album) {
	this.title = title;
	this.author = author;
	this.album = album;

	this.getFullName = () => {
      return 'композиция «' + this.title + '», исполнитель ' + this.author + ', альбом «' + this.album + '»';
    }

    this.setYear = (year) => {
      this.year = year;
    }

    this.setTitle = (title) => {
      this.title = title;
    }
}