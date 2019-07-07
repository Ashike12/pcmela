import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pcmela';
  add(first:number, second:number) : number {
    var temp:number = first+second;
    var temp:number = first+second;
    return temp;    
  }
}
