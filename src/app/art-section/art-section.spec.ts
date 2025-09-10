import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtSection } from './art-section';

describe('ArtSection', () => {
  let component: ArtSection;
  let fixture: ComponentFixture<ArtSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
