import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigUpdate } from './big-update';

describe('BigUpdate', () => {
  let component: BigUpdate;
  let fixture: ComponentFixture<BigUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
