import {Component, TemplateRef} from '@angular/core';
import {NgbToast} from "@ng-bootstrap/ng-bootstrap";
import {NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
import {ToastService} from "../service/toast.service";

@Component({
  selector: 'app-toast-container',
  imports: [
    NgbToast, NgTemplateOutlet, NgForOf, NgIf
  ],
  templateUrl: './toast-container.component.html',
  styleUrl: './toast-container.component.css',
  standalone: true
})
export class ToastContainerComponent {
  constructor(public toastService: ToastService) {
  }

  isTemplate(toast: any) {
    return toast.textOrTemplate instanceof TemplateRef;
  }
}
