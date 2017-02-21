import { Contact } from './../contact/contact.model';
import { ContactsService } from './../contacts.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: Observable<Contact[]>;
  constructor(private service: ContactsService) { }

  ngOnInit() {
    this.contacts = this.service.getContacts();
  }


}
