import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    isFav: true
  }
  @Input() isFav: boolean;
  text = `lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem `;
  // course = {
  //   title: 'The complete course',
  //   students: 30123,
  //   rating: 4.9745,
  //   price: 190.95,
  //   releaseDate: new Date(2016, 3, 1)
  // };

  starToggle() {
    this.isFav = !this.isFav;
  }
}
