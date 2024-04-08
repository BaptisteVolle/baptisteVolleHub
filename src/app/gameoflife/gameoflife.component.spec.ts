import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameoflifeComponent } from './gameoflife.component';

describe('GameoflifeComponent', () => {
  let component: GameoflifeComponent;
  let fixture: ComponentFixture<GameoflifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameoflifeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameoflifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
