import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  bestGig: any = {};
  successMessage: string = '';
  errorMessage: string = '';
  
  constructor(private apiService: ApiService, private router: Router) { }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    debugger;
    console.log("Angular Form");

    const storedSkillData = localStorage.getItem('skillData');
    if (storedSkillData) {
      this.bestGig = JSON.parse(storedSkillData);
      console.log(this.bestGig.jobTitle);
    } 
    else {
      this.errorMessage = '';
      alert("Skill not found");
      this.router.navigate(['/profile']);
    } 
  }
}


  