import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day31lesson';
  updatedNumber: number;
  leftEnabled: boolean = false;
  rightEnabled: boolean = false;

  changedNumber(eventNumber: number){
    this.updatedNumber = eventNumber;
    console.log('parent number: ' + this.updatedNumber);
  }

  toggleLeft(){
    this.leftEnabled = !this.leftEnabled;
  }

  toggleRight(){
    this.rightEnabled = !this.rightEnabled;
  }
}
