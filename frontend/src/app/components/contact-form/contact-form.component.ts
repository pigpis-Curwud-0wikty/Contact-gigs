import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';

@Component({
    selector: 'app-contact-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    templateUrl: './contact-form.component.html',
    styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit {
    contactForm: FormGroup;
    isEditMode = false;
    contactId: string | null = null;
    loading = false;
    error = '';
    success = false;

    constructor(
        private fb: FormBuilder,
        private contactService: ContactService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.contactForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.pattern(/^[\d\s\-\+\(\)]+$/)]]
        });
    }

    ngOnInit(): void {
        this.contactId = this.route.snapshot.paramMap.get('id');

        if (this.contactId) {
            this.isEditMode = true;
            this.loadContact(this.contactId);
        }
    }

    loadContact(id: string): void {
        this.loading = true;
        this.contactService.getContact(id).subscribe({
            next: (contact) => {
                this.contactForm.patchValue({
                    name: contact.name,
                    email: contact.email,
                    phone: contact.phone
                });
                this.loading = false;
            },
            error: (err) => {
                this.error = 'Failed to load contact';
                this.loading = false;
                console.error('Error loading contact:', err);
            }
        });
    }

    get f() {
        return this.contactForm.controls;
    }

    onSubmit(): void {
        if (this.contactForm.invalid) {
            Object.keys(this.contactForm.controls).forEach(key => {
                this.contactForm.controls[key].markAsTouched();
            });
            return;
        }

        this.loading = true;
        this.error = '';

        const contactData: Contact = this.contactForm.value;

        const request = this.isEditMode && this.contactId
            ? this.contactService.updateContact(this.contactId, contactData)
            : this.contactService.createContact(contactData);

        request.subscribe({
            next: () => {
                this.success = true;
                this.loading = false;

                setTimeout(() => {
                    this.router.navigate(['/']);
                }, 1500);
            },
            error: (err) => {
                this.error = 'Failed to save contact. Please try again.';
                this.loading = false;
                console.error('Error saving contact:', err);
            }
        });
    }

    cancel(): void {
        this.router.navigate(['/']);
    }
}
