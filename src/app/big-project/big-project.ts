import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-big-project',
  imports: [CommonModule],
  template: `
    <div class="m-16"> 
      <div class="bg-[#265F5B] 
              h-auto min-h-[60vh] md:h-[70vh] lg:h-[80vh]
              flex flex-col md:flex-row 
              items-center 
              rounded-xl overflow-hidden inset-shadow-sm inset-shadow-indigo-950/50
              mx-auto max-w-7xl" 
              >
        <div class="w-full md:w-2/5
                    p-8 md:p-12 lg:pl-20 lg:pr-0
                    flex flex-col items-center md:items-start 
                    justify-center 
                    text-center md:text-left">
        <h2 class="text-violet-50 text-4xl md:text-5xl font-bold mb-4 md:mb-5 text-nowrap">UofT Code Buddy</h2>
        <p class="text-violet-100 text-lg md:text-xl/snug mb-6 sans-serif-subtitle-text lg:pr-20">AI extension provides plagiarism-free tutoring feedback to programming students </p>
        
        <a href="/" class="bg-amber-300 mt-5 px-8 py-3 rounded-full text-center font-semibold text-gray-800 hover:bg-amber-400 transition-colors duration-200 w-fit">Learn More</a>
      </div>

      <div
        class="bg-[url(/assets/capstone-mockup.png)] 
              w-full md:w-3/5 
              h-[40vh] md:h-full 
              bg-contain bg-center bg-no-repeat"
      >
      </div>
    </div>
  </div>
  `,
  styleUrl: './big-project.css'
})
export class BigProjectComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = 'My Capstone Project Title';
  @Input() description: string = 'A brief, compelling description of your capstone project.';
  @Input() tools: string[] = []; // An array for your badges, e.g., ['Angular', 'TypeScript', 'Node.js']
  @Input() learnMoreLink: string = '#'; // The URL for the "Learn More" button
}
