import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit{
  user: any = {};
  
  isEditing: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';
  skill: string = '';
  username: string = ''; // This can be set from a user login/session management service
  jobTitle: string = '';
  jobDescription: string = '';
  formData = new FormData();
  // successMessage: string = '';
  showSuccessMessage: boolean = false;
  skillData: any;

  constructor(
    private apiService: ApiService,
    // private route: ActivatedRoute,
    private router: Router
  ) { }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  onSubmit(form: NgForm) {
    debugger;
    console.log("Angular Form");

    if (form.valid) {
      this.formData.append('skill', form.value.skill);
      this.formData.append('username', form.value.username);

      this.apiService.searchSkill(this.formData).subscribe(
        (response: any) => {
          console.log('Search Completed!', response);
          this.successMessage = ''; // Set success message
          alert('Gig Found!');
          this.showSuccessMessage = true; // Show success message
          this.skillData = response;
          localStorage.setItem('skillData', JSON.stringify(this.skillData)); 
          this.router.navigate(['/result']); // Navigate to profile page
        },
        (error: { error: { message: any; }; }) => {
          console.error('Gig Error', error);
          this.errorMessage = error.error.message; // Set error message
          this.successMessage = ''; // Clear success message if there's an error
          alert('Gig not found! \nTry using different skill name!'); // Show alert and navigate to profile page
          this.router.navigate(['/profile']);
        }
      );
    }
    else{
      if(form.value.skill == "" && form.value.username == ""){
        alert("Please enter empty fields!");
      }
      else if(form.value.skill == ""){
        alert("Please provide Skill name!");
      }
      else if(form.value.username == ""){
        alert("Please provide valid username!");
      }
    }
  }

  ngOnInit(): void {
    debugger;
    console.log("Angular Form");

    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      this.user = JSON.parse(storedUserData);
    } 
    else {
      this.errorMessage = '';
      alert("Username is not provided");
      this.router.navigate(['/login']);
    } 
  }

  edit(): void {
    this.isEditing = true;
  }

  cancel(): void {
    this.isEditing = false;
  }

  save(): void {
    this.apiService.updateProfile(this.user.username, this.user).subscribe(
      (response: any) => {
        this.successMessage = '';
        alert("Profile updated successfully!")
        localStorage.setItem('userData', JSON.stringify(this.user));
        this.isEditing = false;
      },
      (error: any) => {
        console.error('Error updating profile:', error);
        this.errorMessage = '';
        alert("Error updating profile")
      }
    );
  }
}
