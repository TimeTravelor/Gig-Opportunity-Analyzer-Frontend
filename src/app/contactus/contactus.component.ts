import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  router: any;
  errorMessage: any;
  successMessage: string = ''; // New property to hold success message
  showSuccessMessage: boolean = false; // Boolean flag to control success message visibility
  formData = new FormData(); // Use FormData to send form-data

  constructor(private apiService: ApiService) { }

  defaultCountry = 'PK';
  username = '';
  genders = [
    {id : '1' , value : 'Male'},
    {id : '2' , value : 'Female'}
  ]
  defaultGender = "Female";
  submitted = false;

  onSubmit(form:NgForm){
    debugger;
    console.log("Angular Form")

    if (form.valid) {
      this.formData.append('fullName', form.value.fullname);
      this.formData.append('age', form.value.age);
      this.formData.append('contactno', form.value.cn);
      this.formData.append('email', form.value.email);
      this.formData.append('country', form.value.country);
      this.formData.append('gender', form.value.gender);
      this.formData.append('username', form.value.userdetails.username);
      this.formData.append('password', form.value.userdetails.password);
      this.formData.append('linkedIn', form.value.lp);

      this.apiService.signupFormData(this.formData).subscribe(
        (response: any) => {
          console.log('Signup successful:', response);
          this.successMessage = 'User profile has been created!'; // Set success message
          this.showSuccessMessage = true; // Show success message
          setTimeout(() => {this.router.navigate(['/login']);}, 2000); // 2 seconds delay before navigating to login page
        },
        (        error: { error: { message: any; }; }) => {
          console.error('Signup error:', error);
          this.errorMessage = error.error.message; // Set error message
          this.successMessage = ''; // Clear success message if there's an error
        }
      );
    }
  }

  // msgAlert(){
  //   alert("User has been created!")
  // }
}
