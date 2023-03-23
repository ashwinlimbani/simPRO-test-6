import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  input = '2222';
  data!: string;

  constructor() {
    this.data = this.getData(this.input);
  }

  /**
   * This function should take the input and for each char
   * increment if it's position in the string is even and
   * decrement it if it's odd.
   * This new value is then has its characters added up
   * and this value is returned;
   */
  getData(input: string) {
    if (isNaN(Number(input))) {
      throw new Error('Invalid input!');
    }

    try {
      const arr = input.split('');
      let newVal = '';
      for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 1) {
          let num = Number(arr[i]);
          newVal += ++num;
        } else {
          let num = Number(arr[i]);
          newVal += --num;
        }
      }
      return newVal;
    } catch (error) {
      throw error;
    }
  }
}
