import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallProject } from './small-project';

describe('SmallProject', () => {
  let component: SmallProject;
  let fixture: ComponentFixture<SmallProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
