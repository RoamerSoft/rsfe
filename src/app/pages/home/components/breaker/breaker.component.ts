import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breaker',
  templateUrl: './breaker.component.html',
  styleUrls: ['./breaker.component.scss'],
})
export class BreakerComponent implements OnInit {
  @Input() text: string;

  public leftQuote = '“';
  public rightQuote = '”';

  constructor() {}

  ngOnInit() {}
}
