import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { concatMap, forkJoin, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  standalone: true,
  imports: [],
  templateUrl: './observable-demo2.component.html',
  styleUrl: './observable-demo2.component.css'
})
export class ObservableDemo2Component {

  fetchDataFromMultipleAPIs() {
    let userNames = ['sanjaysamantra1', 'ushamahesh818', 'seun035'];
    let requests = userNames.map(userName => {
      return this.httpClient.get(`https://api.github.com/users/${userName}`)
    });
    forkJoin(requests).subscribe((responses) => {
      console.log(responses);
    });
  }

  withoutMergeMap() {
    let userPublisher = of(1, 2, 3, 4);

    let userSubscriber = userPublisher.subscribe(userId => {
      console.log(userId);
      this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${userId}`).subscribe(userData => {
        console.log(userData)
      })
    });

  }
  withMergeMap() {
    let userPublisher = of(1, 2, 3, 4);
    userPublisher.pipe(mergeMap(userId => {
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    })).subscribe(userData => {
      console.log(userData)
    })
  }
  concatMapDemo() {
    let userPublisher = of(2, 4, 1, 3);
    userPublisher.pipe(concatMap(userId => {
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    })).subscribe(userData => {
      console.log(userData)
    });
  }

  constructor(private httpClient: HttpClient) {
    // this.fetchDataFromMultipleAPIs();
    // this.withoutMergeMap();
    // this.withMergeMap();
    this.concatMapDemo();
  }
}
