import { Credits, Cast } from './../interfaces/credits.interface';
import { MovieDetail } from './../interfaces/movie-detail.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NowPlaying, Movie } from '../interfaces/now-playing.interface';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private nowPlayingPage = 1;
  public loading: boolean = false;
  constructor(private http: HttpClient) {}

  get params() {
    return {
      api_key: '10d2560286b1f60df0a7ab4d2ad51e69',
      language: 'es-ES',
      page: this.nowPlayingPage.toString(),
    };
  }

  resetNowPlayingPage() {
    this.nowPlayingPage = 1;
  }

  getNowPlaying(): Observable<Movie[]> {
    if (this.loading) {
      return of([]);
    }
    this.loading = true;
    return this.http
      .get<NowPlaying>(`${this.baseUrl}/movie/now_playing`, {
        params: this.params,
      })
      .pipe(
        map((resp) => resp.results),
        tap(() => {
          this.nowPlayingPage++;
          this.loading = false;
        })
      );
  }

  searchMovies(text: string): Observable<Movie[]> {
    const params = { ...this.params, page: '1', query: text };
    // https://api.themoviedb.org/3/search/movie
    return this.http
      .get<NowPlaying>(`${this.baseUrl}/search/movie`, {
        params,
      })
      .pipe(map((resp) => resp.results));
  }

  getMovieDetail(id: string) {
    return this.http.get<MovieDetail>(`${this.baseUrl}/movie/${id}`, {
      params: this.params,
    }).pipe(
      catchError(err => of(null))
    )
  }

  getCast(id: string):Observable<Cast[]> {
    return this.http.get<Credits>(`${this.baseUrl}/movie/${id}/credits`, {
      params: this.params,
    }).pipe(
      map(resp => resp.cast),
      catchError(err => of([]))
    );
  }
}
