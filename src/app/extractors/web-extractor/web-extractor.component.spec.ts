import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebExtractorComponent } from './web-extractor.component';

describe('WebExtractorComponent', () => {
  let component: WebExtractorComponent;
  let fixture: ComponentFixture<WebExtractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebExtractorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebExtractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
