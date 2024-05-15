import { Component } from '@angular/core';
import * as usersData from './users.json';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {
  userList: any = (usersData as any).default;
}
