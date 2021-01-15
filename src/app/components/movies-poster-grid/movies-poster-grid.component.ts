import { Movie } from '../../interfaces/now-playing.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css']
})
export class MoviesPosterGridComponent implements OnInit {
  @Input() movies: Movie[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.movies)
  }

}
