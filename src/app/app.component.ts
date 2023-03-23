import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  title = 'infiniteSkyDC';
  
  constructor() {

  }
  
  ngOnInit() {

  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
