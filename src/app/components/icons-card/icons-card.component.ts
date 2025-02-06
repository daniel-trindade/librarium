import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icons-card',
  imports: [],
  templateUrl: './icons-card.component.html',
  styleUrl: './icons-card.component.scss'
})
export class IconsCardComponent {
  @Input() title: string = 'title';
  @Input() img_source: string = 'img_source';
  @Input() img_alt: string = 'img_alt';
  @Input() link: string = 'link';
}
