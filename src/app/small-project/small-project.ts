import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-small-project',
  imports: [CommonModule],
  template: `
    <div class="m-16">
      <div class="bg-[#DECCED]
              h-auto min-h-[60vh] md:h-[70vh] lg:h-[80vh]
              flex flex-col md:flex-row
              items-center
              rounded-xl overflow-hidden shadow-sm
              mx-auto max-w-7xl">
        <div
          class="bg-[url(/assets/redesigning-my-website.gif)]
              w-full md:w-4/7
              h-[40vh] md:h-full
              bg-contain bg-center bg-no-repeat">
        </div>
        <div class="w-full md:w-2/5
                    p-8 md:p-12 
                    flex flex-col items-center md:items-start
                    justify-center
                    text-center md:text-left">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 md:mb-5">Redesigning My Website</h2>
          <h2 class="text-lg md:text-xl/snug mb-6 sans-serif-subtitle-text lg:pr-20">built with angular, styled with tailwind css, & hosted on cloudflare </h2>

          <a (click)="toggleModal()"
            class="bg-amber-300 mt-5 px-8 py-3 rounded-full text-center font-semibold text-gray-800 hover:bg-amber-400 transition-colors duration-200 w-fit">
            Learn More
          </a>
        </div>

       
      </div>
    </div>

    <div *ngIf="isModalVisible" class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="absolute inset-0 bg-[#DECCED]/90 backdrop-blur-sm" (click)="toggleModal()"></div>

      <div class="relative bg-[#DECCED] serif-text text-lg/5 rounded-lg shadow-xl p-8 w-11/12 md:w-2/3 lg:w-11/12 max-h-[80vh] overflow-y-auto space-y-2">
        <div class="flex justify-end items-center mb-4">
          <button class="text-violet-50 hover:text-red-300 text-3xl font-light" (click)="toggleModal()">&times;</button>
        </div>

        <div class="flex justify-end">
          <div class="bg-indigo-900  p-4 rounded-full text-violet-100 text-center inline-block">
            <a href="https://github.com/silvialpz/portfolio-angular" target="_blank">Github Link ↗</a>
          </div>
        </div>
        

        <p>Notion founder Ivan Zhao said <a class="link" href="https://www.youtube.com/watch?v=IIPKMixTMfE" target="_blank">on a podcast</a> that once you put too much of yourself into something, it becomes an art project. I’ve been working on my website this summer as a way to learn Google’s Angular framework and also to bring it one step closer to the kind of portfolio I want to have.</p>
        
        <p>I purchased my domain in early 2024, and I quickly made a React app in order to stake my claim on my plot of the internet. It was a simple site with three pages: Home, CV, and Art. I mainly used it as a way to link people to my GitHub and LinkedIn, as well as quick access to the digital art I made.</p>

        <div class="flex flex-row justify-between items-center">
          <img class="w-1/3 object-cover" src="/assets/website-about-page.png" alt="About page">
          <img class="w-1/3 object-cover" src="/assets/website-CV-page.png" alt="CV page">
          <img class="w-1/3 object-cover" src="/assets/website-art-page.png" alt="Art page">
        </div>

        <p>I used <a class="link" href="https://pages.cloudflare.com" target="_blank">Cloudflare</a> for web hosting. They have a service that allows you to connect your domain to a GitHub repo, and you can deploy a website for free. Here is the <a class="link" href="https://www.youtube.com/watch?v=MTc2CTYoszY&t=405s" target="_blank">original video</a> that helped me do all that.</p>

        <p>The theme was always blue and purple. It’s the same color palette I use for my physical business cards. I just dig it. Purple and blue both have really positive associations.</p>
        
        <img src="/assets/website-cards.jpeg" alt="Business cards" class="w-1/2 mx-auto">
        
        <h3>Inspiration</h3>

        <img src="/assets/website-figma.png" alt="Figma design screenshot">

        <p>Something I wanted to change with the newer version of my website is having something more scrollable. I wanted to replace the ‘About Me’ page with something more personable and hopefully more eye-catching than a block of text next to a portrait. I really like the design of <a class="link" href="https://www.wired.com" target="_blank">Wired</a> magazine’s front page; you can see I took inspiration from them.</p>

        <img src="/assets/website-wired.png" alt="Wired magazine screenshot">
        
        <p>While taking lessons from Wired, I also noticed that a lot of the visual interest comes from the use of different typefaces. I looked up the sans-serif font that they use for their bold headlines—it's a custom font family called <a class="link" href="https://www.instagram.com/p/DFDpmQTRoOy/" target="_blank">Wired Display</a>. What kept me from copying them 1:1 is that it’s not a free font. I researched alternative font families that would work well together, after testing out a few I decided upon this set:</p>

        <ul style="list-style-type:disc;">
          <li><strong class="serif-title-text">Alegreya</strong> — love this serif font for the body of articles and things I don’t want the eye to just skim through. It feels classic but not plain.</li>
          <li><strong class="sans-serif-subtitle-text">Source Code Pro</strong> — love this for labels and subheadings. It adds a techy aesthetic to the mix.</li>
          <li><strong class="goldich-title-text">Goldich</strong> — this is my big, beautiful font for headings. It’s what I settled for since I couldn’t use Wired Display. I’m really happy with how geometric it is. <br> The <strong class="text-2xl goldich-title-text">S</strong> and <strong class="text-2xl goldich-title-text">Z</strong> in my name both have these sharp, triangular terminals that balance each other nicely.</li>
        </ul>

        <p>These are all available for free on Adobe Fonts, which is what I used to embed these fonts into my app.</p>

        <p>Next, I needed project cards. The most important part of a portfolio is the projects you showcase. I was scrolling through the Apple website one day, and I really liked this type of container with a large image and small text next to it.</p>

        <img src="/assets/website-apple.png" alt="Apple website screenshot">
        
        <p>Finally, I still wanted to showcase my art on the website, and I kept finding that regular gallery or grid components drew too much attention or not enough. I started looking for references and thought maybe art museums would have interesting ways of displaying art on the web. I took the horizontal scroll element from the <a class="link" href="https://www.vangoghmuseum.nl/nl" target="_blank">Van Gogh Museum website.</a></p>

        <img class="w-1/2 mx-auto" src="/assets/website-vang-gogh.gif" alt="Van Gogh Museum website screenshot">

        <h3>What’s Next?</h3>

        <p>This has been largely a front-end project so far. I like this as a base to build upon, and I’m excited to implement some new ideas.</p>

        <ul style="list-style-type:disc;">
          <li>Create a database for the personal updates section, and include a paginated archive.</li>
          <li>I want to include videos and more media files. Will this slow down the app? Should I add a loading screen? How do you make beautiful websites fast?</li>
          <li>I like how these contact links are styled/embedded in <a class="link" href="http://bento.me" target="_blank" rel="noopener noreferrer">bento.me</a> — I want to have something like that integrated in the website when you hit the CONTACT link.</li>
          <li>Learn more about scalable Angular project architecture. In order to get started, I used this link, and I remember them using mostly components and interfaces. I want to organize my project files by modules and/or features.</li>
          <li>Tag projects by skill, have options to sort and filter them. Then I could probably control what version of my website recruiters see by sending them a different link.</li>
          <li>Add a lightbox feature for all images</li>
          <li>Search bar.</li>
        </ul>
      </div>
    </div>
  `,
  styleUrl: './small-project.css'
})
export class SmallProject {

  // State to track if the modal is open
  isModalVisible: boolean = false;

  // Method to toggle the modal's visibility
  toggleModal(): void {
    this.isModalVisible = !this.isModalVisible;
  }
}