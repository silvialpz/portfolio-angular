import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Important for standalone components

@Component({
  selector: 'app-big-update', // How this component will be used in HTML: <app-big-update></app-big-update>
  standalone: true, // This component is self-contained
  imports: [CommonModule], // Common Angular directives
  template: `
    <article class="p-2 rounded-lg overflow-hidden">
      <img [src]="imageUrl" alt="{{ title }}" class="w-full rounded-md" />
      <h3 class="text-5xl font-bold py-1">{{ title }}</h3>
      <p class="text-lg/5 mb-1 sans-serif-subtitle-text">{{ description }}</p>
    </article>
  `,
  styles: [] 
})
export class BigUpdateComponent {
  @Input() title: string = 'Big Update Title';
  @Input() imageUrl: string = 'https://placehold.co/600x400/E0E0E0/333333?text=Big+Update+Image'; // Placeholder image
  @Input() description: string = 'This is a detailed description of a significant career update. It will contain more text and an associated image to highlight the achievement.';
}
