import { Component } from '@angular/core';
import { BigUpdateComponent } from './big-update/big-update';
import { SmallUpdateComponent } from './small-update/small-update';
import { DetailPanelComponent } from './detail-panel/detail-panel';
import { BigProjectComponent } from './big-project/big-project';
import { LabelComponent } from './label/label';

interface Article {
  // title: string;
  // imageUrl: string;
  // description: string;
  id: string;
}

@Component({
  selector: 'app-root',
  standalone: true, // Important: Makes this component self-contained
  imports: [BigUpdateComponent, SmallUpdateComponent, DetailPanelComponent, BigProjectComponent, LabelComponent], // RouterOutlet is typically used for routing, keep it for now.
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
            <a class="sans-serif-subtitle-text">Contact</a>
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

        <div id="mainContentWrapper" class="flex-grow py-4 flex h-full serif-text">

          <div id="horizontalScrollContainer" class="flex overflow-x-auto whitespace-nowrap flex-grow">

            <div class="w-80 p-4 shrink-0 whitespace-normal h-min">
              <p class="text-lg leading-relaxed">I love drawing. Here's what I have been working on.</p>
              <p class="text-right pt-5 sans-serif-subtitle-text">>>>>>>>>>>>></p>
            </div>
            <div class="inline-block w-full md:w-[80vw] lg:w-[50vw] h-full rounded-lg ast:mr-0 align-top shrink-0">
              <!-- <h3 class="text-2xl font-bold mb-6 text-blue-800 text-center">Urban Landscapes</h3>  -->
              <div class="grid grid-cols-1 md:grid-cols-2 whitespace-normal">

                <div class="col-span-1 flex flex-col items-center">
                  <img src="/assets/window.jpeg" alt="View from a window overlooking a city at dusk" class="w-full max-h-[250px] object-contain rounded-md">
                
                </div>

                <div class="col-span-1 flex flex-col items-center">
                  <p class="text-sm mb-2 text-center">Views from my college apartment</p>
                  <img src="/assets/groceries.JPG" alt="Street with a bicycle, buildings, and a crosswalk" class="w-full max-h-[180px] object-contain rounded-md">
                </div>

                <div class="col-span-full md:col-span-2 flex flex-col items-center">
                  <p class="text-sm mt-2 text-center">Rainy day in Niagara Falls</p>
                  <img src="/assets/niagara.jpeg" alt="Movieland Midway building with neon signs on a rainy street" class="w-full max-h-[290px] object-contain rounded-md">
                </div>
              </div>
            </div>

            <div class="inline-block w-full md:w-[80vw] lg:w-[60vw] h-full rounded-lg last:mr-0 align-top shrink-0">
              <!-- <h3 class="text-2xl font-bold mb-6 text-green-800 text-center">Nature Landscapes</h3>  -->
              <div class="grid grid-flow-col grid-rows-2 whitespace-normal">

                <div class="">
                  <img src="/assets/indura.jpeg" alt="View from the pier in Indura, Tela" class="w-full max-h-[250px] object-contain rounded-md">
                  <p class="text-sm text-center">Pier in Tela</p> 
                </div>


                <div class="">
                  <img src="/assets/trees.JPG" alt="Trees I thought up of in my mind" class="w-full max-h-[250px] object-contain rounded-md">
                  <p class="text-sm mb-2 text-center">Trees from my mind</p> 
                </div>

                <div class="row-span-2">
                  <img src="/assets/merendon.jpeg" alt="Merendon mountains and smog" class="w-full max-h-[500px] object-contain rounded-md">
                  <p class="text-sm mt-2 text-center">Merendon and smog</p>
                </div>
              </div>
            </div>

            <div class="inline-block w-full md:w-[80vw] lg:w-[40vw] h-full rounded-lg last:mr-0 align-center justify-center shrink-0">
              <!-- <h3 class="text-2xl font-bold mb-6 text-green-800 text-center">Still Life</h3>  -->

                <div class="">
                  <img src="/assets/candle.jpeg" alt="Candle lit in my room" class="w-full max-h-[450px] object-contain rounded-md">
                </div>

            </div>

            <div class="inline-block w-full md:w-[80vw] lg:w-[20vw] h-full  rounded-lg last:mr-0 align-center justify-center shrink-0">
              <!-- <h3 class="text-2xl font-bold mb-6 text-green-800 text-center">Still Life</h3>  -->

              <div class="grid grid-flow-col gap-2 grid-rows-2 whitespace-normal">

                <div class="">
                  <img src="/assets/avocados.JPG" alt="Avocados" class="w-full max-h-[270px] object-contain rounded-md">
                </div>

                <div class="">
                  <img src="/assets/coco.jpeg" alt="Coco" class="w-full max-h-[260px] object-contain rounded-md">
                </div>
              </div>
            </div>

            <div class="inline-block w-full md:w-[80vw] lg:w-[40vw] h-full rounded-lg last:mr-0 align-center justify-center shrink-0">
              <!-- <h3 class="text-2xl font-bold mb-6 text-green-800 text-center">Still Life</h3>  -->

                <div class="">
                  <img src="/assets/georgia.JPG" alt="Black Petunia and white Morning Glory" class="w-full max-h-[550px] object-contain rounded-md">
                </div>

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
