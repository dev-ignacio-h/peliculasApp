import { Movie } from './../../interfaces/now-playing.interface';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css']
})
export class MoviesPosterGridComponent implements OnInit {
  @Input() movies: Movie[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showMovie(movie: Movie) {
    this.router.navigate(['movie', movie.id])
  }

}
