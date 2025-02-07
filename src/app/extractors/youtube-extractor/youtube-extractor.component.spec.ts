import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeExtractorComponent } from './youtube-extractor.component';

describe('YoutubeExtractorComponent', () => {
  let component: YoutubeExtractorComponent;
  let fixture: ComponentFixture<YoutubeExtractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubeExtractorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeExtractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
