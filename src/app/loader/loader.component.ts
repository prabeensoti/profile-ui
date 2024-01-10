import {booleanAttribute, Component, Input, OnInit} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent implements OnInit{

  @Input({transform: booleanAttribute, required: true}) hideMe ?: boolean;

  ngOnInit(): void {
    console.log(this.hideMe);
  }
}
