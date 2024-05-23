import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { NgxUiLoaderComponent, NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TrialProject';

  isLoggedIn: boolean = false; // Initially user is not logged in
  cdr: any;
  
  constructor(private router: Router, private ngxLoader: NgxUiLoaderService) {}

  ngOnInit() {
    this.checkLoginStatus();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.ngxLoader.start();
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.ngxLoader.stop();
      }
    });
  }

  checkLoginStatus(): void {
    this.isLoggedIn = !!localStorage.getItem('authToken');
  }

  logout() { // Remove token from local storage
    localStorage.removeItem('authToken');
    this.isLoggedIn = false;
    this.cdr.detectChanges(); // Trigger change detection manually
    this.router.navigate(['/register']);
  }

}


