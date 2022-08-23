import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-guarantees',
  templateUrl: './guarantees.component.html',
  styleUrls: ['./guarantees.component.scss']
})
export class GuaranteesComponent implements OnInit {
  @Input() currentLang: string;

  constructor() {
  }

  ngOnInit() {
  }

}
