import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="isOpen">
      <div
        style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 40;"
        class="backdrop-blur-sm"
        (click)="closePanel()"
      >
        <!-- This div will act as the overlay. No styling, just a block element. -->
      </div>

      <div
        style="position: fixed; top: 0; right: 0; height: 100%; z-index: 50; padding: 20px; overflow-y: auto;"
        class="w-1/2 bg-violet-100"
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
            <h2>Graduated!</h2>
            <p>Now that I’m done with Computer Engineering and it’s summer and the UofT Campus looks beautiful I want to take a moment to reflect on the places and moments that I cherish most from my five years here.</p>

            <h3>Favourite library: Knox College Library</h3>
            <p>Although technically not a UofT library, it’s got a beautiful hall right next to king’s college circle with stained glass, antique desk lamps, and high chairs.</p>
            
            <h3>Favourite Classes I Took:</h3>
            <p>Computer Graphics taught by David Levin and Alec Jacobson</p>
            <p>Digital Signal Processing by Wei Yu. I also had the best TA during my time there called Aaron.</p>
            
            <h3>Eng Building I Spent the Most Time In: Galbraith</h3>
            <p>Most lectures and almost ALL upper year labs were here.</p>
            
            <h3>Library I Spent the Most Time In: St Mike's Kelly Library</h3>
            <p>Kelly was across the street from where I lived so it was too convenient to go there despite the fact it is probably the university’s ugliest brutalist library beating out Robarts. Here is an article from 2022 that commemorates the time it became a film set for The Handmaid’s Tale around the time of midterms for that semester. </p>
            <a href="https://www.boundarynews.com/post/kelly-library-deemed-too-depressing-for-handmaid-s-tale-location">Kelly Library Deemed "Too Depressing" for Handmaid’s Tale Location</a>
          
            <h3>Hardest Class I Took:</h3>
            <p>Computer Architecture taught by Mark Jeffrey</p>
            
            <h3>Favourite Quad: Victoria College</h3>
            <p>It became a routine to pick up a latte and sit under the ivy arbor. it’s especially beautiful in the spring and summer.</p>
          
            <h3>Favourite Restaurant Near School: Magic Noodle</h3>
            <p>On harbord, short walk from robarts. The Dan Dan Noodles at Sunny’s Chinese is very popular online but the Dan Dan noodles here are superior.</p>

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
