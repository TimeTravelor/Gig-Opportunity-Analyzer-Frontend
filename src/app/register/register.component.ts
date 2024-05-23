import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contactus',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class ContactusComponent {

  router: any;
  errorMessage: any;
  successMessage: string = ''; // New property to hold success message
  showSuccessMessage: boolean = false; // Boolean flag to control success message visibility
  formData = new FormData(); // Use FormData to send form-data
  newsletter: boolean = false;

  constructor(private apiService: ApiService) { }

  defaultCountry = 'PK';
  defaultVersion = "Free";
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
      this.formData.append('contactNo', form.value.cn);
      this.formData.append('email', form.value.email);
      this.formData.append('country', form.value.country);
      this.formData.append('gender', form.value.gender);
      this.formData.append('username', form.value.userdetails.username);
      this.formData.append('password', form.value.userdetails.password);
      this.formData.append('linkedIn', form.value.lp);
      this.formData.append('search_version', form.value.version);
      this.formData.append('newsLetter', this.newsletter ? '1' : '0');

      this.apiService.signupFormData(this.formData).subscribe(
        (response: any) => {
          console.log('Signup successful:', response);
          this.successMessage = ''; // Set success message
          this.showSuccessMessage = true; // Show success message
          alert('User profile has been created!');
          this.router.navigate(['/login']); // navigating to login page
        },
        (        error: { error: { message: any; }; }) => {
          console.error('Signup error:', error);
          this.errorMessage = error.error.message; // Set error message
          this.successMessage = ''; // Clear success message if there's an error
        }
      );
    }
    else{
      if(form.value.userdetails.username == "" && form.value.userdetails.password == "" && form.value.email){
        alert("Please enter empty fields!");
      }
      else if(form.value.userdetails.username == ""){
        alert("Please provide username!");
      }
      else if(form.value.userdetails.password == ""){
        alert("Please provide valid password!");
      }
      else if(form.value.email == ""){
        alert("Please provide valid email!");
      }
    }
    }
}

  // msgAlert(){
  //   alert("User has been created!")
  // }

