import { HtmlParser } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  messageSent: boolean = false;
  spinnerSent: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  async sendMail() {
    this.disabled();
    // Animation anzeigen
    let fd = new FormData(); // hier werden alle Daten vorbereitet
    fd.append('name', this.nameField.nativeElement.value);
    fd.append('message', this.messageField.nativeElement.value);
    // senden
    await fetch('https://eugen-oswald.de/send_mail/send_mail.php', {
      method: 'POST',
      body: fd,
    });

    //text anzeigen: Nachricht gesendet.
    setTimeout(() => {
      this.enabled();
    }, 2000);

    setTimeout(() => {
      this.messageSent = false;
    }, 5000);
  }

  disabled() {
    this.nameField.nativeElement.disabled = true;
    this.emailField.nativeElement.disabled = true;
    this.messageField.nativeElement.disabled = true;
    this.sendButton.nativeElement.hidden = true;
    this.messageSent = true;
    this.spinnerSent = true;
    this.nameField.nativeElement.value = '';
    this.emailField.nativeElement.value = '';
    this.messageField.nativeElement.value = '';
  }

  enabled() {
    this.nameField.nativeElement.disabled = false;
    this.emailField.nativeElement.disabled = false;
    this.messageField.nativeElement.disabled = false;
    this.sendButton.nativeElement.hidden = false;
    this.spinnerSent = false;
  }
}
