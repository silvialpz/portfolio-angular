import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  imports: [],
  template: `
    <div class="border-t-4">
      <div class="bg-indigo-800 text-violet-100 px-3 py-1 flex items-center justify-start w-fit rounded-br-md">
        <h2 class="text-sm font-semibold text-center whitespace-nowrap sans-serif-label-text">{{ labelText }}</h2>
      </div>
    </div>
  `,
  styleUrl: './label.css'
})
export class LabelComponent {
  @Input() labelText: string = ""; 
}
