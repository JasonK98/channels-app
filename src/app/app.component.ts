import { Component } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value: string;

  onSelect( data: TabDirective ): void {
    this.value = data.heading;
  }
}
