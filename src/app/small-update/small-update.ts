import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-small-update',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="p-2 rounded-lg flex w-full items-center"> 
      <div class="flex-grow pr-4"> 
        <h3 class="text-lg/6 font-semibold mb-1 serif-title-text">{{ title }}</h3>
      </div>
      <img [src]="imageUrl" alt="{{ title }}" class="w-auto h-25 object-contain rounded-md" /> 
    </article>
  `,
  styleUrl: './small-update.css'
})
export class SmallUpdateComponent {
  @Input() title: string = 'Small Update Title';
  @Input() imageUrl: string = 'https://placehold.co/600x400/E0E0E0/333333?text=Big+Update+Image'; // Placeholder image
  @Input() description: string = 'This is a detailed description of a life update. It will contain more text and an associated image to highlight the achievement.';
}
