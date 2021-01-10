import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NowPlaying } from '../interfaces/now-playing.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getNowPlaying():Observable<NowPlaying> {
    return this.http.get<NowPlaying>(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=10d2560286b1f60df0a7ab4d2ad51e69&language=es-ES&page=1'
    );
  }
}
