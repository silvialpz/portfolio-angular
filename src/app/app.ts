import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true, // Important: Makes this component self-contained
  imports: [RouterModule], // RouterOutlet is typically used for routing, keep it for now.
  template: `
    <main>
      <div class="router-container">
        <router-outlet></router-outlet>
      </div>
    </main>
  `,
  styleUrl: './app.css' // Ensure this points to your main CSS file
})
export class App {

}