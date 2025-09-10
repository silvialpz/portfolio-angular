import { ChangeDetectionStrategy, Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-art-section',
  imports: [],
  template: `
    <div id="mainContentWrapper" class="flex-grow py-4 flex h-full font-serif">

      <div #horizontalScrollContainer id="horizontalScrollContainer" class="flex overflow-x-auto whitespace-nowrap flex-grow">

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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtSection implements AfterViewInit {
  @ViewChild('horizontalScrollContainer') scrollContainer!: ElementRef;

  ngAfterViewInit() {
    console.log('ngAfterViewInit fired. Attaching wheel event listener.');
    this.scrollContainer.nativeElement.addEventListener('wheel', this.handleScroll.bind(this), { passive: false });
  }

  handleScroll(event: WheelEvent) {
    console.log('Wheel event fired. deltaY:', event.deltaY);
    const container = this.scrollContainer.nativeElement;
    const isAtStart = container.scrollLeft === 0 && event.deltaY < 0;
    const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight;
    
    if (isAtStart) {
      // Do nothing, let the default vertical scroll happen.
      return;
    }
    if (isAtBottom){
      event.preventDefault();
      this.scrollContainer.nativeElement.scrollBy({
        left: event.deltaY
      });
    }
  }
}
