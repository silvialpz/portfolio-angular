import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-section',
  imports: [CommonModule],
  template: `
  <section class="serif-text bg-violet-200 flex justify-center inset-shadow-sm inset-shadow-indigo-900/50">
    <div class="p-8 ">
      <p>Reach me by email at hello&#64;silvialopez.me ...or find me elsewhere:</p>
      <div class="flex flex-row space-x-3">
    <div class="flex flex-col space-y-3">
      <a href="https://www.linkedin.com/in/silvia-lopez-1a9468204/" target="_blank" class="bento-box sans-serif-subtitle-text bg-violet-200">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="linkedin icon" class="w-10 h-10">
        <p>linkedin.com/in/silvialpz/</p>
      </a>

      <a href="https://www.instagram.com/silviacarolopez" target="_blank" class="bento-box sans-serif-subtitle-text bg-violet-200">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="instagram icon" class="w-10 h-10">
        <p>silviacarolopez</p>
      </a>
    </div>
    

    <div class="justify-items-start bento-box bg-violet-200 sans-serif-subtitle-text items-center">
      <a href="https://github.com/silvialpz" target="_blank" class="pr-8">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github icon" class="w-10 h-10">
        <p>silvialpz</p>
      </a>
      <img src="http://ghchart.rshah.org/silvialpz" alt="Name Your GitHub chart">
    </div>
    </div>
    </div>
    
    
    </section>
  `,
  styleUrl: './contact-section.css'
})
export class ContactSection {
  @Output() closePanel = new EventEmitter<void>();
  close() { this.closePanel.emit(); }
}
