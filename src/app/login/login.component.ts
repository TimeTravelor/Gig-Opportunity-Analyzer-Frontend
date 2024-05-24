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
          const errorMessage = JSON.stringify(error.error); // Set error message
          const error1 = JSON.parse(errorMessage);
          if(error1.error == 'Password is not valid'){
            alert("Please Enter valid Password, with Uppercase,Lowercase and Special Charachter");
          }else if (error1.error == 'Email is not valid'){
           alert('Please enter a valid email');
          }else if (error1.error == 'User not found'){
            alert('User Not Found');
          }else if (error1.error == 'Invalid Password'){
            alert('Invalid Password');
        }
          this.successMessage = ''; // Clear success message if there's an error
        }
      );
    }
  }
}
