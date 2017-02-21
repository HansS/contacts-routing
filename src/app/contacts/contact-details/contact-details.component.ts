import { Contact } from './../contact/contact.model';
import { Http } from '@angular/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ContactsService } from './../contacts.service';


@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  //private id: number;
  contact: Contact;
  hobbies: string[]; 
  constructor(private service: ContactsService, private route: ActivatedRoute) { }

  ngOnInit() {
    // get contact data
     this.route.params
            .map(params  =>  params['id'])
            .subscribe((id)  =>  {
                this.service
                    .getContact(id)
                    .subscribe(contact  =>  this.contact  =  contact);

      });

      // get hobbies
           this.route.params
            .map(params  =>  params['id'])
            .subscribe((id)  =>  {
                this.service
                    .getHobbies(id)
                    .subscribe(hs  =>  this.hobbies  = hs);

      });
  }
}
