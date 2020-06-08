import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wd-interruption-text',
  templateUrl: './wd-interruption-text.component.html',
  styleUrls: ['./wd-interruption-text.component.scss'],
})
export class WdInterruptionTextComponent implements OnInit {
  @Input() quote: string;

  constructor() {}

  ngOnInit() {}
}
