import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';

@Component({
    selector: 'app-contact-list',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './contact-list.component.html',
    styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {
    contacts: Contact[] = [];
    loading = true;
    error = '';
    searchTerm = '';
    deleteModalVisible = false;
    contactToDelete: Contact | null = null;

    constructor(
        private contactService: ContactService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.loadContacts();
    }

    loadContacts(): void {
        this.loading = true;
        this.error = '';

        this.contactService.getContacts().subscribe({
            next: (data) => {
                this.contacts = data;
                this.loading = false;
            },
            error: (err) => {
                this.error = 'Failed to load contacts. Please check if the backend server is running.';
                this.loading = false;
                console.error('Error loading contacts:', err);
            }
        });
    }

    get filteredContacts(): Contact[] {
        if (!this.searchTerm) {
            return this.contacts;
        }

        const term = this.searchTerm.toLowerCase();
        return this.contacts.filter(contact =>
            contact.name.toLowerCase().includes(term) ||
            contact.email.toLowerCase().includes(term) ||
            contact.phone.includes(term)
        );
    }

    editContact(id: string | undefined): void {
        if (id) {
            this.router.navigate(['/edit', id]);
        }
    }

    openDeleteModal(contact: Contact): void {
        this.contactToDelete = contact;
        this.deleteModalVisible = true;
    }

    closeDeleteModal(): void {
        this.deleteModalVisible = false;
        this.contactToDelete = null;
    }

    confirmDelete(): void {
        if (this.contactToDelete && this.contactToDelete._id) {
            this.contactService.deleteContact(this.contactToDelete._id).subscribe({
                next: () => {
                    this.loadContacts();
                    this.closeDeleteModal();
                },
                error: (err) => {
                    this.error = 'Failed to delete contact';
                    console.error('Error deleting contact:', err);
                    this.closeDeleteModal();
                }
            });
        }
    }
}
