import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptCardComponent } from './opt-card.component';

describe('OptCardComponent', () => {
  let component: OptCardComponent;
  let fixture: ComponentFixture<OptCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
