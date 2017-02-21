import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'contacts', component: ContactsComponent}
]