import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: Object[] = [];

  constructor(http: HttpClient) {
    const observable = http.get<Object[]>('http://localhost:3000/flavio/photosx');
    observable.subscribe(
      photos => this.photos = photos,
      error => console.log(error.message)
    );
  }

}
