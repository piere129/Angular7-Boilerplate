import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { InputOutputChildComponent } from '../input-output-child/input-output-child.component';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {

  ngOnInit(): void {
  }

  

  constructor(private cdRef:ChangeDetectorRef) { }

  @ViewChild(InputOutputChildComponent)
  child: InputOutputChildComponent;

  counterInParent = 0;
  counterWithViewChild: number;


  editCounter(counterChild) {
    this.counterInParent = counterChild;
  }

  ngAfterViewInit() {
    this.counterWithViewChild = this.child.CounterForViewChild;
    this.cdRef.detectChanges();
  }
}
