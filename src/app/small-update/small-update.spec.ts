import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallUpdate } from './small-update';

describe('SmallUpdate', () => {
  let component: SmallUpdate;
  let fixture: ComponentFixture<SmallUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
