import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  

  counterU: number = 0;
  counterC: number = 0;
  targetNumberU: number = 10; 
  targetNumberC: number = 11;
  intervalId: any;

  ngOnInit() {
    this.startCounterUser();
    this.startCounterCountry();
  }

  startCounterUser(): void {
    this.counterU = 0;
    this.intervalId = setInterval(() => {
      this.counterU++;
      if (this.counterU >= this.targetNumberU) {
        this.counterU = this.targetNumberU;
        clearInterval(this.intervalId);
      }
    }, 100);
  }

  startCounterCountry(): void {
    this.counterC = 0;
    this.intervalId = setInterval(() => {
      this.counterC++;
      if (this.counterC >= this.targetNumberC) {
        this.counterC = this.targetNumberC;
        clearInterval(this.intervalId);
      }
    }, 100);
  } 

}
