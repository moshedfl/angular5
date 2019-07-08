import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-super-input2',
  templateUrl: './super-input2.component.html',
  styleUrls: ['./super-input2.component.css']
})
export class SuperInput2Component implements OnInit {

@Input('super') start:string;
@Output()revers:EventEmitter<string> = new EventEmitter<string>()
  
  constructor() { }

  ngOnInit() {
    
  }

}
