import { Component, OnInit } from '@angular/core';

interface Man { fName: String; lName: string; nName: string; }

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
