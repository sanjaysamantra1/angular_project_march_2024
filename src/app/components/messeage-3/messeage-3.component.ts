import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messeage-3.component.html',
  styleUrl: './messeage-3.component.css'
})
export class Messeage3Component {
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
