import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  errorMessage: any;
  successMessage: string = '';
  showSuccessMessage: boolean = false;
  formData = new FormData();
  userData: any;

  constructor(private apiService: ApiService, private router: Router) { }

  onSubmit(form: NgForm) {
    debugger;
    console.log("Angular Form");

    if (form.valid) {
      this.formData.append('email', form.value.userdetails.email);
      this.formData.append('password', form.value.userdetails.password);

      this.apiService.login(this.formData).subscribe(
        (response: any) => {
          console.log('Login successful:', response);
          this.successMessage = ''; // Set success message
          alert('Login successful!');
          this.showSuccessMessage = true; // Show success message
          this.userData = response;
          localStorage.setItem('userData', JSON.stringify(this.userData)); 
          this.router.navigate(['/profile']); // Navigate to profile page
        },
        (error: { error: { message: any; }; }) => {
          console.error('Login error:', error);
          this.errorMessage = error.error.message; // Set error message
          this.successMessage = ''; // Clear success message if there's an error
          alert('User account does not exist!'); // Show alert and navigate to contact us page
          this.router.navigate(['/contactus']);
        }
      );
    }
  }
}
