import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding-example';

  changeTitle(): void {
    this.title = "I changed it with a button click!";
  }
}
