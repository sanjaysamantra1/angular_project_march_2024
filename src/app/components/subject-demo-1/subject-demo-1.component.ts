import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo-1',
  standalone: true,
  imports: [],
  templateUrl: './subject-demo-1.component.html',
  styleUrl: './subject-demo-1.component.css'
})
export class SubjectDemo1Component {
  subjectDemo() {
    let publisher = new Subject();
    publisher.next('AAAAA');
    let subscriber1 = publisher.subscribe(val => console.log('Subscriber-1 ', val));
    publisher.next('BBBBB');
    let subscriber2 = publisher.subscribe(val => console.log('Subscriber-2 ', val));
    publisher.next('CCCCC');
    publisher.next('DDDDD');
    let subscriber3 = publisher.subscribe(val => console.log('Subscriber-3 ', val));
  }
  behaviouSubjectDemo() {
    let publisher = new BehaviorSubject('Hellooooo');
    let subscriber1 = publisher.subscribe(val => console.log('Subscriber-1 ', val));
    publisher.next('BBBBB');
    let subscriber2 = publisher.subscribe(val => console.log('Subscriber-2 ', val));
    publisher.next('CCCCC');
    publisher.next('DDDDD');
    let subscriber3 = publisher.subscribe(val => console.log('Subscriber-3 ', val));
  }
  replaySubjectDemo() {
    let publisher = new ReplaySubject();
    let subscriber1 = publisher.subscribe(val => console.log('Subscriber-1 ', val));
    publisher.next('BBBBB');
    let subscriber2 = publisher.subscribe(val => console.log('Subscriber-2 ', val));
    publisher.next('CCCCC');
    publisher.next('DDDDD');
    let subscriber3 = publisher.subscribe(val => console.log('Subscriber-3 ', val));
  }
  asyncSubjectDemo() {
    let publisher = new AsyncSubject();
    let subscriber1 = publisher.subscribe(val => console.log('Subscriber-1 ', val));
    publisher.next('BBBBB');
    let subscriber2 = publisher.subscribe(val => console.log('Subscriber-2 ', val));
    publisher.next('CCCCC');
    publisher.next('DDDDD');
    let subscriber3 = publisher.subscribe(val => console.log('Subscriber-3 ', val));
    publisher.complete();
  }
  constructor() {
    // this.subjectDemo();
    // this.behaviouSubjectDemo();
    // this.replaySubjectDemo();
    this.asyncSubjectDemo();
  }

}
