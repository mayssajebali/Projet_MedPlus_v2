import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = webSocket('ws://localhost:8084/ws'); // Remplacez l'URL par celle de votre serveur WebSocket
  }

  sendMessage(message: string): void {
    this.socket$.next(message);
  }

  getMessage(): WebSocketSubject<any> {
    return this.socket$;
  }
}
