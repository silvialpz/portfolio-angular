import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BigUpdateComponent } from './big-update/big-update';
import { SmallUpdateComponent } from './small-update/small-update';
import { DetailPanelComponent } from './detail-panel/detail-panel';
import { BigProjectComponent } from './big-project/big-project';

interface Article {
  // title: string;
  // imageUrl: string;
  // description: string;
  id: string;
}

@Component({
  selector: 'app-root',
  standalone: true, // Important: Makes this component self-contained
  imports: [RouterOutlet, BigUpdateComponent, SmallUpdateComponent, DetailPanelComponent, BigProjectComponent], // RouterOutlet is typically used for routing, keep it for now.
  template: `
    <main class="min-h-screen p-8">
      <header class="mb-1 text-center flex">
          <h1 class="text-6xl font-extrabold" style="text-transform: uppercase;">SILVIA LOPEZ</h1>
        </header>
      <!-- This will be the main container for your two columns -->
      <div class="mx-auto w-full">

        <div class="grid grid-cols-1 md:grid-cols-8 gap-3">

          <!-- 6-Column Banner (Wired-like label) -->
          <div class="md:col-span-6 border-t-4 mt-5">
            <div class="bg-indigo-800 text-violet-100 px-3 py-1 flex items-center justify-start w-min">
              <h2 class="text-sm font-semibold text-center whitespace-nowrap">techy updates</h2>
            </div>
          </div>

          <!-- 2-Column Banner (Wired-like label) -->
          <div class="md:col-span-2 border-t-4 mt-5">
            <div class="bg-indigo-800 text-violet-100 px-3 py-1 flex items-center justify-start w-min">
              <h2 class="text-sm font-semibold text-center whitespace-nowrap">life's side quests</h2>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-8">  <!-- setting up a 3 column grid and let big updates span two columns -->
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
                description="Now and aspiring Technical Director seeking entry-level role in film/VFX. "
                (click)="openDetailPanel({ id: 'graduated' })"
              ></app-big-update>
          </div>

          <!-- Right Column: Small Updates (General Life) -->
          <div class="md:col-span-2">
            <!-- Small update components will go here -->
            
            <app-small-update
              title="Became an Airbnb Superhost in the First Five Months"
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
      <section>
          <div class="md:col-span-6 border-t-4 mt-5">
            <div class="bg-indigo-800 text-violet-100 px-3 py-1 flex items-center justify-start w-min">
              <h2 class="text-sm font-semibold text-center whitespace-nowrap">Projects</h2>
            </div>
          </div>
        

        <app-big-project></app-big-project>
      </section>

      <section class="h-screen">
          <div class="md:col-span-6 border-t-4 ">
            <div class="bg-indigo-800 text-violet-100 px-3 py-1 flex items-center justify-start w-min">
              <h2 class="text-sm font-semibold text-center whitespace-nowrap">Art</h2>
            </div>
          </div>

          <div class="flex-grow py-4 flex">
            <div class="w-80 p-4 shrink-0 whitespace-normal">
              <p class="text-indigo-800 text-lg leading-relaxed">I love drawing. I have been developing my skills through youtube videos and self study passionately since middle school. Here's what I have been working on.</p>
            </div>
            
              <div class="w-min items-center justify-center">
                <h2 class="text-4xl">Urban Landscapes</h2>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-2 whitespace-normal">

                <div class="col-span-1 flex flex-col items-center">
                  <img src="/assets/window.jpeg" alt="View from a window overlooking a city at dusk" class="max-h-[300px] object-contain rounded-md shadow-md">
                </div>

                <div class="col-span-1 flex flex-col items-center ml-6">
                  <p class="text-sm mb-2 text-center">Views from my college apartment</p>
                  <img src="/assets/groceries.JPG" alt="Street with a bicycle, buildings, and a crosswalk" class="max-h-[250px] object-contain rounded-md shadow-md">
                </div>

                <div class="col-span-full md:col-span-2 flex flex-col items-center">
                  <p class="text-sm mt-2 text-center">Rainy day in Niagara Falls</p>
                  <img src="/assets/niagara.jpeg" alt="Movieland Midway building with neon signs on a rainy street" class="max-h-[400px] object-contain rounded-md shadow-md">
                </div>
              </div>
              

          </div>
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
