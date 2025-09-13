import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: false
})
export class ButtonComponent  implements OnInit {
  @Input() label = 'Guardar';
  @Input() disabled = false;
  @Input() expand: 'block' | 'full' | undefined = 'block';
  constructor() { }

  ngOnInit() {}

}
