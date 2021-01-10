import { MoviesService } from './services/movies.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private moviesServices: MoviesService) {
    this.moviesServices.getNowPlaying()
      .subscribe(resp => {
        console.log(resp);

      })
  }

}
