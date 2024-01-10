import { Component } from '@angular/core';
import {NgbCollapse, NgbNav} from "@ng-bootstrap/ng-bootstrap";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    NgbNav,
    NgbCollapse,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isCollapsed: boolean = true;

}
