import { Component } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavBarComponent,
    FooterComponent,
    ContentContainerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'librarium';
}
