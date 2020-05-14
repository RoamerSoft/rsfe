import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dream',
  templateUrl: './dream.component.html',
  styleUrls: ['./dream.component.scss']
})
export class DreamComponent implements OnInit {
  public param;

  constructor() { }

  ngOnInit() {
    this.param = { roamer: '<strong>Roamer</strong>' };
  }

}
