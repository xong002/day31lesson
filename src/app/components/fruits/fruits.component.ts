import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css'],
})

export class FruitsComponent implements OnInit {
  
  fruitTest: string = 'Durian';

  fullName: string = 'Darryl Ng';

  @Output() onFontSize = new Subject<number>();
  fontSize: string = '10em';


  fruits: [{ name: string; quantity: number }]; // how to initialise empty array and just push objects?

  testClick() {
    console.log('Button clicked');
  }

  fontSizeChanged($event) {
    const fontSize = parseInt($event.target.value);
    this.fontSize = `${fontSize}em`; //use back ticks to use variables ${} or $
    console.log(this.fontSize);
    this.onFontSize.next(fontSize);
  }

  ngOnInit(): void {
    this.fruits = [{ name: 'mango', quantity: 10}];
    this.fruits.push({ name: 'pear', quantity: 10});
    this.fruits.push({ name: 'apple', quantity: 2});
    this.fruits.push({ name: 'durian', quantity: 1})
  }
}
