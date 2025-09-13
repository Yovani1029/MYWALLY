import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get nombreControl(): FormControl {
    return this.form.get('nombre') as FormControl;
  }

  get emailControl(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }

  onRegister() {
    if (this.form.invalid) {
      console.log('❌ Formulario inválido');
      return;
    }

    const user = this.form.value;

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));

    console.log('✅ Usuario registrado:', user);
    alert('Registro exitoso (guardado en LocalStorage)');
    this.form.reset();
  }
}
