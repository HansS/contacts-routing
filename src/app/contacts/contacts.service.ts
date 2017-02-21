import { Injectable } from '@angular/core';
import { Http } from '@angular/http';



@Injectable()
export class ContactsService {

  constructor(private http: Http) { }

  getContacts() {
    return this.http.get('http://localhost:3000/contacts')
      //.do(console.log)
      .map( res => res.json());
  }

  getContact(id: number){
    return this.http.get('http://localhost:3000/contacts/' + id)
      //.do(console.log)
      .map( res => res.json())
  }

}

