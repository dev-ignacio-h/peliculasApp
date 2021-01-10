import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NowPlayingResponse } from '../interfaces/now.playing.response';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getNowPlaying():Observable<NowPlayingResponse> {
    return this.http.get<NowPlayingResponse>(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=10d2560286b1f60df0a7ab4d2ad51e69&language=es-ES&page=1'
    );
  }
}
