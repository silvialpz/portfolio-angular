import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BigUpdateComponent } from './big-update/big-update';
import { SmallUpdateComponent } from './small-update/small-update';
import { DetailPanelComponent } from './detail-panel/detail-panel';


interface Article {
  // title: string;
  // imageUrl: string;
  // description: string;
  id: string;
}

@Component({
  selector: 'app-root',
  standalone: true, // Important: Makes this component self-contained
  imports: [RouterOutlet, BigUpdateComponent, SmallUpdateComponent, DetailPanelComponent], // RouterOutlet is typically used for routing, keep it for now.
  template: `
    <main class="min-h-screen p-8">
      <!-- This will be the main container for your two columns -->
      <div class="max-w-7xl mx-auto w-full">
        <header class="mb-12 text-center">
          <h1 class="text-6xl font-extrabold" style="text-transform: uppercase;">SILVIA LOPEZ</h1>
          <p class="text-lg mt-2 opacity-80">some updates on what i've been up to</p>
        </header>

        <!-- This div will hold our two columns -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">  <!-- setting up a 3 column grid and let big updates span two columns -->
          <!-- Left Column: Big Updates (Career Focused) -->
          <div class="md:col-span-2 bg-white p-8 rounded-xl shadow-lg">
            <!-- Big update components will go here -->
             <div class="">
              <app-big-update
                title="completed my computer engineering degree at uoft"
                imageUrl="/assets/graduated.jpg"
                description=""
                (click)="openDetailPanel({ id: 'graduated' })"
              >
              </app-big-update>
              <app-big-update
                title="joined HER CODE CAMP as head of logistics"
                imageUrl="/assets/code-camp.gif"
                description=""
                (click)="openDetailPanel({ id: 'code-camp' })"
              >
              </app-big-update>
              </div>
          </div>

          <!-- Right Column: Small Updates (General Life) -->
          <div class="md:col-span-1 bg-white p-8 rounded-xl shadow-lg">
            <!-- Small update components will go here -->
            <app-small-update
              title="going to vancouver to be a student volunteer a third and final time"
              imageUrl="/assets/siggraph2025.png"
              description=""
              (click)="openDetailPanel({ id: 'siggraph' })"
            >
            </app-small-update>
            <app-small-update
              title="became an airbnb superhost in the first five months of operating"
              imageUrl="/assets/rosamanda.png"
              description=""
              (click)="openDetailPanel({ id: 'superhost' })"
            >
            </app-small-update>
            <app-small-update
              title="bridging language gaps and fostering community safety as an administrator for toronto first aid"
              imageUrl="/assets/toronto-first-aid.png"
              description=""
              (click)="openDetailPanel({ id: 'first-aid' })"
            >
            </app-small-update>
          </div>
        </div>
      </div>
    </main>

    <app-detail-panel
      [isOpen]="isDetailPanelOpen"
      [articleId]="selectedArticleId"
      (close)="closeDetailPanel()"
    ></app-detail-panel>

  `,
  styleUrl: './app.css' // Ensure this points to your main CSS file
})
export class App {
  title = 'portfolio';

  isDetailPanelOpen: boolean = false;
  selectedArticleId: string | null = null; 

  openDetailPanel(article: Article) {
    this.isDetailPanelOpen = true;
    this.selectedArticleId = article.id;
  }

  closeDetailPanel() {
    this.isDetailPanelOpen = false;
    this.selectedArticleId = null;
  }

}
