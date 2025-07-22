import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-detail-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="isOpen">
      <div
        style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.1); z-index: 40;"
        (click)="closePanel()"
      >
        <!-- This div will act as the overlay. No styling, just a block element. -->
      </div>

      <div
        style="position: fixed; top: 0; right: 0; height: 100%; width: 300px; background-color: lightgray; z-index: 50; padding: 20px; overflow-y: auto;"
      >
        <!-- Close Button -->
        <button
          (click)="closePanel()"
          style="position: absolute; top: 10px; right: 10px; font-size: 24px; cursor: pointer; background: none; border: none;"
        >
          &times;
        </button>

        <!-- Content Area -->
        <div style="padding-top: 30px;">

          <div *ngIf="articleId === 'graduated'">
            <img src="/assets/graduated.jpg" alt="Graduation" />
            <h2>graduated from computer engineering!</h2>
            <p>graduated!</p>
          </div>

          <div *ngIf="articleId === 'code-camp'">
            <img src="/assets/code-camp.gif" alt="HER CODE CAMP" />
            <h2>joined her code camp as head of logistics</h2>
            <p>
              Taking on the role of Head of Logistics for HER CODE CAMP was an incredibly rewarding experience. This initiative is dedicated to empowering women in technology, and my role involved coordinating all event logistics, managing resources, and ensuring a seamless and inspiring experience for all participants.
            </p>
          </div>

          <div *ngIf="articleId === 'siggraph'">
            <img src="/assets/siggraph2025.png" alt="SIGGRAPH 2025" />
            <h2>going to vancouver for siggraph 2025</h2>
            <p>
              I'm excited to be a student volunteer at SIGGRAPH 2025 in Vancouver for the third and final time! It's an incredible opportunity to engage with cutting-edge computer graphics, interactive techniques, and network with leading professionals in the field. Each year brings new insights and inspiration.
            </p>
          </div>

          <div *ngIf="articleId === 'superhost'">
            <img src="/assets/rosamanda.png" alt="Airbnb Superhost" />
            <h2>became an airbnb superhost</h2>
            <p>
              Achieving Superhost status on Airbnb within the first five months of operating was a proud moment! This recognition reflects my commitment to providing exceptional guest experiences, maintaining high standards of hospitality, and ensuring comfortable stays for travelers.
            </p>
          </div>

          <div *ngIf="articleId === 'first-aid'">
            <img src="/assets/toronto-first-aid.png" alt="Toronto First Aid" style="width: 100%; height: auto; display: block;" />
            <h2>administrator for toronto first aid</h2>
            <p>
              I started as an administrator for Toronto First Aid, where I'm focusing on bridging language gaps and fostering community safety through accessible first aid training. It's a rewarding role that combines my organizational skills with a passion for community service and public health.
            </p>
          </div>

          <div *ngIf="!articleId">
            <p>Please select an article to view its details.</p>
          </div>

        </div>
      </div>
    </ng-container>
  `,
  styleUrl: './detail-panel.css'
})
export class DetailPanelComponent {
  @Input() isOpen: boolean = false; 
  @Input() articleId: any | null = null;

  @Output() close = new EventEmitter<void>(); // Will tell App component (parent of this) when panel needs to be closed

  closePanel() {
    this.close.emit();
  }
}
