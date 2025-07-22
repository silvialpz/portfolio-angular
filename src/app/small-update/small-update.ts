import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-small-update',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="bg-gray-50 p-4 rounded-lg shadow-sm flex flex-col items-start">
      <img [src]="imageUrl" alt="{{ title }}" class="w-full rounded-md mb-3" />
      <h3 class="text-lg font-semibold mb-1">{{ title }}</h3>
      <p class="text-gray-600 text-sm leading-snug">{{ description }}</p>
    </article>
  `,
  styleUrl: './small-update.css'
})
export class SmallUpdateComponent {
  @Input() title: string = 'Small Update Title';
  @Input() imageUrl: string = 'https://placehold.co/600x400/E0E0E0/333333?text=Big+Update+Image'; // Placeholder image
  @Input() description: string = 'This is a detailed description of a life update. It will contain more text and an associated image to highlight the achievement.';
}
