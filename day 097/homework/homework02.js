class Movies {
    constructor(title, director, releaseYear, duration) {
        this.title = title;
        this.director = director;
        this.releaseYear = releaseYear;
        this.duration = duration;
    }

    getMovieInfo() {
        return `ფილმი: ${this.title}, რეჟისორი: ${this.director}, წელი: ${this.releaseYear}, ხანგრძლივობა: ${this.duration} წ`;
    }
}

const movie = new Movies("დიუნი", "დენის ვილნუვი", 2021, 155);
console.log(movie.getMovieInfo());
