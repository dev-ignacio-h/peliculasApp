import { Movie } from './../../interfaces/now-playing.interface';
import { Component, HostListener, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @HostListener('window:scroll', ['event'])
  onScroll() {
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) + 800;
    const max =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    if (pos > max) {
      //TODO: call the service
      if (this.moviesService.loading) {
        return;
      }
      this.moviesService.getNowPlaying().subscribe((movies) => {
        this.movies.push(...movies);
      });
    }
  }

  public movies: Movie[] = [];
  public moviesSlideshow: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getNowPlaying().subscribe((movies) => {
      // console.log(resp.results)
      this.movies = movies;
      this.moviesSlideshow = movies;
    });
  }
}
