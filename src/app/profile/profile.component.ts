import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ResumeService} from "../service/resume.service";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  profileUrl: string|null = null;
  expirationTime: number | null = null;
  constructor(private resumeService: ResumeService) {
    // Retrieve pre-signed URL and expiration time from session storage
    this.profileUrl = sessionStorage.getItem('profileUrl');
    this.expirationTime = sessionStorage.getItem('expirationTime') ? +sessionStorage.getItem('expirationTime')! : null;

    // Check if the session has expired
    if (this.isSessionExpired()) {
      this.makeApiCall();
    }

  }
  isSessionExpired(): boolean {
    // Check if expiration time is present and if the current time is greater than or equal to expiration time
    return this.expirationTime == null || Date.now() >= this.expirationTime * 1000;
  }

  makeApiCall() {
    // Make the HTTP request using the pre-signed URL
    this.resumeService.getResumeUri().subscribe({
      next: (response) => {
        this.profileUrl = response.preSignedUrl;
        this.expirationTime = response.expirationTime;
        if (typeof this.profileUrl === "string") {
          sessionStorage.setItem('profileUrl', this.profileUrl);
          sessionStorage.setItem('expirationTime', <string>this.expirationTime?.toString());
        }
        console.log('API call successful:', response);
      },error: (error) => {
        console.error('Error making API call:', error);
      }
    });
  }
}
