import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titleHome = "My Income";
  constructor() { }

  ngOnInit() {
    this.titleHome = "My Income";
  }

}
