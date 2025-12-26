import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    private apiUrl = `${environment.apiUrl}/contact`;

    constructor(private http: HttpClient) { }

    getContacts(): Observable<Contact[]> {
        return this.http.get<Contact[]>(this.apiUrl);
    }

    getContact(id: string): Observable<Contact> {
        return this.http.get<Contact>(`${this.apiUrl}/${id}`);
    }

    createContact(contact: Contact): Observable<Contact> {
        return this.http.post<Contact>(this.apiUrl, contact);
    }

    updateContact(id: string, contact: Contact): Observable<Contact> {
        return this.http.put<Contact>(`${this.apiUrl}/${id}`, contact);
    }

    deleteContact(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
