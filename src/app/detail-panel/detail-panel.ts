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
        class="w-1/2 bg-violet-100 "
      >
        <!-- Close Button -->
        <div class="flex justify-end relative px-10">
          <div class="absolute fixed">
          <button
            (click)="closePanel()"
            class="text-indigo-800 flex-grow text-5xl"
          >
            &times;
          </button>
          </div>
        </div>

        <!-- Content Area -->
        <div class="serif-text py-5 mt-6 px-10">

          <div *ngIf="articleId === 'graduated'">
            <h2>Graduated!</h2>
            <p>Now that I’m done with Computer Engineering and it’s summer and the UofT Campus looks beautiful I want to take a moment to reflect on the places and moments that I cherish most from my five years here.</p>

            <div class="flex justify-center">
              <img class="flex-1 h-64 object-cover" src="/assets/knox-college-outside.jpeg" alt="My family and I outside Knox College Library">
              <img class="flex-1 h-64 object-cover" src="/assets/knox-college-inside.jpeg" alt="Columns inside of Kox Library">
            </div>
            <h3>Favourite library: Knox College Library</h3>
            <p>Although technically not a UofT library, it’s got a beautiful hall right next to king’s college circle with stained glass, antique desk lamps, and high chairs.</p>
            
            <h3>Favourite Classes I Took:</h3>
            <div class="flex justify-center">
              <img class="flex-1 w-full object-contain" src="/assets/planetmov-3.gif" alt="Computer graphics shader pipeline coursework">
            </div>
            <p>Computer Graphics taught by David Levin and Alec Jacobson</p>
            <div class="flex justify-center">
              <img class="flex-1 w-full object-contain" src="/assets/dsp-lec-notes.jpeg" alt="Digital Signal Processing Notes">
            </div>
            <p>Digital Signal Processing by Wei Yu. I also had the best TA during my time there called Aaron.</p>
            
            <div class="flex justify-center">
              <img class="flex-1 h-64 object-contain" src="/assets/galbraith-transmission-lab.jpeg" alt="Transmission line labe for Fields and Waves">
              <img class="flex-1 h-64 object-contain" src="/assets/galbraith-maia.jpeg" alt="Baby picture of me and Maia in Galbraith">
            </div>
            <h3>Eng Building I Spent the Most Time In: Galbraith</h3>
            <p>Most lectures and almost ALL upper year labs were here.</p>
            
            <div class="flex justify-center">
              <img class="flex-1 h-64 object-cover" src="/assets/kelly-zebra-rainbow.jpeg" alt="Rainbow crosswalk outside Kelly in June">
              <img class="flex-1 h-64 object-cover" src="/assets/kelly-outside.jpeg" alt="Outside Kelly Library">
            </div>
            <h3>Library I Spent the Most Time In: St Mike's Kelly Library</h3>
            <p>Kelly was across the street from where I lived so it was too convenient to go there despite the fact it is probably the university’s ugliest brutalist library beating out Robarts. Here is an article from 2022 that commemorates the time it became a film set for The Handmaid’s Tale around the time of midterms for that semester. </p>
            <a href="https://www.boundarynews.com/post/kelly-library-deemed-too-depressing-for-handmaid-s-tale-location">Kelly Library Deemed "Too Depressing" for Handmaid’s Tale Location</a>
          
            <div class="flex justify-center">
              <img class="flex-1 w-full object-cover" src="/assets/prefetcher-fail.jpg" alt="">
            </div>
            <h3>Hardest Class I Took:</h3>
            <p>Computer Architecture taught by Mark Jeffrey</p>
            
            <div class="flex justify-center">
              <img class="flex-1 h-64 object-contain" src="/assets/vic-snow.jpeg" alt="Victoria College in the snow">
              <img class="flex-1 h-64 object-cover" src="/assets/vic-arbor.jpeg" alt="Victoria College in summer">
              <img class="flex-1 h-64 object-cover" src="/assets/vic-tree.jpeg" alt="Victoria College in spring">
            </div>
            <h3>Favourite Quad: Victoria College</h3>
            <p>It became a routine to pick up a latte and sit under the ivy arbor. it’s especially beautiful in the spring and summer.</p>
          
            <h3>Favourite Restaurant Near School: Magic Noodle</h3>
            <p>On harbord, short walk from robarts. The Dan Dan Noodles at Sunny’s Chinese is very popular online but the Dan Dan noodles here are superior.</p>

          </div>

          <div *ngIf="articleId === 'code-camp'">
            <p>After finishing my eng studies I was looking to a join a women in STEM organization. I reached out to Joanna Pineda at HER CODE CAMP in February who is partnering with Ontario’s Pathway to Education to run their workshop this year! The mission of HER CODE CAMP is unique in that it offers the opportunity to build a project in six weeks to students from underserved communities — the sort of high school kids who don’t have access to a CS class or club through their school.</p>
            <p>The coolest thing is that the participants get to keep the laptops we provide them in class once they complete their project. I’m happy to be supporting this valuable initiative as Head of Logistics. My main goal is to secure sponsorships before the workshop begins in October. </p>
            <p>If you think you or your company could support in any way please contact me! </p>
            <p>hercodecamp&#64;gmail.com</p>
          </div>

          <div *ngIf="articleId === 'siggraph'">
            <p>Finally, SIGGRAPH comes to Canada!!!!!!!!!! I’m ecstatic to be going back again this year and a little sad that this is my last time as a Student Volunteer. </p>
            <p>In previous years my focus was a little scattered since I was entertaining the idea of grad school. I’ll be going back to the WIGGRAPH Researcher’s luncheon and support the people from the DGP Lab at the fast forward and technical papers. This year I’m prioritizing the production sessions. Specifically:</p>
            <li>
              <ul>Developing the Stylized World of The Wild Robot (I’ll fight for a seat if I have to)</ul>
              <ul>Superman: Harnessing Numeric Power for Cinematic Magic</ul>
              <ul>A Journey through Dystopia: The Last of Us</ul>
              <ul>Sand, Light, and Holograms: ImageEngine’s VFX in Dune Prophecy</ul>
            </li>
            <p>I’m looking forward to the animation festival the most! Honestly, can’t believe this conference is real still. </p>
          </div>

          <div *ngIf="articleId === 'superhost'">
            <p>When my mom decided to turn our house into an Airbnb, she told me she wanted me to handle everything on the platform. We compiled together pictures and crafted the description of our home in English and Spanish to go live with the listing. We anxiously waited for our first guest, it was February which isn’t a very busy month for tourism — especially in El Progreso which is the fourth largest city in Honduras. </p>
            <p>Initially we got some inquiries to handle business off the platform, which felt too risky for our taste. Nicholle from La Ceiba was our first five star review:</p>
            <p>I haven’t underestimated the power of reviews since. It has been steadily busy all spring and summer, although we did see a dip during the most politically uncertain times. The gamified features of the platform on the host side make the process kind of fun. We’re superhost status now and it is so fulfilling to see our guests’ response on their stays: </p>
            <p>I’m also really proud of my response stats: </p>
          </div>

          <div *ngIf="articleId === 'first-aid'">
            <p>This opportunity popped up part-time while I still find a full-time role. I thought it’d be a good idea to develop some more customer service experience, but mainly I’m learning how a small business is administered and operated. I want to develop my art practice and someday get to the point where I can sell originals and prints. Handling the orders once they come in is making me feel more comfortable about the idea of opening an e-shop in a couple years time. </p>
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
