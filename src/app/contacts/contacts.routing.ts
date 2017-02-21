import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactsComponent } from './contacts.component';

import { Routes } from '@angular/router';

export const contactsRoutes: Routes = [
    {
        path: 'contacts', component: ContactsComponent,
        children: [
            { path: 'list', component: ContactListComponent },
            { path: 'add', component: ContactFormComponent },
            { path: ':id', component: ContactDetailsComponent }

        ]
    }
]