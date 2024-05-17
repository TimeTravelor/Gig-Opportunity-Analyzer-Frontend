import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TrialProject';

  isLoggedIn: boolean = false; // Initially user is not logged in
  
  constructor(private router: Router) {}


  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/contactus']);
  }
}


