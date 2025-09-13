import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent} from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    InputComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
