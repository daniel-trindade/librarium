import { Component } from '@angular/core';
import { OptCardComponent } from '../../components/opt-card/opt-card.component';


@Component({
  selector: 'app-home',
  imports: [
    OptCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  image = 'public/girl.png';
}
