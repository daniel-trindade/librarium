import { Component } from '@angular/core';
import { IconsCardComponent } from '../../components/icons-card/icons-card.component';

@Component({
  selector: 'app-home',
  imports: [
    IconsCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  image = 'public/girl.png';
}
