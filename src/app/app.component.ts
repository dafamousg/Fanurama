import { Component } from '@angular/core';
import * as ASO from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fanurama-app';
  ngOnInit(){
    ASO.init();
  }
}
