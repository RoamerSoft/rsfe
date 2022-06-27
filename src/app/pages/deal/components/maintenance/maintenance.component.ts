import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {
  @Input() showOrderButtons: boolean;
  @Output() buttonClicked = new EventEmitter<void>();
  public showShadow: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
