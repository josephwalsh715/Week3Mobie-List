import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList = [
    {id: 1, title: 'The GodFahter', year : '1972', directors: 'Francis Ford Coppola' },
    {id: 2, title: 'The Waterboy', year: '1998', directors: 'Frank Coraci' },
    {id: 3, title: 'ShawShank Redemption', year: '1994', directors: 'Frank Darabont' },
    {id: 4, title: 'Pulp Fiction', year: '1994', directors: 'Quentin Tarantino' }
  ];

  getMovies() {
    return this.movieList;
  }
}
