import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonogramComponent } from './nonogram.component';

describe('NonogramComponent', () => {
  let component: NonogramComponent;
  let fixture: ComponentFixture<NonogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonogramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
