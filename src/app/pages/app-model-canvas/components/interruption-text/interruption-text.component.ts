import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-interruption-text',
  templateUrl: './interruption-text.component.html',
  styleUrls: ['./interruption-text.component.scss'],
})
export class InterruptionTextComponent implements OnInit {
  @Input() text: string;

  constructor() {
  }

  ngOnInit() {
  }
}
