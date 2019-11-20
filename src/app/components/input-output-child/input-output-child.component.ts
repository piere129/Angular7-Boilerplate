import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output-child',
  templateUrl: './input-output-child.component.html',
  styleUrls: ['./input-output-child.component.scss']
})
export class InputOutputChildComponent implements OnInit {

  constructor() { }

  @Input('item')
  item: string;

  Counter = 0;
  CounterForViewChild= 12;

  @Output() buttonClicked = new EventEmitter();

  ngOnInit() {
  }

  sendMessageToParent() {
    this.Counter = this.Counter + 1;
    this.buttonClicked.emit(this.Counter);
  }

}
