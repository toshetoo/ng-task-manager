import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title: string = 'course-work';
  // message = 'Hello World!';

  testObj;
  numbersArray: number[] = [1, 2, 3, 4, 5];

  constructor() {
    this.title = "faudshfdjs";
  }

  ngOnInit() {
      setTimeout(() => {
        this.testObj = {
          prop1: 'First Prop',
          prop2: 'Second prop' 
        };
      }, 6000);
  }

  ngDoCheck() {
    console.log('TEST DO CHECK');
  }

  getText(): string {
    return this.title;
  }

}
