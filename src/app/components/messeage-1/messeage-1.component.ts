import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messeage-1.component.html',
  styleUrl: './messeage-1.component.css'
})
export class Messeage1Component implements OnInit {
  messages: any = []

  constructor(private messageService: MessageService) {
  }
  ngOnInit() {
    this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message)
      } else {
        this.messages = [];
      }
    })
  }
}
