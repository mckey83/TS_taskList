import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-my',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title: string = 'Angular2Do';
  path: string = '/assets/img/angular.png';
}
