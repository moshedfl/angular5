import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-input',
  templateUrl: './super-input.component.html',
  styleUrls: ['./super-input.component.css']
})
export class SuperInputComponent implements OnInit {

startValue:string = "woooow"
  constructor() { }

  ngOnInit() {
  }

}
