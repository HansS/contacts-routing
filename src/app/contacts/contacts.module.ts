import { contactsRoutes } from './contacts.routing';
import { ContactsComponent } from './contacts.component';
import { ContactsService } from './contacts.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(contactsRoutes)
  ],
  declarations: [ContactsComponent, ContactComponent, ContactListComponent, ContactDetailsComponent, ContactFormComponent],
  exports: [RouterModule, ContactsComponent],
  providers: [ContactsService]
})
export class ContactsModule { }
