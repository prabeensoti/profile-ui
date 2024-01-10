import { Routes } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {ResumeComponent} from "./resume/resume.component";
import {BlogComponent} from "./blog/blog.component";
import {ContactComponent} from "./contact/contact.component";

export const routes: Routes = [
  {path: 'home', component: ProfileComponent , pathMatch: "full"},
  {path: 'resume', component: ResumeComponent , pathMatch: "full"},
  {path: 'blog', component: BlogComponent , pathMatch: "full"},
  {path: 'contact', component: ContactComponent , pathMatch: "full"},
  {path: '' , redirectTo: 'home', pathMatch: "full"}
];
