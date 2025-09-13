import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonItem } from "@ionic/angular/standalone";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: false
})
export class InputComponent  implements OnInit {

  @Input() label = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() control!: FormControl;
  @Input() placeholder: string = '';
  constructor() { }

  ngOnInit() {}

}
