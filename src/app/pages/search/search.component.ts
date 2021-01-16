import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/now-playing.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public text: string = '';
  public movies: Movie[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesServices: MoviesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.text = params.text;
      // TODO: llamar el servicio
      this.moviesServices.searchMovies(this.text).subscribe((movies) => {
        this.movies = movies;
      });
    });
  }
}
