import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.css']
})
export class HeaderbarComponent implements OnInit {
  isDisplay = false;
  constructor() { }

  ngOnInit(): void {
  }

  toOpenMenu(){
    this.isDisplay= !this.isDisplay;
   }
}
