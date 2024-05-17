import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
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

  constructor(
    private apiService: ApiService,
    // private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      this.user = JSON.parse(storedUserData);
      this.apiService.getProfile(this.user.username).subscribe(
        (data: any) => {
          this.user = data;
        },
        (error: any) => {
          console.error('Error fetching profile:', error);
          this.errorMessage = 'Error fetching profile';
        }
      );
    } else {
      this.errorMessage = 'Username is not provided';
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
        this.successMessage = 'Profile updated successfully!';
        localStorage.setItem('userData', JSON.stringify(this.user));
        this.isEditing = false;
      },
      (error: any) => {
        console.error('Error updating profile:', error);
        this.errorMessage = 'Error updating profile';
      }
    );
  }
}
