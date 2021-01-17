import { Cast } from './../../interfaces/credits.interface';
import { MovieDetail } from './../../interfaces/movie-detail.interface';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  public movie: MovieDetail;
  public cast: Cast[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.moviesService.getMovieDetail(id).subscribe((movie) => {
      movie && movie.id === +id
        ? (this.movie = movie)
        : this.router.navigateByUrl('/home');
    });

    this.moviesService.getCast(id).subscribe(cast => {
      this.cast = cast/* .filter(actor => actor.profile_path !== null) */;
      console.log(cast)
    })
  }

  goBack() {
    this.location.back();
  }
}
