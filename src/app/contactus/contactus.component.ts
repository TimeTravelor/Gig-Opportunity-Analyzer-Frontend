import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  defaultCountry = 'PK';
  username = '';
  genders = [
    {id : '1' , value : 'Male'},
    {id : '2' , value : 'Female'}
  ]
  defaultGender = "Female";
  submitted = false;
  formData = {
    fullname: '',
    dob: '',
    email: '',
    country: '',
    gender: '',
    username: '',
    password: '',
    profile: ''
  }

  onSubmit(form:NgForm){
    console.log(form)
    this.submitted = true
    this.formData.fullname = form.value.fullname;
    
  }
}
