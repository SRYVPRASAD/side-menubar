import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public name = 'test01';
  isDisplay = false;
public isDisplayed = "";

  constructor() { }

  ngOnInit() {
  }

  toOpenMenu(){
    this.isDisplay= !this.isDisplay;
   }
 


}
