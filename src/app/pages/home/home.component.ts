import { Movie } from './../../interfaces/now-playing.interface';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie [] = []

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {

    this.moviesService.getNowPlaying()
      .subscribe(resp => {
        // console.log(resp.results)
        this.movies = resp.results;
      })
  }

}
