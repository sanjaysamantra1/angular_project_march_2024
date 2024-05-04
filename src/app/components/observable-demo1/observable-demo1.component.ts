import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, filter, from, interval, map, of, range, zip } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable-demo1.component.html',
  styleUrl: './observable-demo1.component.css'
})
export class ObservableDemo1Component {
  publisher1 = new Observable((observer) => {
    observer.next('AAAAAAAAAA');
    observer.next('BBBBBBBBBBB');
    observer.next('CCCCCCCCC');
    observer.next('DDDDDDDDDD');
    observer.complete();
  })
  subscriber1 = this.publisher1.subscribe({
    next: (v) => {
      console.log('Next method called...')
      console.log(v);
    },
    error: (e) => console.error(e),
    complete: () => console.info('completed'),
  });

  /* arr = [10, 20, 30, 40, 50];
  publisher2 = from(this.arr);
  subscriber2 = this.publisher2.subscribe(val => console.log(val));

  publisher3 = interval(2000);
  subscriber3 = this.publisher3.subscribe(val => console.log(val));

  timerId = setTimeout(() => {
    this.subscriber3.unsubscribe();
  }, 10000); */

  publisher4 = range(1, 10);
  // subscriber4 = this.publisher4.subscribe(val => console.log(val));

  publisher_even = this.publisher4.pipe(filter((ele: any) => ele % 2 === 0))
  subsriber_even = this.publisher_even.subscribe(val => console.log(val));


  publisher_square = this.publisher4.pipe(map((ele: any) => ele * ele))
  subsriber_square = this.publisher_square.subscribe(val => console.log(val));

  // Digital Clock
  time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toLocaleTimeString()), 1000);
  });

  zipDemo() {
    let publisher1 = of(32, 31, 34);
    let publisher2 = of('sanjay', 'sameer', 'bishnu');
    let publisher3 = of('bang', 'chennai', 'hyderabad');

    let finalPublisher = zip(publisher1, publisher2, publisher3).pipe(
      map(([age, name, add]) => ({ age, name, add }))
    );
    finalPublisher.subscribe((data) => console.log(data));
  }
  

  constructor(){
    this.zipDemo();
  }


}
