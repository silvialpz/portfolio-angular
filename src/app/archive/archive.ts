import { Component } from '@angular/core';
import { SmallUpdateComponent } from '../small-update/small-update';
import { BigUpdateComponent } from '../big-update/big-update';
import { RouterModule } from '@angular/router';
import { DetailPanelComponent } from '../detail-panel/detail-panel';

interface Article {
  // title: string;
  // imageUrl: string;
  // description: string;
  id: string;
}

@Component({
  selector: 'app-archive',
  imports: [SmallUpdateComponent, BigUpdateComponent, RouterModule, DetailPanelComponent],
  template: `
    <main>
      <a class="text-5xl" routerLink="/">&#8592;</a>
      <div class="flex justify-center">

        <div class="w-1/4">
          <app-big-update
            title=""
            imageUrl="/assets/code-camp.gif"
            description="Joined HER CODE CAMP as Head of Logistics"
            (click)="openDetailPanel({ id: 'code-camp' })"
          ></app-big-update>

          <hr class="">

          <app-small-update
            title="Bridging Language Gaps as an Administrator for Toronto First Aid"
            imageUrl="/assets/toronto-first-aid.png"
            description=""
            (click)="openDetailPanel({ id: 'first-aid' })"
          ></app-small-update>

          <hr class="">

          <app-big-update
            title=""
            imageUrl="/assets/siggraph2025.png"
            description="Going to Vancouver to be a Student Volunteer a 3rd and Final Time"
            (click)="openDetailPanel({ id: 'siggraph' })"
          ></app-big-update>

          <hr class="">

        </div>
      </div>

      <app-detail-panel
        [isOpen]="isDetailPanelOpen"
        [articleId]="selectedArticleId"
        (close)="closeDetailPanel()"
      ></app-detail-panel>

    </main>

    
  `,
  styleUrl: './archive.css'
})
export class Archive {

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
