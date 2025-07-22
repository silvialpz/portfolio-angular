import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Important for standalone components

@Component({
  selector: 'app-big-update', // How this component will be used in HTML: <app-big-update></app-big-update>
  standalone: true, // This component is self-contained
  imports: [CommonModule], // Common Angular directives
  template: `
    <article class="p-6 rounded-lg shadow-md overflow-hidden">
      <img [src]="imageUrl" alt="{{ title }}" class="w-full rounded-md mb-4" />
      <h3 class="text-5xl font-bold mb-2">{{ title }}</h3>
      <p class="leading-relaxed">{{ description }}</p>
    </article>
  `,
  styles: [] 
})
export class BigUpdateComponent {
  @Input() title: string = 'Big Update Title';
  @Input() imageUrl: string = 'https://placehold.co/600x400/E0E0E0/333333?text=Big+Update+Image'; // Placeholder image
  @Input() description: string = 'This is a detailed description of a significant career update. It will contain more text and an associated image to highlight the achievement.';
}
