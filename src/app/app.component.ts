import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontIP';
  ip: string = '';

  public validateIP(): void {
    alert(this.ip)
  }
}
