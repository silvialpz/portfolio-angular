import { Component, Input, Output, EventEmitter, input, AfterViewInit, Renderer2, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

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
      </div>

      <div
        style="position: fixed; top: 0; right: 0; height: 100%; z-index: 50; padding: 20px; overflow-y: auto;"
        class="w-1/2 bg-violet-100 "
      >
        <!-- Close Button -->
        <div class="flex justify-end relative px-10">
          <div class="absolute">
          <button
            (click)="closePanel()"
            class="text-indigo-800 flex-grow text-5xl"
          >
            &times;
          </button>
          </div>
        </div>

        <!-- Content Area -->
        <div class="serif-text py-5 mt-6 px-15 leading-5">

          <div *ngIf="articleId === 'graduated'" class="flex flex-col gap-2">
            <p>Now that I’m done with Computer Engineering and it’s summer and the UofT Campus looks beautiful I want to take a moment to reflect on the places and moments that I cherish most from my five years here.</p>

            <div class="flex justify-center pt-6">
              <img class="flex-1 h-64 object-cover" src="/assets/knox-college-outside.jpeg" alt="My family and I outside Knox College Library">
              <img class="flex-1 h-64 object-cover" src="/assets/knox-college-inside.jpeg" alt="Columns inside of Kox Library">
            </div>
            <h3 class="serif-heading">Favourite library: Knox College Library</h3>
            <p>Although technically not a UofT library, it’s got a beautiful hall right next to king’s college circle with stained glass, antique desk lamps, and high chairs.</p>
            
            <h3 class="serif-heading  pt-6">Favourite Courses I Took:</h3>
            <div class="flex justify-center">
              <img class="flex-1 w-full object-contain" src="/assets/planetmov-3.gif" alt="Computer graphics shader pipeline coursework">
            </div>
            <p>Computer Graphics taught by David Levin and Alec Jacobson</p>
            <div class="flex justify-center">
              <img class="flex-1 w-full object-contain" src="/assets/dsp-lec-notes.jpeg" alt="Digital Signal Processing Notes">
            </div>
            <p>Digital Signal Processing by Wei Yu. I also had the best TA during my time there called Aaron.</p>
            
            <div class="flex justify-center pt-6">
              <img class="flex-1 h-64 object-contain" src="/assets/galbraith-transmission-lab.jpeg" alt="Transmission line labe for Fields and Waves">
              <img class="flex-1 h-64 object-contain" src="/assets/galbraith-maia.jpeg" alt="Baby picture of me and Maia in Galbraith">
            </div>
            <h3 class="serif-heading">Eng Building I Spent the Most Time In: Galbraith</h3>
            <p>Most lectures and almost ALL upper year labs were here.</p>
            
            <div class="flex justify-center  pt-6">
              <img class="flex-1 h-64 object-cover" src="/assets/kelly-zebra-rainbow.jpeg" alt="Rainbow crosswalk outside Kelly in June">
              <img class="flex-1 h-64 object-cover" src="/assets/kelly-outside.jpeg" alt="Outside Kelly Library">
            </div>
            <h3 class="serif-heading">Library I Spent the Most Time In: St Mike's Kelly Library</h3>
            <p>Kelly was across the street from where I lived so it was too convenient to go there despite the fact it is probably the university’s ugliest brutalist library beating out Robarts. Here is an article from 2022 that commemorates the time it became a film set for The Handmaid’s Tale around the time of midterms for that semester. </p>
            <div class="bg-indigo-900 p-4 rounded-full text-violet-100 text-center flex-none">
              <a href="https://www.boundarynews.com/post/kelly-library-deemed-too-depressing-for-handmaid-s-tale-location" target="_blank">Kelly Library Deemed "Too Depressing" for Handmaid’s Tale Location ↗</a>
            </div>
            
          
            <div class="flex justify-center pt-6">
              <img class="flex-1 w-full object-cover" src="/assets/prefetcher-fail.jpg" alt="">
            </div>
            <h3 class="serif-heading">Hardest Course I Took (imo): </h3>
            <p>Computer Architecture taught by Mark Jeffrey</p>
            
            <div class="flex justify-center pt-6">
              <img class="flex-1 h-64 object-contain" src="/assets/vic-snow.jpeg" alt="Victoria College in the snow">
              <img class="flex-1 h-64 object-cover" src="/assets/vic-arbor.jpeg" alt="Victoria College in summer">
              <img class="flex-1 h-64 object-cover" src="/assets/vic-tree.jpeg" alt="Victoria College in spring">
            </div>
            <h3 class="serif-heading">Favourite Quad: Victoria College</h3>
            <p>It became a routine to pick up a latte and sit under the ivy arbor. it’s especially beautiful in the spring and summer.</p>
          
            <h3 class="serif-heading pt-6">Favourite Restaurant Near School: Magic Noodle</h3>
            <p>On harbord, short walk from robarts. The Dan Dan Noodles at Sunny’s Chinese is very popular online but the Dan Dan noodles here are superior.</p>

          </div>

          <div *ngIf="articleId === 'code-camp'" class="flex flex-col gap-4">
            <a href="https://hercodecamp.com" target="_blank" class="block">
              <div class="bg-amber-300 p-4 rounded-full text-black hover:bg-amber-400 text-center flex-none sans-serif-subtitle-text flex justify-center items-center">
                <img src="/assets/logo-mark.inline.svg" class="size-6 mx-2" alt="HER CODE CAMP inline logo">
                HER CODE CAMP
              </div>
            </a>
            <p class="pt-2">After finishing my eng studies I was looking to a join a women in STEM organization. I reached out to Joanna Pineda at HER CODE CAMP in February who is partnering with Ontario’s Pathway to Education to run their workshop this year! The mission of HER CODE CAMP is unique in that it offers the opportunity to build a project in six weeks to students from underserved communities — the sort of high school kids who don’t have access to a CS class or club through their school.</p>
            <p>The coolest thing is that the participants get to keep the laptops we provide them in class once they complete their project. I’m happy to be supporting this valuable initiative as Head of Logistics. My main goal is to secure sponsorships before the workshop begins in October. </p>
            <p>If you think you or you or your organization could support in any way please contact me! </p>
            <p class="text-xl sans-serif-label-text">&#9993; hercodecamp&#64;gmail.com</p>
          </div>

          <div *ngIf="articleId === 'siggraph'" class="flex flex-col gap-4">
            <p>Finally, SIGGRAPH comes to Canada!!!!!!!!!! I’m ecstatic to be going back again this year and a little sad that this is my last time as a Student Volunteer. </p>
            <p>In previous years my focus was a little scattered since I was entertaining the idea of grad school. I’ll be going back to the WIGGRAPH Researcher’s luncheon and support the people from the DGP Lab at the fast forward and technical papers. This year I’m prioritizing the production sessions. Specifically:</p>
            <ul style="list-style-type:disc;">
              <li>Developing the Stylized World of The Wild Robot (I’ll fight for a seat if I have to)</li>
              <li>Superman: Harnessing Numeric Power for Cinematic Magic</li>
              <li>A Journey through Dystopia: The Last of Us</li>
              <li>Sand, Light, and Holograms: ImageEngine’s VFX in Dune Prophecy</li>
            </ul>
            <p>I’m looking forward to the animation festival the most! Honestly, can’t believe this conference is real still. </p>
            <p>I'm really looking forward to seeing all the returning SV's again as well :)</p>
            <div class="flex justify-center  pt-6">
              <img class="flex-1 h-64 object-contain" src="/assets/Angelinos.jpeg" alt="Nastasia, Declan, Rob, Anav, and me">
              <img class="flex-1 h-64 object-contain" src="/assets/TL-girlbosses.jpeg" alt="Pam, Genesis, and me">
            </div>
            <div class="flex justify-center  pt-6">
              <img class="flex-1 h-64 object-contain" src="/assets/TL-selfie.jpeg" alt="All of the 2024 TL's in Denver">
            </div>
          </div>

          <div *ngIf="articleId === 'superhost'" class="flex flex-col gap-4">
            <div class="airbnb-embed-frame" data-id="1323510314811036135" data-view="home" data-hide-price="true" style="width: 450px; height: 300px; margin: auto;"><a href="https://www.airbnb.ca/rooms/1323510314811036135?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget">View On Airbnb</a><a href="https://www.airbnb.ca/rooms/1323510314811036135?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget" rel="nofollow">Home in El Progreso · ★5.0 · 3 bedrooms · 3 beds · 2.5 baths</a></div>
            <p>When we decided to turn our house into an Airbnb, I knew it would be up to me to handle everything on the platform. We compiled together pictures and crafted the description of our home in English and Spanish to go live with the listing. We anxiously waited for our first guest, it was February which isn’t a very busy month for tourism — especially in El Progreso which is the fourth largest city in Honduras. </p>
            <p>Initially we got some inquiries to handle business off the platform, which felt too risky for our taste. Nicholle from La Ceiba was our first five star review:</p>
            <div class="flex justify-center py-2">
              <img class="flex-1 h-64 object-contain" src="/assets/Nicholle-review.jpg" alt="Nicholle airbnb positive review">
            </div>
            <p>I haven’t underestimated the power of reviews since. It has been steadily busy all spring and summer, although we did see a dip during the most politically uncertain times. The gamified features of the platform on the host side make the process kind of fun. We’re superhost status now and it is so fulfilling to see our guests’ response on their stays: </p>
            <div class="flex justify-center gap-1 items-start py-2">
              <img class="w-1/3 object-contain" src="/assets/Carlos-review.jpg" alt="Carlos airbnb positive review">
              <img class="w-1/3 object-contain" src="/assets/Nancy-review.jpg" alt="Nancy airbnb positive review">
              <img class="w-1/3 object-contain" src="/assets/Saddam-review.jpg" alt="Saddam airbnb positive review">
            </div>
            <p>I’m also really proud of my response stats: </p>
            <div class="flex justify-center py-2">
              <img class="object-contain w-1/2" src="/assets/response-rate.png" alt="Airbnb response rate">
            </div>

            <p>Most of the heavy lifting is really done by the stunning views of the mountain though.</p>
            <div class="flex flex-grow">
              <img src="/assets/rosamanda.jpeg" alt="mountain view in Colonia Rosmaanda">
            </div>

          </div>

          <div *ngIf="articleId === 'first-aid'" class="flex flex-col gap-4">
            <div class="bg-red-600 p-4 rounded-full text-violet-100 text-center flex-none sans-serif-subtitle-text">
              <a href="https://torontofirstaid.net" target="_blank">Toronto First Aid Certification ↗</a>
            </div>
            <p class="pt-4">This opportunity popped up part-time while I still find a full-time role. Toronto First Aid was looking for a Spanish speaking administrator to be able to reach the latino demographic with their new Spanish CPR class offerings partnering with the Red Cross.</p>
            <p>I thought it’d be a good idea to develop some more customer service experience, but mainly I’m learning how a small business is administered and operated. I want to develop my art practice and someday get to the point where I can sell originals and prints. Handling the orders once they come in is making me feel more comfortable about the idea of opening an e-shop in a couple years time.</p>
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
export class DetailPanelComponent implements AfterViewInit {
  @Input() isOpen: boolean = false; 
  @Input() articleId: any | null = null;

  @Output() close = new EventEmitter<void>();

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit(): void {
    if (this.articleId === 'superhost') {
      this.loadAirbnbScript();
    }
  }

  ngOnChanges(): void {
    // This is useful if the articleId can change while the panel is open
    if (this.articleId === 'superhost' && this.isOpen) {
      this.loadAirbnbScript();
    }
  }
  
  closePanel() {
    this.close.emit();
  }

  private loadAirbnbScript(): void {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.airbnb.ca/embeddable/airbnb_jssdk';
    script.async = true;
    
    // Check if the script is already loaded to avoid duplicates
    const existingScript = this.document.querySelector(`script[src="${script.src}"]`);
    if (!existingScript) {
      this.renderer.appendChild(this.document.body, script);
    }
  }
}
