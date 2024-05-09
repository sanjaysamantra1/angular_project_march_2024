import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messeage-2.component.html',
  styleUrl: './messeage-2.component.css'
})
export class Messeage2Component {

  constructor(private messageService: MessageService) {

  }
  sendMyMsg(msgText: string) {
    this.messageService.sendMessage(msgText);
  }
  clearMyMsg(){
    this.messageService.clearMessages();
  }
}
