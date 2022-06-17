import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-server-online',
  templateUrl: './server-online.component.html',
  styleUrls: ['./server-online.component.scss']
})
export class ServerOnlineComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
