import { Component, OnInit, OnDestroy,Input } from '@angular/core';

import { Contact } from './../contact/contact.model';


@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @Input() contact: Contact;
  constructor() { }

  ngOnInit() {
  }

}
