import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-opt-card',
  imports: [],
  templateUrl: './opt-card.component.html',
  styleUrl: './opt-card.component.scss'
})
export class OptCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() image_alt: string = '';
  @Input() link: string = '';
}
