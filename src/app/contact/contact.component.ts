import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  sendMessage() {
    const message = 'Your message has been sent!';
    window.alert(message);
  }
  }

