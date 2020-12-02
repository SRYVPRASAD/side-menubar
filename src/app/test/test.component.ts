import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 

  @Input() public parentData;
  @Output() public stateOfChange = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
 toChangeState(){
   this.stateOfChange.emit(true);
 }
}
