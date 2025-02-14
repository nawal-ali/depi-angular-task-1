import { Component, input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-1';
  searchValue :string = '';
  arr = [
    {name : "ali", age : 20},
    {name : "sara", age : 18},
    {name : "khaled", age : 14},
    {name : "ahmed", age : 20},
    {name : "afaf", age : 19},
    {name : "reem", age : 19},
    {name : "safaa", age : 20},
    {name : "ahmed", age : 12},
    {name : "fatma", age : 20},
    {name : "mohamed", age : 20},
    {name : "ahmed", age : 20},
    {name : "hamza", age : 34},
    {name : "ali", age : 20},
    {name : "wessam", age : 13},
    {name : "sara", age : 20},
    {name : "ali", age : 20},
    {name : "mohamed", age : 20},
    {name : "ali", age : 20},
    {name : "nour", age : 16},
    {name : "somia", age : 24},
    {name : "ali", age : 20},
    {name : "nawal", age : 20},
    {name : "tala", age : 27},
    {name : "ali", age : 20},
    {name : "ahmed", age : 20},
    {name : "ahmed", age : 20},
    {name : "waten", age : 20},
    {name : "afaf", age : 22},
    {name : "lama", age : 20},
    {name : "mariam", age : 20},
    {name : "radwa", age : 20},
    {name : "ahmed", age : 20},
    {name : "ahmed", age : 34},
    {name : "ali", age : 28},
    {name : "ali", age : 30},
    {name : "ahmed", age : 20},
    {name : "somia", age : 20},
    {name : "wref", age : 40},
    {name : "ali", age : 20},
    {name : "ahmed", age : 17},
    {name : "ahmed", age : 19},
    {name : "khaled", age : 40},
    {name : "ahmed", age : 20},
    {name : "sara", age : 31},
    {name : "ahmed", age : 15}
  ];
  onInputChange(){
    console.log('input listiner is working');
    console.log('search value is : ',this.searchValue);
  }
}
