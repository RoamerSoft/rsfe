import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wd-interuption-text',
  templateUrl: './wd-interuption-text.component.html',
  styleUrls: ['./wd-interuption-text.component.scss']
})
export class WdInteruptionTextComponent implements OnInit {

  @Input() quote: string;

  constructor() { }

  ngOnInit() {
  }

}
