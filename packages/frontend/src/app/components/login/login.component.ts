import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface LoginFormData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output() submit = new EventEmitter<LoginFormData>();

  formData: LoginFormData = {
    email: '',
    password: ''
  };

  isLoading = false;
  error: string | null = null;

  onSubmit() {
    this.submit.emit(this.formData);
  }
} 