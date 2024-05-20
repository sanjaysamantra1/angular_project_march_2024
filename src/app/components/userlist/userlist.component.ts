import { Component } from '@angular/core';
import * as usersData from './users.json';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CommonModule,RouterLink,HttpClientModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {
  userList: any = (usersData as any).default;

  constructor(private http:HttpClient){

  }
  ngOnInit(){
    /* console.log('Oninit ')
    this.http.post('http://localhost:5000/payment',{}).subscribe((response:any)=>{
      console.log(response);
      window.location.href = response.url;
    }) */
  }
}
