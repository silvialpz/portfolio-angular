import { Component, signal } from '@angular/core';
import { BigUpdateComponent } from '../big-update/big-update';
import { SmallUpdateComponent } from '../small-update/small-update';
import { DetailPanelComponent } from '../detail-panel/detail-panel';
import { BigProjectComponent } from '../big-project/big-project';
import { LabelComponent } from '../label/label';
import { ArtSection } from '../art-section/art-section';
import { SmallProject } from '../small-project/small-project';
import { ContactSection } from '../contact-section/contact-section';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Article {
  // title: string;
  // imageUrl: string;
  // description: string;
  id: string;
}

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, BigUpdateComponent, SmallUpdateComponent, DetailPanelComponent, BigProjectComponent, LabelComponent, ArtSection, SmallProject, ContactSection, RouterModule],
  template: `
    <main class="min-h-screen ">
      <header class="mb-1 text-center flex items-end justify-between text-lg px-8 pt-8">
          <div class="flex justify-around flex-grow">
            <a href="#projects" class="sans-serif-subtitle-text">Projects</a>
            <a href="#artSection" class="sans-serif-subtitle-text">Art</a>
          </div>
          <a class="text-5xl font-extrabold" style="text-transform: uppercase;" href="/">SILVIA LOPEZ</a>
          <div class="flex-grow justify-around flex">
            <a class="sans-serif-subtitle-text" href="/assets/Silvia_Lopez_TD_Sep2025.pdf" target="_blank">Resume</a>
            <a
              class="sans-serif-subtitle-text cursor-pointer"
              (click)=toggle()
              [attr.aria-expanded]="isContactOpen"
            >
              Contact
            </a>
          </div>
        </header>

      <!-- Inline contact drawer (animates open/closed) -->
       <div class="contact-container" [class.open]="isOpen()">
        <app-contact-section class="content"></app-contact-section>
       </div>
        

      <div class="px-8 pb-8">
        <div class="about-me mx-auto w-full  pb-5 ">

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
        
        <div class="grid grid-cols-1 md:grid-cols-8">  <!-- setting up a 3 column grid and let big updates span two columns -->
          <!-- Left Column: Big Updates (Career Focused) -->
          <div class="md:col-span-2">
            <!-- Big update components will go here -->
              <!-- <app-big-update
                title=""
                imageUrl="/assets/code-camp.gif"
                description="CTRL+ALT+SLAY: being a mentor for HER CODE CAMP's Intro Programming Workshop  "
                (click)="openDetailPanel({ id: 'ctrl-alt-slay' })"
              ></app-big-update> -->

              

              <app-big-update
                title=""
                description="Discovering Houdini 21 at SideFX's Equinox Event in Toronto"
                imageUrl="/assets/houdini.png"
                (click)="openDetailPanel({ id: 'equinox' })"
              >
              </app-big-update>

              <app-small-update
              title="Making an Environment: My Render from an Unreal Engine Intro Workshop"
              imageUrl="/assets/unreal-intro-workshop.png"
              description=""
              (click)="openDetailPanel({ id: 'unreal-workshop' })"
            >
            </app-small-update>
          </div>

          <div class="md:col-span-4">
            <app-big-update
                title="Completed My Computer Engineering Degree at UofT"
                imageUrl="/assets/graduated.jpg"
                description="Now seeking an entry level role animation/VFX"
                (click)="openDetailPanel({ id: 'graduated' })"
              ></app-big-update>
          </div>

          <!-- Right Column: Small Updates (General Life) -->
          <div class="md:col-span-2">
            <!-- Small update components will go here -->

            <app-small-update
              title="Volunteering at the Women in Film & Television Crystal Awards Gala"
              imageUrl="/assets/wift-gala.png"
              description=""
              (click)="openDetailPanel({ id: 'wift-gala' })"
            >
            </app-small-update>

            <app-small-update
              title="Chronicling My Struggles with the Nasal Vowels as I Learn French"
              imageUrl="/assets/learning-french.png"
              description=""
              (click)="openDetailPanel({ id: 'learning-french' })"
            >
            </app-small-update>

            <app-small-update
              title="Guessing at Anatomy in Toronto School of Art's Life Drawing Sessions"
              imageUrl="/assets/life-drawing.png"
              description=""
              (click)="openDetailPanel({ id: 'life-drawing' })"
            >
            </app-small-update>

            <app-small-update
              title="First Five Months of Hosting on Airbnb and I'm now a Superhost"
              imageUrl="/assets/rosamanda.png"
              description=""
              (click)="openDetailPanel({ id: 'superhost' })"
            >
            </app-small-update>

            
            
          </div>
        </div>

        <div class="flex flex-row justify-between">
          <div>
            <p class="sans-serif-label-text">Last Updated: January 12, 2026</p>
          </div>
          <div class="flex flex-row items-center space-x-0.5 justify-end">
            <img src="/assets/archive-icon.svg" alt="Archive Icon" class="w-5 h-5"/>
            <a routerLink="/archive" class="sans-serif-label-text underline">Archive</a>
          </div>
        </div>

        
      </div>

      <!-- Projects will go here -->
      <section id="projects">
        <app-label labelText="Projects"></app-label>
        <app-small-project></app-small-project>
        <app-big-project id="capstone"></app-big-project>
      </section>

      <section id="artSection" class="h-[90vh] flex flex-col">
        <app-label labelText="Art"></app-label>
        <app-art-section></app-art-section>
      </section>
      <p class="sans-serif-subtitle-text">&copy; Silvia Carolina Lopez Portillo</p>
      </div>
      <!-- This will be the main container for your two columns -->
      

      
    </main>

    <app-detail-panel
      [isOpen]="isDetailPanelOpen"
      [articleId]="selectedArticleId"
      (close)="closeDetailPanel()"
    ></app-detail-panel>
    
  `,
  styleUrl: './home-page.css'
})
export class HomePage {
  isDetailPanelOpen: boolean = false;
  selectedArticleId: string | null = null;
  isContactOpen = false;

  openDetailPanel(article: Article) {
    this.isDetailPanelOpen = true;
    this.selectedArticleId = article.id;
  }

  closeDetailPanel() {
    this.isDetailPanelOpen = false;
    this.selectedArticleId = null;
  }

  isOpen = signal(false);
  toggle() {
    this.isOpen.update((isOpen) => !isOpen);
  }
}
