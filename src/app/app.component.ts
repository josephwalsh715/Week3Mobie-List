import { Component } from '@angular/core';
import { MovieService } from './myservices/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  student = "S00222915 Joe Walsh";
  movies=[] as any;

constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies = this.movieService.getMovies();
    console.log(this.movies);
  }
}
