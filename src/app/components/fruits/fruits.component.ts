import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css'],
})
export class FruitsComponent {
  
  
  fruit: string = 'Durian';

  fullName: string = 'Darryl Ng';

  @Output() onFontSize = new Subject<number>();
  fontSize: string = '10em';

  testClick() {
    console.log('Button clicked');
  }

  fontSizeChanged($event) {
    const fontSize = parseInt($event.target.value);
    this.fontSize = `${fontSize}em`; //use back ticks to use variables ${} or $
    console.log(this.fontSize);
    this.onFontSize.next(fontSize);
  }

  
}
