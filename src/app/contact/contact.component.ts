import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ContactModel} from "../model/contact.model";
import {NgIf} from "@angular/common";
import {ContactService} from "../service/contact.service";
import {ToastService} from "../service/toast.service";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  isNameInputFocused: boolean = false;
  isEmailInputFocused: boolean = false;
  isMessageInputFocused: boolean = false;

  onNameInputFocus() {
    this.isNameInputFocused = true;
  }

  onNameInputBlur() {
    this.isNameInputFocused = (this.contactForm.value.name !== null && this.contactForm.value.name !== '');
  }

  onEmailInputFocus() {
    this.isEmailInputFocused = true;
  }

  onEmailInputBlur() {
    this.isEmailInputFocused = (this.contactForm.value.email !== null && this.contactForm.value.email !== '');
  }

  onMessageInputFocus() {
    this.isMessageInputFocused = true;
  }

  onMessageInputBlur() {
    this.isMessageInputFocused = (this.contactForm.value.message !== null && this.contactForm.value.message !== '');
  }

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService : ContactService, private   toastService: ToastService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }
  sendMail() {
    const contactRaw = this.contactForm.getRawValue();
    let contact: ContactModel = {
      fullName: contactRaw.name,
      message: contactRaw.message,
      email: contactRaw.email,
    }
    this.contactService.sendContactMessage(contact).subscribe({
      next: (res) => {
        this.toastService.show("Send Successfully", { classname: 'bg-success text-light fs-5', delay: 2000 });
        this.contactForm.reset();
        this.onNameInputBlur();
        this.onEmailInputBlur();
        this.onMessageInputBlur();
      },error: (err) =>{
        this.toastService.show("Something Went Wrong", { classname: 'bg-danger text-light fs-5', delay: 2000 });
      }
      });
  }
}
