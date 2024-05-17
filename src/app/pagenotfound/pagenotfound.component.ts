import { Component } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent {
  faqs = [
    { question: '1. Is Gig Opportunity Analyzer a freelance platform?', answer: 'Gig Opportunity Analyzer is web-based platform that helps freelancers find the best gigs tailored to their skills and preferences from various marketplaces.', showAnswer: false },
    { question: '2. How does Gig Opportunity Analyzer works?', answer: 'Gig Opportunity Analyzer works by analyzing freelancers\' skills and preferences to match them with the best gig opportunities across various platforms.', showAnswer: false },
    { question: '3. Which freelance platform does Gig Opportunity Analyzer support?', answer: 'Gig Opportunity Analyzer supports multiple freelance platforms including but not limited to Upwork, Fiverr, and Freelancer.', showAnswer: false },
    { question: '4. Is there a free trial available for premium version?', answer: 'Yes, Gig Opportunity Analyzer offers a free trial for the premium version.', showAnswer: false },
    { question: '5. Can I cancel my subscription at any time?', answer: 'Yes, you can cancel your subscription at any time without any additional charges.', showAnswer: false }
  ];

  toggleAnswer(faq: { showAnswer: boolean; }) {
    faq.showAnswer = !faq.showAnswer;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
