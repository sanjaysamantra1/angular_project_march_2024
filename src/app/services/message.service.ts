import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSubject = new Subject<any>();
  // private messageSubject = new Observable();

  sendMessage(message: string) {
    this.messageSubject.next({ text: message });
  }
  clearMessages() {
    this.messageSubject.next(null);
  }
  getMessage(): Observable<any> {
    // return this.messageSubject.asObservable();
    return this.messageSubject;
  }
}


