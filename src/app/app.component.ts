import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  helloworld = 'hello vilas';

  clickMe() {
    alert('you clicked me');
  }
}
