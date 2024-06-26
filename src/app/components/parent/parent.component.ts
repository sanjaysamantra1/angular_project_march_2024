import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Child1Component, Child2Component, HttpClientModule, FormsModule, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent {
  @ViewChild(Child1Component) child1Ref: any;

  arr = [10, 20, 30, 40]
  a: number;
  b: number;
  parentName: any;
  parentAddress: any;

  myInterval: any;

  receiveNameFromChild(data: any) {
    this.parentName = data.name;
    this.parentAddress = data.address;
  }

  constructor(private http: HttpClient) {
    this.a = 100;
    this.b = 200;
    console.log("Parent constructor")
  }
  ngOnInit() {
    console.log('Parent ngOnInit');

    this.myInterval = setInterval(() => {
      console.log('Hiiiiiiiiiiiiiiiiii')
    }, 1000)

    // API calls
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      console.log(data)
    });
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  // ngDoCheck() {
  //   console.log('Parent ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked')
  // }
  ngAfterViewInit() {
    console.log('Parent ngAfterviewinit called')
    console.log(this.child1Ref);
  }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  ngOnDestroy() {
    console.log('Parent ngOnDestory');
    clearInterval(this.myInterval);
  }
}
