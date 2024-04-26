import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  inputs: ['aChild', 'arr'],
  outputs: ['nameEvent'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child1Component implements OnChanges, OnInit {
  arr: any;
  aChild: any;
  name: string = 'Sanjay Samantra';
  address: string = 'Bangalore';
  nameEvent = new EventEmitter();
  sendDataToParent() {
    this.nameEvent.emit({ name: this.name, address: this.address });
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    console.log("Child constructor")
  }
  refreshMyData() {
    this.changeDetectorRef.markForCheck();
  }
  ngOnInit() {
    console.log('Child ngOnInit');
  }
  ngOnChanges(myChanges: SimpleChanges) {
    console.log(myChanges)
    console.log(myChanges['aChild'].currentValue,)
    console.log(myChanges['aChild'].previousValue,)
    console.log('Child ngOnChanges');
  }
  // ngDoCheck() {
  //   console.log('Child ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('Child ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Child ngAfterContentChecked')
  // }
  // ngAfterViewInit() {
  //   console.log('Child ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('Child ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Child ngOnDestory');
  // }
}
