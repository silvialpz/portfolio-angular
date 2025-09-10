import { Component } from '@angular/core';
import { BigUpdateComponent } from './big-update/big-update';
import { SmallUpdateComponent } from './small-update/small-update';
import { DetailPanelComponent } from './detail-panel/detail-panel';
import { BigProjectComponent } from './big-project/big-project';
import { LabelComponent } from './label/label';
import { ArtSection } from './art-section/art-section';

interface Article {
  // title: string;
  // imageUrl: string;
  // description: string;
  id: string;
}

@Component({
  selector: 'app-root',
  standalone: true, // Important: Makes this component self-contained
  imports: [BigUpdateComponent, SmallUpdateComponent, DetailPanelComponent, BigProjectComponent, LabelComponent, ArtSection], // RouterOutlet is typically used for routing, keep it for now.
  template: `
    <main class="min-h-screen p-8">
      <header class="mb-1 text-center flex items-end justify-between text-lg">
          <div class="flex justify-around flex-grow">
            <a href="#projectSection" class="sans-serif-subtitle-text">Projects</a>
            <a href="#artSection" class="sans-serif-subtitle-text">Art</a>
          </div>
          <a class="text-5xl font-extrabold" style="text-transform: uppercase;" href="/">SILVIA LOPEZ</a>
          <div class="flex-grow justify-around flex">
            <a class="sans-serif-subtitle-text" href="/assets/Silvia_Lopez_July_2025_Resume_TD.pdf" target="_blank">Resume</a>
            <a class="sans-serif-subtitle-text" href="https://bento.me/silvialopez" target="_blank">Contact</a>
          </div>
        </header>
      <!-- This will be the main container for your two columns -->
      <div class="mx-auto w-full">

        <div class="grid grid-cols-1 md:grid-cols-8 gap-3 mt-5">

          <!-- 6-Column Banner (Wired-like label) -->
          <div class="md:col-span-6">
            <app-label labelText="techy updates"></app-label>
          </div>


          <!-- 2-Column Banner (Wired-like label) -->
          <div class="md:col-span-2">
            <app-label labelText="life's side quests"></app-label>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-8 pb-10">  <!-- setting up a 3 column grid and let big updates span two columns -->
          <!-- Left Column: Big Updates (Career Focused) -->
          <div class="md:col-span-2">
            <!-- Big update components will go here -->
              <app-big-update
              title=""
              imageUrl="/assets/siggraph2025.png"
              description="Going to Vancouver to be a Student Volunteer a 3rd and Final Time"
              (click)="openDetailPanel({ id: 'siggraph' })"
              ></app-big-update>

              <app-big-update
                title=""
                imageUrl="/assets/code-camp.gif"
                description="Joined HER CODE CAMP as Head of Logistics"
                (click)="openDetailPanel({ id: 'code-camp' })"
              ></app-big-update>
          </div>

          <div class="md:col-span-4">
            <app-big-update
                title="Completed My Computer Engineering Degree at UofT"
                imageUrl="/assets/graduated.jpg"
                description="Now an aspiring Technical Director seeking entry-level role in film/VFX. "
                (click)="openDetailPanel({ id: 'graduated' })"
              ></app-big-update>
          </div>

          <!-- Right Column: Small Updates (General Life) -->
          <div class="md:col-span-2">
            <!-- Small update components will go here -->
            
            <app-small-update
              title="First Five Months of hosting on Airbnb and I'm now a Superhost"
              imageUrl="/assets/rosamanda.png"
              description=""
              (click)="openDetailPanel({ id: 'superhost' })"
            >
            </app-small-update>
            <app-small-update
              title="Bridging Language Gaps as an Administrator for Toronto First Aid"
              imageUrl="/assets/toronto-first-aid.png"
              description=""
              (click)="openDetailPanel({ id: 'first-aid' })"
            >
            </app-small-update>
          </div>
        </div>
      </div>

      <!-- Projects will go here -->
      <section id="projectSection">
        <app-label labelText="Projects"></app-label>
        <app-big-project></app-big-project>
      </section>

      <section id="artSection" class="h-[90vh] flex flex-col">
        <app-label labelText="Art"></app-label>
        <app-art-section></app-art-section>

      </section>

      
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
