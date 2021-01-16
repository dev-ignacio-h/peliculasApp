import { MovieDetail } from './../../interfaces/movie-detail.interface';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {

  public movie: MovieDetail;

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.moviesService.getMovieDetail(id).subscribe(movie => {
      this.movie = movie;
      console.log(movie);

    })
  }

  goBack() {
    this.location.back();
  }
}
