import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-input2',
  templateUrl: './super-input2.component.html',
  styleUrls: ['./super-input2.component.css']
})
export class SuperInput2Component implements OnInit {

@Input('super') start:string;
  myValue:string = "also no value"
  userValue:string = "user no value"
  constructor() { }

  ngOnInit() {
    setTimeout(()=> this.myValue="also new value",2000)
    setTimeout(()=> this.userValue = "user new valve", 2000)
  }

}
