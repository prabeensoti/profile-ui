import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
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
    this.isNameInputFocused = false;
  }

  onEmailInputFocus() {
    this.isEmailInputFocused = true;
  }

  onEmailInputBlur() {
    this.isEmailInputFocused = false;
  }

  onMessageInputFocus() {
    this.isMessageInputFocused = true;
  }

  onMessageInputBlur() {
    this.isMessageInputFocused = false;
  }
}
