import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './http-demo1.component.html',
  styleUrl: './http-demo1.component.css'
})
export class HttpDemo1Component implements OnInit {
  users: any = [];

  constructor(private httpClient: HttpClient) {
  }
  ngOnInit(): void {
    // this.fetchUsersJavascript();
    this.fetchUsersAngular();
  }
  fetchUsersJavascript() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    let userPromise = fetch(url);
    userPromise.then(response => {
      response.json().then(finaldata => {
        this.users = finaldata;
      });
    });
  }
  fetchUsersAngular() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    this.httpClient.get(url).subscribe(response => {
      this.users = response;
    })
  }
}
